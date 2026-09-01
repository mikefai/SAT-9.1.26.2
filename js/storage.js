/**
 * SAT READING SKILLS ACADEMY - Local Storage Manager
 * Zero network dependencies. Handles state persistence, schema migrations, import/export.
 */

const StorageManager = (function() {
  const STORAGE_KEY = CONFIG.STORAGE_KEY;
  const CURRENT_SCHEMA_VERSION = 1;

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
      teacherMode: false,
      activeModuleId: "MOD-0",
      activeStageNumber: 1,
      modules: {},
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
        independentCompletedCount: 0
      }
    };

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

      // Verify schema version
      if (!parsed.schemaVersion || parsed.schemaVersion !== CURRENT_SCHEMA_VERSION) {
        console.warn("Upgrading storage schema to version", CURRENT_SCHEMA_VERSION);
        parsed.schemaVersion = CURRENT_SCHEMA_VERSION;
      }

      // Ensure all modules exist in stored state
      MODULES_CONFIG.forEach(mod => {
        if (!parsed.modules[mod.id]) {
          parsed.modules[mod.id] = {
            id: mod.id,
            status: CONFIG.STATUS_LABELS.NOT_STARTED,
            stagesCompleted: [],
            workedExamplesViewed: [],
            trapLab: { completed: false, attempts: {} },
            guided: { items: {}, hintsUsedTotal: 0, completedCount: 0 },
            independent: { items: {}, completedCount: 0, correctCount: 0 },
            selfAssessment: null
          };
        }
      });

      return parsed;
    } catch (err) {
      console.error("Storage access error, falling back to in-memory state:", err);
      return createDefaultState();
    }
  }

  /**
   * Commits the entire state object to localStorage
   */
  function saveState(state) {
    try {
      state.lastActiveAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (err) {
      console.error("Failed to save state to localStorage:", err);
      return false;
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
   * Marks a stage as completed and updates module status
   */
  function markStageComplete(moduleId, stageNumber) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    if (!mod.stagesCompleted.includes(stageNumber)) {
      mod.stagesCompleted.push(stageNumber);
    }

    if (mod.status === CONFIG.STATUS_LABELS.NOT_STARTED) {
      mod.status = CONFIG.STATUS_LABELS.LEARNING;
    }

    if (mod.stagesCompleted.includes(5) || mod.stagesCompleted.includes(6)) {
      mod.status = CONFIG.STATUS_LABELS.PRACTICING;
    }

    recalculateMastery(moduleId, state);
    saveState(state);
  }

  /**
   * Records a user's answer on Guided Practice (Stage 5)
   */
  function recordGuidedAnswer(moduleId, itemId, selectedChoice, isCorrect, hintsUsed) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    const previousItem = mod.guided.items[itemId];
    const isFirstTime = !previousItem;

    mod.guided.items[itemId] = {
      itemId,
      selected: selectedChoice,
      isCorrect,
      hintsUsed,
      timestamp: new Date().toISOString()
    };

    // Update aggregate stats
    if (isFirstTime) {
      state.stats.totalQuestionsAttempted += 1;
      if (isCorrect) state.stats.totalCorrect += 1;
      state.stats.totalHintsUsed += hintsUsed;
      state.stats.guidedCompletedCount += 1;
    }

    // Recalculate module hint total
    let hintSum = 0;
    let guidedCount = 0;
    Object.values(mod.guided.items).forEach(item => {
      hintSum += (item.hintsUsed || 0);
      guidedCount++;
    });
    mod.guided.hintsUsedTotal = hintSum;
    mod.guided.completedCount = guidedCount;

    recalculateMastery(moduleId, state);
    saveState(state);
  }

  /**
   * Records a user's answer on Independent Practice (Stage 6)
   */
  function recordIndependentAnswer(moduleId, itemId, selectedChoice, isCorrect, timeSpentSec, trapTypeHit) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    const isFirstTime = !mod.independent.items[itemId];

    mod.independent.items[itemId] = {
      itemId,
      selected: selectedChoice,
      isCorrect,
      timeSpentSec,
      trapTypeHit: isCorrect ? null : trapTypeHit,
      timestamp: new Date().toISOString()
    };

    if (isFirstTime) {
      state.stats.totalQuestionsAttempted += 1;
      state.stats.independentCompletedCount += 1;
      if (isCorrect) {
        state.stats.totalCorrect += 1;
      } else if (trapTypeHit && state.trapErrors[trapTypeHit] !== undefined) {
        state.trapErrors[trapTypeHit] += 1;
      }
    }

    // Update counts
    let correct = 0;
    let total = 0;
    Object.values(mod.independent.items).forEach(item => {
      total++;
      if (item.isCorrect) correct++;
    });
    mod.independent.completedCount = total;
    mod.independent.correctCount = correct;

    recalculateMastery(moduleId, state);
    saveState(state);
  }

  /**
   * Records a Trap Lab classification result (Stage 4)
   */
  function recordTrapLabAnswer(moduleId, drillId, selectedTrap, isCorrect, actualTrap) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    mod.trapLab.attempts[drillId] = {
      drillId,
      selectedTrap,
      actualTrap,
      isCorrect,
      timestamp: new Date().toISOString()
    };

    if (!isCorrect && actualTrap && state.trapErrors[actualTrap] !== undefined) {
      state.trapErrors[actualTrap] += 1;
    }

    saveState(state);
  }

  /**
   * Records end-of-module self assessment
   */
  function recordSelfAssessment(moduleId, assessmentData) {
    const state = getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    mod.selfAssessment = {
      ...assessmentData,
      submittedAt: new Date().toISOString()
    };

    markStageComplete(moduleId, 6);
    recalculateMastery(moduleId, state);
    saveState(state);
  }

  /**
   * Evaluates if a module has achieved MASTERED status:
   * Rule: Independent accuracy >= 80% AND average hints on guided <= 1.0
   */
  function recalculateMastery(moduleId, stateObj) {
    const state = stateObj || getState();
    const mod = state.modules[moduleId];
    if (!mod) return;

    const guidedCount = Object.keys(mod.guided.items).length;
    const indCount = Object.keys(mod.independent.items).length;

    if (indCount >= 3) {
      const indAccuracy = mod.independent.correctCount / indCount;
      const avgHints = guidedCount > 0 ? (mod.guided.hintsUsedTotal / guidedCount) : 0;

      if (indAccuracy >= CONFIG.MASTERY_THRESHOLDS.MIN_INDEPENDENT_ACCURACY &&
          avgHints <= CONFIG.MASTERY_THRESHOLDS.MAX_AVERAGE_HINTS) {
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
    exportData,
    importData,
    resetProgress
  };
})();
