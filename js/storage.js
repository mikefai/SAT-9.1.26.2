/**
 * SAT READING SKILLS ACADEMY - Local Storage Manager
 * Zero network dependencies. Handles state persistence, schema migrations,
 * automatic mistake error logging, student notes, annotations, grammar & daily vocab.
 */

const StorageManager = (function() {
  const STORAGE_KEY = CONFIG.STORAGE_KEY;
  const CURRENT_SCHEMA_VERSION = 2;

  /**
   * Generates a fresh default state object
   */
  function createDefaultState() {
    const defaultState = {
      schemaVersion: CURRENT_SCHEMA_VERSION,
      createdAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      theme: CONFIG.THEME_DEFAULT,
      eslSupport: CONFIG.ESL_SUPPORT_DEFAULT,
      turkishSupport: true,
      teacherMode: false,
      activeModuleId: "MOD-0",
      activeStageNumber: 1,
      studyStreak: {
        current: 1,
        best: 1,
        lastStudyDate: new Date().toISOString().slice(0, 10),
        minutesToday: 5,
        targetMinutes: 20
      },
      masteredVocabWords: {}, // Key: word, Value: ISO timestamp
      flaggedQuestions: {}, // Key: questionId, Value: boolean
      modules: {},
      grammar: {},
      errorLog: [], // Automatic Error Log for mistakes
      studentNotes: {}, // Scratchpad and reflections
      textAnnotations: {}, // Highlighting and underlining per passage
      dailyVocabProgress: {}, // 30-day vocabulary progress
      trapErrors: {
        "Too Extreme": 0,
        "Half Right": 0,
        "Opposite": 0,
        "Out of Scope": 0,
        "Wrong Meaning": 0,
        "Misused Evidence": 0
      },
      stats: {
        totalQuestionsAttempted: 0,
        totalCorrect: 0,
        totalHintsUsed: 0,
        guidedCompletedCount: 0,
        independentCompletedCount: 0,
        grammarCompletedCount: 0,
        vocabCompletedCount: 0
      }
    };

    // Reading Modules init
    MODULES_CONFIG.forEach(mod => {
      defaultState.modules[mod.id] = {
        id: mod.id,
        status: CONFIG.STATUS_LABELS.NOT_STARTED,
        stagesCompleted: [],
        workedExamplesViewed: [],
        trapLab: {
          completed: false,
          attempts: {}
        },
        guided: {
          items: {},
          hintsUsedTotal: 0,
          completedCount: 0
        },
        independent: {
          items: {},
          completedCount: 0,
          correctCount: 0
        },
        selfAssessment: null
      };
    });

    // Grammar Modules init
    if (typeof GRAMMAR_MODULES_CONFIG !== "undefined") {
      GRAMMAR_MODULES_CONFIG.forEach(gmod => {
        defaultState.grammar[gmod.id] = {
          id: gmod.id,
          status: CONFIG.STATUS_LABELS.NOT_STARTED,
          completedCount: 0,
          correctCount: 0,
          items: {}
        };
      });
    }

    return defaultState;
  }

  /**
   * Retrieves the raw or initialized state from localStorage
   */
  function getState() {
    try {
      const serialized = localStorage.getItem(STORAGE_KEY);
      if (!serialized) {
        const fresh = createDefaultState();
        saveState(fresh);
        return fresh;
      }
      const parsed = JSON.parse(serialized);
      // Ensure missing schema fields are initialized
      if (!parsed.errorLog) parsed.errorLog = [];
      if (!parsed.studentNotes) parsed.studentNotes = {};
      if (!parsed.textAnnotations) parsed.textAnnotations = {};
      if (!parsed.dailyVocabProgress) parsed.dailyVocabProgress = {};
      if (!parsed.masteredVocabWords) parsed.masteredVocabWords = {};
      if (!parsed.grammar) parsed.grammar = {};
      if (parsed.turkishSupport === undefined) parsed.turkishSupport = true;
      if (!parsed.studyStreak) {
        parsed.studyStreak = {
          current: 1,
          best: 1,
          lastStudyDate: new Date().toISOString().slice(0, 10),
          minutesToday: 5,
          targetMinutes: 20
        };
      } else {
        // Streak day rollover check
        const todayStr = new Date().toISOString().slice(0, 10);
        const lastStr = parsed.studyStreak.lastStudyDate || todayStr;
        if (lastStr !== todayStr) {
          const diffDays = Math.round((new Date(todayStr) - new Date(lastStr)) / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            parsed.studyStreak.current = (parsed.studyStreak.current || 1) + 1;
            parsed.studyStreak.best = Math.max(parsed.studyStreak.best || 1, parsed.studyStreak.current);
          } else if (diffDays > 1) {
            parsed.studyStreak.current = 1;
          }
          parsed.studyStreak.lastStudyDate = todayStr;
          parsed.studyStreak.minutesToday = 0;
        }
      }
      return parsed;
    } catch (e) {
      console.error("Failed to parse LocalStorage state:", e);
      return createDefaultState();
    }
  }

  /**
   * Commits the updated state to localStorage
   */
  function saveState(state) {
    try {
      state.lastActiveAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save to LocalStorage:", e);
    }
  }

  /**
   * Gets specific module state
   */
  function getModuleState(moduleId) {
    const state = getState();
    return state.modules[moduleId] || null;
  }

  /**
   * Marks a stage complete for a module
   */
  function markStageComplete(moduleId, stageNumber) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    if (!mod.stagesCompleted.includes(stageNumber)) {
      mod.stagesCompleted.push(stageNumber);
    }
    updateModuleStatus(mod);
    saveState(state);
  }

  /**
   * Records a Guided Practice attempt
   */
  function recordGuidedAnswer(moduleId, itemId, selectedChoice, isCorrect, hintsUsed) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    mod.guided.items[itemId] = {
      selected: selectedChoice,
      isCorrect: isCorrect,
      hintsUsed: hintsUsed,
      timestamp: new Date().toISOString()
    };

    mod.guided.completedCount = Object.keys(mod.guided.items).length;
    mod.guided.hintsUsedTotal = Object.values(mod.guided.items).reduce((acc, curr) => acc + curr.hintsUsed, 0);

    state.stats.totalQuestionsAttempted++;
    if (isCorrect) state.stats.totalCorrect++;
    state.stats.totalHintsUsed += hintsUsed;

    updateModuleStatus(mod);
    saveState(state);
  }

  /**
   * Records an Independent Practice attempt
   */
  function recordIndependentAnswer(moduleId, itemId, selectedChoice, isCorrect, timeSpentSeconds, trapHit) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    mod.independent.items[itemId] = {
      selected: selectedChoice,
      isCorrect: isCorrect,
      timeSpent: timeSpentSeconds,
      trapHit: trapHit || null,
      timestamp: new Date().toISOString()
    };

    mod.independent.completedCount = Object.keys(mod.independent.items).length;
    mod.independent.correctCount = Object.values(mod.independent.items).filter(i => i.isCorrect).length;

    state.stats.totalQuestionsAttempted++;
    state.stats.independentCompletedCount++;
    if (isCorrect) state.stats.totalCorrect++;

    if (!isCorrect && trapHit && state.trapErrors[trapHit] !== undefined) {
      state.trapErrors[trapHit]++;
    }

    updateModuleStatus(mod);
    saveState(state);
  }

  /**
   * Records a Trap Lab drill attempt
   */
  function recordTrapLabAnswer(moduleId, drillId, selectedTrap, isCorrect, targetTrap) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    mod.trapLab.attempts[drillId] = {
      selectedTrap,
      isCorrect,
      targetTrap,
      timestamp: new Date().toISOString()
    };

    state.stats.totalQuestionsAttempted++;
    if (isCorrect) state.stats.totalCorrect++;

    if (!isCorrect && state.trapErrors[targetTrap] !== undefined) {
      state.trapErrors[targetTrap]++;
    }

    updateModuleStatus(mod);
    saveState(state);
  }

  /**
   * Records Self-Assessment Rubric scores
   */
  function recordSelfAssessment(moduleId, answersObject) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    mod.selfAssessment = {
      answers: answersObject,
      completedAt: new Date().toISOString()
    };

    updateModuleStatus(mod);
    saveState(state);
  }

  /**
   * Evaluates and updates module status based on mastery rules
   */
  function updateModuleStatus(mod) {
    const indCount = Object.keys(mod.independent.items).length;
    const guidedCount = Object.keys(mod.guided.items).length;
    const totalInd = 4; // 4 independent items per module

    if (indCount >= totalInd) {
      const accuracy = mod.independent.correctCount / totalInd;
      const avgHints = guidedCount > 0 ? (mod.guided.hintsUsedTotal / guidedCount) : 0;

      if (accuracy >= CONFIG.MASTERY_THRESHOLDS.MIN_INDEPENDENT_ACCURACY && avgHints <= CONFIG.MASTERY_THRESHOLDS.MAX_AVERAGE_HINTS) {
        mod.status = CONFIG.STATUS_LABELS.MASTERED;
      } else if (indCount > 0 || guidedCount > 0) {
        mod.status = CONFIG.STATUS_LABELS.PRACTICING;
      }
    } else if (guidedCount > 0) {
      mod.status = CONFIG.STATUS_LABELS.PRACTICING;
    } else if (mod.stagesCompleted.length > 0) {
      mod.status = CONFIG.STATUS_LABELS.LEARNING;
    }
  }

  /**
   * =========================================================================
   * AUTOMATIC ERROR LOG (HATA DEFTERİ) METHODS
   * Automatically captures mistakes, categorizes traps, and tracks re-tests.
   * =========================================================================
   */
  function logMistake(mistakeData) {
    const state = getState();
    // Check if mistake already logged
    const existingIndex = state.errorLog.findIndex(m => m.id === mistakeData.id);
    const entry = {
      id: mistakeData.id || `ERR-${Date.now()}`,
      moduleId: mistakeData.moduleId || "General",
      moduleTitle: mistakeData.moduleTitle || "",
      type: mistakeData.type || "Reading", // Reading, Grammar, Vocab
      question: mistakeData.question || "",
      passage: mistakeData.passage || "",
      selected: mistakeData.selected || "",
      answer: mistakeData.answer || "",
      trapType: mistakeData.trapType || "Unclassified",
      explanation: mistakeData.explanation || "",
      studentNote: mistakeData.studentNote || "",
      timestamp: new Date().toISOString(),
      resolved: false,
      retryCount: 0
    };

    if (existingIndex >= 0) {
      state.errorLog[existingIndex] = { ...state.errorLog[existingIndex], ...entry };
    } else {
      state.errorLog.unshift(entry);
    }

    saveState(state);
    return entry;
  }

  function getMistakes(filter = {}) {
    const state = getState();
    let list = state.errorLog || [];
    if (filter.type) list = list.filter(m => m.type === filter.type);
    if (filter.moduleId) list = list.filter(m => m.moduleId === filter.moduleId);
    if (filter.trapType) list = list.filter(m => m.trapType === filter.trapType);
    if (filter.resolved !== undefined) list = list.filter(m => m.resolved === filter.resolved);
    return list;
  }

  function resolveMistake(mistakeId) {
    const state = getState();
    const mistake = state.errorLog.find(m => m.id === mistakeId);
    if (mistake) {
      mistake.resolved = true;
      mistake.resolvedAt = new Date().toISOString();
      saveState(state);
    }
  }

  function deleteMistake(mistakeId) {
    const state = getState();
    state.errorLog = state.errorLog.filter(m => m.id !== mistakeId);
    saveState(state);
  }

  function saveMistakeNote(mistakeId, noteText) {
    const state = getState();
    const mistake = state.errorLog.find(m => m.id === mistakeId);
    if (mistake) {
      mistake.studentNote = noteText;
      saveState(state);
    }
  }

  /**
   * =========================================================================
   * STUDENT SCRATCHPAD & NOTES METHODS
   * =========================================================================
   */
  function saveNote(noteId, title, content, tag = "General", questionId = null) {
    const state = getState();
    const id = noteId || `NOTE-${Date.now()}`;
    state.studentNotes[id] = {
      id,
      title: title || "Untitled Note",
      content: content || "",
      tag: tag || "General",
      questionId: questionId,
      updatedAt: new Date().toISOString()
    };
    saveState(state);
    return state.studentNotes[id];
  }

  function getNotes() {
    const state = getState();
    return Object.values(state.studentNotes || {}).sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }

  function deleteNote(noteId) {
    const state = getState();
    delete state.studentNotes[noteId];
    saveState(state);
  }

  /**
   * =========================================================================
   * PASSAGE TEXT ANNOTATIONS (HIGHLIGHTING & UNDERLINING)
   * =========================================================================
   */
  function saveAnnotations(passageKey, annotationsList) {
    const state = getState();
    state.textAnnotations[passageKey] = annotationsList;
    saveState(state);
  }

  function getAnnotations(passageKey) {
    const state = getState();
    return state.textAnnotations[passageKey] || [];
  }

  function clearAnnotations(passageKey) {
    const state = getState();
    delete state.textAnnotations[passageKey];
    saveState(state);
  }

  /**
   * =========================================================================
   * GRAMMAR ACADEMY PROGRESS METHODS
   * =========================================================================
   */
  function recordGrammarAnswer(moduleId, questionId, selectedChoice, isCorrect) {
    const state = getState();
    if (!state.grammar[moduleId]) {
      state.grammar[moduleId] = { id: moduleId, status: CONFIG.STATUS_LABELS.LEARNING, completedCount: 0, correctCount: 0, items: {} };
    }
    const gmod = state.grammar[moduleId];
    gmod.items[questionId] = {
      selected: selectedChoice,
      isCorrect: isCorrect,
      timestamp: new Date().toISOString()
    };
    gmod.completedCount = Object.keys(gmod.items).length;
    gmod.correctCount = Object.values(gmod.items).filter(i => i.isCorrect).length;
    gmod.status = gmod.completedCount >= 4 ? (gmod.correctCount >= 3 ? CONFIG.STATUS_LABELS.MASTERED : CONFIG.STATUS_LABELS.PRACTICING) : CONFIG.STATUS_LABELS.LEARNING;

    state.stats.totalQuestionsAttempted++;
    state.stats.grammarCompletedCount++;
    if (isCorrect) state.stats.totalCorrect++;

    saveState(state);
  }

  function getGrammarState(moduleId) {
    const state = getState();
    return state.grammar[moduleId] || null;
  }

  function clearGrammarItem(moduleId, questionId) {
    const state = getState();
    if (state.grammar[moduleId]?.items?.[questionId]) {
      delete state.grammar[moduleId].items[questionId];
      const gmod = state.grammar[moduleId];
      gmod.completedCount = Object.keys(gmod.items).length;
      gmod.correctCount = Object.values(gmod.items).filter(i => i.isCorrect).length;
      gmod.status = gmod.completedCount >= 4 ? (gmod.correctCount >= 3 ? CONFIG.STATUS_LABELS.MASTERED : CONFIG.STATUS_LABELS.PRACTICING) : (gmod.completedCount > 0 ? CONFIG.STATUS_LABELS.LEARNING : "Not Started");
      saveState(state);
    }
  }

  function resetGrammarModule(moduleId) {
    const state = getState();
    if (state.grammar[moduleId]) {
      state.grammar[moduleId] = { id: moduleId, status: "Not Started", completedCount: 0, correctCount: 0, items: {} };
      saveState(state);
    }
  }

  function clearGuidedItem(moduleId, itemId) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (mod?.guided?.items?.[itemId]) {
      delete mod.guided.items[itemId];
      mod.guided.completedCount = Object.keys(mod.guided.items).length;
      updateModuleStatus(mod);
      saveState(state);
    }
  }

  function clearIndependentItem(moduleId, itemId) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (mod?.independent?.items?.[itemId]) {
      delete mod.independent.items[itemId];
      mod.independent.completedCount = Object.keys(mod.independent.items).length;
      mod.independent.correctCount = Object.values(mod.independent.items).filter(i => i.isCorrect).length;
      updateModuleStatus(mod);
      saveState(state);
    }
  }

  function toggleQuestionFlag(questionId) {
    const state = getState();
    if (!state.flaggedQuestions) state.flaggedQuestions = {};
    if (state.flaggedQuestions[questionId]) {
      delete state.flaggedQuestions[questionId];
    } else {
      state.flaggedQuestions[questionId] = true;
    }
    saveState(state);
    return !!state.flaggedQuestions[questionId];
  }

  function isQuestionFlagged(questionId) {
    const state = getState();
    return !!(state.flaggedQuestions && state.flaggedQuestions[questionId]);
  }

  function getFlaggedQuestions() {
    const state = getState();
    return Object.keys(state.flaggedQuestions || {});
  }

  /**
   * =========================================================================
   * DAILY VOCABULARY PROGRESS METHODS
   * =========================================================================
   */
  function recordDailyVocabCompletion(dayNumber, quizScore, masteredWords = []) {
    const state = getState();
    state.dailyVocabProgress[dayNumber] = {
      day: dayNumber,
      quizScore: quizScore,
      masteredWords: masteredWords,
      completedAt: new Date().toISOString()
    };
    state.stats.vocabCompletedCount = Object.keys(state.dailyVocabProgress).length;
    saveState(state);
  }

  function getDailyVocabProgress() {
    const state = getState();
    return state.dailyVocabProgress || {};
  }

  /**
   * =========================================================================
   * PERSONAL STUDY TOOL: WORD MASTERY & RETESTS
   * =========================================================================
   */
  function toggleVocabWordMastery(word) {
    const state = getState();
    if (!state.masteredVocabWords) state.masteredVocabWords = {};
    if (state.masteredVocabWords[word]) {
      delete state.masteredVocabWords[word];
    } else {
      state.masteredVocabWords[word] = new Date().toISOString();
    }
    saveState(state);
    return !!state.masteredVocabWords[word];
  }

  function isVocabWordMastered(word) {
    const state = getState();
    return !!(state.masteredVocabWords && state.masteredVocabWords[word]);
  }

  function getMasteredVocabWordsList() {
    const state = getState();
    return Object.keys(state.masteredVocabWords || {});
  }

  function recordMistakeRetest(mistakeId, isCorrect) {
    const state = getState();
    const mistake = (state.errorLog || []).find(m => m.id === mistakeId);
    if (mistake) {
      mistake.retryCount = (mistake.retryCount || 0) + 1;
      if (isCorrect) {
        mistake.resolved = true;
        mistake.resolvedAt = new Date().toISOString();
      }
      saveState(state);
    }
    return mistake;
  }

  function recordStudyTime(minutes = 5) {
    const state = getState();
    if (!state.studyStreak) {
      state.studyStreak = { current: 1, best: 1, lastStudyDate: new Date().toISOString().slice(0, 10), minutesToday: 0, targetMinutes: 20 };
    }
    state.studyStreak.minutesToday = (state.studyStreak.minutesToday || 0) + minutes;
    saveState(state);
  }

  function calculateProjectedScore() {
    const state = getState();
    let totalQuestions = 0;
    let totalCorrect = 0;

    // Reading Modules
    MODULES_CONFIG.forEach(m => {
      const mod = state.modules[m.id];
      if (mod) {
        const ind = Object.values(mod.independent?.items || {});
        ind.forEach(i => {
          totalQuestions++;
          if (i.isCorrect) totalCorrect++;
        });
        const gd = Object.values(mod.guided?.items || {});
        gd.forEach(g => {
          totalQuestions += 0.5;
          if (g.isCorrect) totalCorrect += 0.5;
        });
      }
    });

    // Grammar Modules
    Object.values(state.grammar || {}).forEach(g => {
      const items = Object.values(g.items || {});
      items.forEach(i => {
        totalQuestions++;
        if (i.isCorrect) totalCorrect++;
      });
    });

    if (totalQuestions < 3) {
      return {
        bandLow: 560,
        bandHigh: 630,
        accuracy: 0,
        status: "Diagnostic Pending",
        totalEvaluated: totalQuestions
      };
    }

    const accuracy = totalCorrect / totalQuestions;
    // Map accuracy 0.0 - 1.0 to 400 - 800 SAT Reading & Writing scale
    const baseScore = Math.round(400 + (accuracy * 380) + (Math.min(10, Object.keys(state.masteredVocabWords || {}).length) * 2));
    const roundedLow = Math.max(420, Math.min(780, Math.round((baseScore - 30) / 10) * 10));
    const roundedHigh = Math.max(460, Math.min(800, Math.round((baseScore + 30) / 10) * 10));

    return {
      bandLow: roundedLow,
      bandHigh: roundedHigh,
      accuracy: Math.round(accuracy * 100),
      status: accuracy >= 0.85 ? "Competitive 700+" : accuracy >= 0.70 ? "Targeting 650+" : "Building Foundations",
      totalEvaluated: Math.round(totalQuestions)
    };
  }

  /**
   * Export all user progress as JSON text
   */
  function exportData() {
    const state = getState();
    return JSON.stringify(state, null, 2);
  }

  /**
   * Import data from JSON text with validation
   */
  function importData(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || !parsed.modules) {
        throw new Error("Invalid SAT Reading Academy data structure.");
      }
      saveState(parsed);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  /**
   * Resets all progress back to factory defaults
   */
  function resetProgress() {
    const fresh = createDefaultState();
    saveState(fresh);
    return fresh;
  }

  return {
    getState,
    saveState,
    getModuleState,
    markStageComplete,
    recordGuidedAnswer,
    recordIndependentAnswer,
    recordTrapLabAnswer,
    recordSelfAssessment,
    logMistake,
    getMistakes,
    resolveMistake,
    deleteMistake,
    saveMistakeNote,
    recordMistakeRetest,
    toggleVocabWordMastery,
    isVocabWordMastered,
    getMasteredVocabWordsList,
    recordStudyTime,
    calculateProjectedScore,
    saveNote,
    getNotes,
    deleteNote,
    saveAnnotations,
    getAnnotations,
    clearAnnotations,
    recordGrammarAnswer,
    getGrammarState,
    clearGrammarItem,
    resetGrammarModule,
    clearGuidedItem,
    clearIndependentItem,
    toggleQuestionFlag,
    isQuestionFlagged,
    getFlaggedQuestions,
    recordDailyVocabCompletion,
    getDailyVocabProgress,
    exportData,
    importData,
    resetProgress
  };
})();
