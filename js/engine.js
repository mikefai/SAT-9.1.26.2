/**
 * SAT READING & WRITING ACADEMY - Unified Pedagogical Engine
 * Handles Reading stages (1-6), Grammar Academy, Daily Vocab Drills,
 * Automatic Error Log (Hata Defteri), Turkish Solvers, and Interactive Study Tools.
 */

const Engine = (function() {
  let currentModuleId = null;
  let currentStageNumber = 1;
  let currentThinkAloudStep = 0;
  let currentHintIndex = 0;
  let eliminatedChoices = new Set();
  let selectedChoiceKey = null;
  let timerInterval = null;
  let timerSecondsRemaining = CONFIG.TIMER_DEFAULT_SECONDS;
  let itemStartTime = 0;

  /**
   * Main entry point to load a specific module stage
   */
  function loadModuleStage(moduleId, stageNum, itemIdx = 0) {
    currentModuleId = moduleId;
    currentStageNumber = stageNum;
    eliminatedChoices.clear();
    selectedChoiceKey = null;

    const container = document.getElementById("stage-canvas");
    if (!container) return;

    // Reset scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const modContent = ACADEMY_CONTENT[moduleId];
    if (!modContent) {
      container.innerHTML = `<div class="error-banner">Module content not found: ${moduleId}</div>`;
      return;
    }

    // Update module header bar
    const modConfig = MODULES_CONFIG.find(m => m.id === moduleId) || MODULES_CONFIG[0];
    const domainEl = document.getElementById("module-banner-domain");
    const titleEl = document.getElementById("module-banner-title");
    const methodBtn = document.getElementById("module-banner-method-btn");

    if (domainEl) domainEl.textContent = modConfig.domainTag || modConfig.domain;
    if (titleEl) titleEl.textContent = `${modConfig.number === 0 ? "Foundation" : "Module " + modConfig.number}: ${modConfig.title}`;
    if (methodBtn) {
      methodBtn.onclick = () => App.openMethodModal(moduleId);
      methodBtn.title = `View ${modConfig.methodName} (Shortcut: M)`;
    }

    // Render interactive stage stepper (Stages 1 through 6)
    const stepper = document.getElementById("stage-stepper");
    if (stepper) {
      const stageMeta = [
        { num: 1, name: "The Skill", icon: "🎯" },
        { num: 2, name: "The Method", icon: "📜" },
        { num: 3, name: "Worked Ex.", icon: "🧠" },
        { num: 4, name: "Trap Lab", icon: "⚠️" },
        { num: 5, name: "Guided", icon: "🤝" },
        { num: 6, name: "Independent", icon: "⏱️" }
      ];
      const modState = StorageManager.getModuleState(moduleId);
      const completedStages = modState?.stagesCompleted || [];

      stepper.innerHTML = stageMeta.map(s => {
        const isDone = completedStages.includes(s.num);
        const isActive = s.num === stageNum;
        return `
          <button class="stage-step-btn ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}" onclick="App.navigateToStage('${moduleId}', ${s.num}, 0)">
            <span class="step-btn-num">Stage ${s.num} ${isDone ? '<span class="step-done-check">✓</span>' : ''}</span>
            <span class="step-btn-name">${s.icon} ${s.name}</span>
          </button>
        `;
      }).join('');
    }

    // Record 2 minutes of active study session
    StorageManager.recordStudyTime(2);

    switch (stageNum) {
      case 1:
        renderStage1Skill(container, modContent.stage1_skill, moduleId);
        break;
      case 2:
        renderStage2Method(container, modContent.stage2_method, moduleId);
        break;
      case 3:
        currentThinkAloudStep = 0;
        renderStage3WorkedExamples(container, modContent.stage3_workedExamples, moduleId, itemIdx);
        break;
      case 4:
        renderStage4TrapLab(container, modContent.stage4_trapLab, moduleId, itemIdx);
        break;
      case 5:
        currentHintIndex = 0;
        renderStage5GuidedPractice(container, modContent.stage5_guidedPractice, moduleId, itemIdx);
        break;
      case 6:
        renderStage6IndependentPractice(container, modContent.stage6_independentPractice, modContent.selfAssessmentRubric, moduleId, itemIdx);
        break;
      default:
        renderStage1Skill(container, modContent.stage1_skill, moduleId);
    }

    if (typeof StudentTools !== "undefined") {
      StudentTools.restorePassageAnnotations(`${moduleId}-S${stageNum}-I${itemIdx}`);
    }
  }

  /**
   * Stage 1: The Skill ("What and Why")
   */
  function renderStage1Skill(container, skillData, moduleId) {
    let goldenRulesHTML = "";
    if (skillData.goldenRules && skillData.goldenRules.length > 0) {
      goldenRulesHTML = `
        <div class="skill-golden-rules-box">
          <div class="golden-rules-header">
            <span class="golden-icon">👑</span>
            <h3>The 4 Non-Negotiable Golden Rules</h3>
          </div>
          <div class="golden-rules-grid">
            ${skillData.goldenRules.map((rule, idx) => `
              <div class="golden-rule-card">
                <div class="rule-number">${idx + 1}</div>
                <div class="rule-content">
                  <h4>${rule.title}</h4>
                  <p>${rule.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    let pacingHTML = "";
    if (skillData.pacingStrategy && skillData.pacingStrategy.steps) {
      pacingHTML = `
        <div class="pacing-timeline-card">
          <div class="pacing-header">
            <span class="pacing-icon">⏱️</span>
            <h3>Standard 90-Second Exam Pacing Protocol</h3>
          </div>
          <div class="pacing-steps-container">
            ${skillData.pacingStrategy.steps.map((step, idx) => `
              <div class="pacing-step-item">
                <div class="pacing-time-badge">${step.seconds}s</div>
                <div class="pacing-step-info">
                  <span class="pacing-action">${step.action}</span>
                  <span class="pacing-detail">${step.detail}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    let pitfallsHTML = "";
    if (skillData.commonPitfalls && skillData.commonPitfalls.length > 0) {
      pitfallsHTML = `
        <div class="common-pitfalls-box">
          <div class="pitfalls-header">
            <span class="pitfalls-icon">⚠️</span>
            <h3>Deadly Pitfalls & Distractor Biases</h3>
          </div>
          <div class="pitfalls-grid">
            ${skillData.commonPitfalls.map(p => `
              <div class="pitfall-card">
                <span class="pitfall-name">${p.name}</span>
                <p class="pitfall-desc">${p.explanation}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="stage-card skill-stage-card animate-fade-in">
        <div class="stage-card-header">
          <div class="stage-pill">Stage 1 of 6: The Skill</div>
          <h2 class="stage-title">${skillData.title}</h2>
        </div>

        <div class="skill-grid">
          <div class="skill-info-block core-test">
            <div class="block-header">
              <span class="block-icon">🎯</span>
              <h3>What It Actually Tests</h3>
            </div>
            <p>${skillData.whatItTests}</p>
          </div>

          <div class="skill-info-block exam-frequency">
            <div class="block-header">
              <span class="block-icon">📊</span>
              <h3>Real Exam Frequency</h3>
            </div>
            <p>${skillData.frequency}</p>
          </div>
        </div>

        <div class="skill-recognition-box">
          <div class="recognition-header">
            <span class="recognition-icon">⚡</span>
            <h3>The 30-Second Recognition Test (Stem Phrases)</h3>
          </div>
          <div class="recognition-content">
            <p>${skillData.recognitionTest}</p>
          </div>
        </div>

        ${goldenRulesHTML}
        ${pacingHTML}
        ${pitfallsHTML}

        ${skillData.turkishScaffold ? `
          <div class="turkish-scaffold-card animate-fade-in">
            <div class="turkish-card-header">
              <div class="turkish-flag-title">
                <span class="tr-flag-icon">🇹🇷</span>
                <h3>${skillData.turkishScaffold.title || "Türk Öğrenciler İçin Kritik Sınav & Kelime Stratejisi"}</h3>
              </div>
              <button class="turkish-open-vault-btn" onclick="App.openTurkishModal('vocab')">
                📖 Türkçe SAT Sözlüğünü Aç
              </button>
            </div>
            <div class="turkish-card-body">
              <p class="turkish-strategy-tip">${skillData.turkishScaffold.strategyNote}</p>

              ${skillData.turkishScaffold.falseFriends && skillData.turkishScaffold.falseFriends.length > 0 ? `
                <div class="turkish-trap-box">
                  <span class="trap-box-label">⚠️ Sık Yapılan Anlam Hataları (False Friends & Tuzaklar):</span>
                  <ul class="turkish-trap-list">
                    ${skillData.turkishScaffold.falseFriends.map(f => `
                      <li><strong>${f.word}:</strong> Türkçedeki <em>"${f.wrongConcept}"</em> değil; SAT'deki asıl anlamı: <strong>${f.correctConcept}</strong>.</li>
                    `).join('')}
                  </ul>
                </div>
              ` : ""}

              ${skillData.turkishScaffold.keyVocab && skillData.turkishScaffold.keyVocab.length > 0 ? `
                <div class="turkish-vocab-pills">
                  <span class="vocab-pills-label">📌 Bu Modülde En Çok Çıkan Kelimeler:</span>
                  <div class="pills-grid">
                    ${skillData.turkishScaffold.keyVocab.map(v => `
                      <div class="tr-vocab-pill">
                        <strong>${v.word}</strong> <span class="tr-pos">(${v.pos})</span>: <span>${v.tr}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ""}
            </div>
          </div>
        ` : ""}

        ${skillData.eslNote ? `
          <div class="esl-scaffold-banner">
            <span class="esl-badge">ESL / Academic English Scaffold</span>
            <p>${skillData.eslNote}</p>
          </div>
        ` : ""}

        <div class="stage-actions-footer">
          <button class="btn btn-primary btn-large" onclick="Engine.advanceStage()">
            <span>I Understand the Skill — Next: The Method</span> →
          </button>
        </div>
      </div>
    `;

    StorageManager.markStageComplete(moduleId, 1);
  }

  /**
   * Stage 2: The Method (Step-by-Step Algorithm)
   */
  function renderStage2Method(container, methodData, moduleId) {
    let stepsHTML = "";
    methodData.steps.forEach(step => {
      stepsHTML += `
        <div class="method-step-card">
          <div class="step-num-badge">${step.stepNumber}</div>
          <div class="step-content">
            <h3 class="step-title">${step.title}</h3>
            <p class="step-desc">${step.description}</p>
            <div class="step-micro-action">
              <span class="action-label">Action:</span>
              <span class="action-text">${step.action}</span>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="stage-card method-stage-card animate-fade-in">
        <div class="stage-card-header">
          <div class="stage-pill">Stage 2 of 6: The Method</div>
          <h2 class="stage-title">${methodData.name}</h2>
          <p class="stage-subtitle">Follow this invariant repeatable algorithm for every single question of this type.</p>
        </div>

        <div class="method-steps-vertical-flow">
          ${stepsHTML}
        </div>

        <div class="stage-actions-footer">
          <button class="btn btn-secondary" onclick="App.navigateToStage('${moduleId}', 1)">← Back to Skill</button>
          <button class="btn btn-primary btn-large" onclick="Engine.advanceStage()">
            <span>See the Method in Action (Worked Examples)</span> →
          </button>
        </div>
      </div>
    `;

    StorageManager.markStageComplete(moduleId, 2);
  }

  /**
   * Stage 3: Worked Examples (Expert Think-Aloud)
   */
  function renderStage3WorkedExamples(container, examples, moduleId, itemIdx) {
    const item = examples[itemIdx] || examples[0];
    const totalItems = examples.length;
    const isLastItem = itemIdx >= totalItems - 1;

    let optionsHTML = "";
    item.choices.forEach(ch => {
      const letter = ch.substring(0, 1);
      const isCorrect = letter === item.answer;
      optionsHTML += `
        <div class="worked-choice-item ${isCorrect ? 'choice-correct-highlight' : ''}">
          <span class="worked-choice-letter">${letter}</span>
          <span class="worked-choice-text">${ch.substring(3)}</span>
          ${isCorrect ? `<span class="correct-tag">Correct Answer</span>` : ""}
        </div>
      `;
    });

    let thoughtsHTML = "";
    const visibleThoughts = item.thinkAloud.slice(0, currentThinkAloudStep + 1);
    visibleThoughts.forEach(thought => {
      thoughtsHTML += `
        <div class="think-step animate-slide-up">
          <div class="think-meta">
            <span class="think-badge">${thought.step}</span>
            <span class="think-action-name">${thought.action}</span>
          </div>
          <p class="think-text">${thought.thought}</p>
        </div>
      `;
    });

    const hasMoreThoughts = currentThinkAloudStep < item.thinkAloud.length - 1;

    container.innerHTML = `
      <div class="stage-card worked-stage-card animate-fade-in">
        <div class="stage-card-header flex-between">
          <div>
            <div class="stage-pill">Stage 3 of 6: Worked Examples</div>
            <h2 class="stage-title">Example ${itemIdx + 1} of ${totalItems}</h2>
          </div>
          <div class="item-progress-pills">
            ${examples.map((_, i) => `<span class="item-dot ${i === itemIdx ? 'active' : (i < itemIdx ? 'completed' : '')}"></span>`).join('')}
          </div>
        </div>

        ${item.strategyHeuristic ? `
          <div class="strategy-heuristic-banner">
            <span class="heuristic-icon">💡</span>
            <div class="heuristic-content">
              <div class="heuristic-title">Strategy & Pattern Heuristic</div>
              <p class="heuristic-text">${item.strategyHeuristic}</p>
            </div>
          </div>
        ` : ""}

        <div class="sat-split-layout">
          <!-- Left Column: Passage -->
          <div class="sat-passage-pane">
            <div class="pane-header">
              <span class="pane-tag">Passage</span>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button class="btn btn-secondary btn-small" style="padding: 2px 6px; font-size: 0.75rem;" onclick="StudentTools.adjustPassageFont(-0.05)" title="Metin Boyutunu Küçült">A-</button>
                <button class="btn btn-secondary btn-small" style="padding: 2px 6px; font-size: 0.75rem;" onclick="StudentTools.adjustPassageFont(0.05)" title="Metin Boyutunu Büyüt">A+</button>
                <span class="difficulty-badge ${item.difficulty.toLowerCase()}">${item.difficulty}</span>
              </div>
            </div>
            <div class="passage-body">
              ${injectGlosses(item.passage, item.glosses)}
            </div>
          </div>

          <!-- Right Column: Question, Choices & Progressive Think-Aloud -->
          <div class="sat-question-pane">
            <div class="question-stem">${item.question}</div>
            
            <div class="worked-choices-list">
              ${optionsHTML}
            </div>

            <!-- Think-Aloud Container -->
            <div class="think-aloud-box">
              <div class="think-aloud-header">
                <div class="think-aloud-title">
                  <span>🧠</span>
                  <h3>Expert Think-Aloud (Metacognitive Walkthrough)</h3>
                </div>
                <span class="think-step-counter">Step ${Math.min(currentThinkAloudStep + 1, item.thinkAloud.length)} of ${item.thinkAloud.length}</span>
              </div>

              <div class="think-steps-list">
                ${thoughtsHTML}
              </div>

              <div class="think-controls">
                ${hasMoreThoughts ? `
                  <button class="btn btn-accent" onclick="Engine.revealNextThought('${moduleId}', ${itemIdx})">
                    <span>Next Thought</span> <kbd>Enter</kbd> →
                  </button>
                ` : `
                  <div class="think-completed-badge">
                    <span>✓</span> Full Expert Model Revealed
                  </div>
                `}
              </div>
            </div>

            <!-- Full Structured Explanation -->
            ${!hasMoreThoughts ? renderStructuredExplanation(item.explanation, item, true) : ""}
          </div>
        </div>

        <div class="stage-actions-footer">
          <button class="btn btn-secondary" onclick="App.navigateToStage('${moduleId}', 2)">← Back to Method</button>
          ${!isLastItem ? `
            <button class="btn btn-primary" onclick="App.navigateToStage('${moduleId}', 3, ${itemIdx + 1})">
              Next Worked Example (${itemIdx + 2}/${totalItems}) →
            </button>
          ` : `
            <button class="btn btn-primary btn-large" onclick="Engine.advanceStage()">
              Enter the Trap Lab (Stage 4) →
            </button>
          `}
        </div>
      </div>
    `;

    StorageManager.markStageComplete(moduleId, 3);
  }

  function revealNextThought(moduleId, itemIdx) {
    const examples = ACADEMY_CONTENT[moduleId].stage3_workedExamples;
    if (currentThinkAloudStep < examples[itemIdx].thinkAloud.length - 1) {
      currentThinkAloudStep++;
      renderStage3WorkedExamples(document.getElementById("stage-canvas"), examples, moduleId, itemIdx);
    }
  }

  /**
   * Stage 4: Trap Lab ("Know the Enemy")
   */
  function renderStage4TrapLab(container, drills, moduleId, itemIdx = 0) {
    const drill = drills[itemIdx] || drills[0];
    const totalDrills = drills.length;
    const isLastDrill = itemIdx >= totalDrills - 1;

    const modState = StorageManager.getState().modules[moduleId];
    const prevAttempt = modState?.trapLab?.attempts?.[drill.id];
    const isAnswered = !!prevAttempt;
    
    // Reset selectedChoiceKey if unanswered
    if (!isAnswered) {
      selectedChoiceKey = null;
    }

    let optionsPillsHTML = "";
    Object.keys(TRAP_TAXONOMY).forEach(trapKey => {
      const isSelected = selectedChoiceKey === trapKey;
      let btnClass = "trap-select-pill";
      if (isSelected) btnClass += " selected";
      if (isAnswered) {
        if (trapKey === drill.correctTrap) btnClass += " correct-trap";
        else if (isSelected && trapKey !== drill.correctTrap) btnClass += " wrong-trap";
      }

      optionsPillsHTML += `
        <button class="${btnClass}" onclick="Engine.selectTrapChoice('${trapKey}')" ${isAnswered ? 'disabled' : ''}>
          ${TRAP_TAXONOMY[trapKey].badge} ${trapKey}
        </button>
      `;
    });

    container.innerHTML = `
      <div class="stage-card traplab-card animate-fade-in">
        <div class="stage-card-header flex-between">
          <div>
            <div class="stage-pill">Stage 4 of 6: Trap Lab</div>
            <h2 class="stage-title">Distractor Diagnosis Drill (${itemIdx + 1} of ${totalDrills})</h2>
          </div>
          <div class="item-progress-pills">
            ${drills.map((d, i) => {
              const isDone = !!modState?.trapLab?.attempts?.[d.id];
              return `<span class="item-dot ${i === itemIdx ? 'active' : (isDone ? 'completed' : '')}"></span>`;
            }).join('')}
          </div>
        </div>

        <div class="traplab-body">
          <div class="traplab-stem-box">
            <span class="stem-label">Context / Passage Excerpt:</span>
            <p class="stem-text">${drill.stem}</p>
          </div>

          <div class="traplab-wrong-choice-box">
            <span class="wrong-choice-label">🚨 Target Wrong Distractor (Identify its Flaw):</span>
            <blockquote class="target-wrong-text">“${drill.wrongChoice}”</blockquote>
          </div>

          <div class="traplab-classifier-section">
            <h3 class="classifier-prompt">Which SAT Trap Type is this distractor committing?</h3>
            <div class="trap-options-grid">
              ${optionsPillsHTML}
            </div>
          </div>

          ${isAnswered ? `
            <div class="traplab-feedback-card animate-fade-in">
              <div class="feedback-header">
                <span class="feedback-icon">${prevAttempt?.isCorrect ? '🎯' : '⚠️'}</span>
                <h4>${prevAttempt?.isCorrect ? 'Accurate Diagnosis!' : 'Trap Misidentified'}</h4>
              </div>
              <p><strong>Correct Trap:</strong> ${drill.correctTrap}</p>
              <p class="feedback-rationale">${drill.rationale}</p>
              <div class="trap-strategy-reminder">
                <strong>Counter-Strategy:</strong> ${TRAP_TAXONOMY[drill.correctTrap]?.howToDefeat}
              </div>
            </div>
          ` : ""}
        </div>

        <div class="stage-actions-footer">
          <button class="btn btn-secondary" onclick="App.navigateToStage('${moduleId}', 3)">← Back to Worked Examples</button>
          ${isAnswered ? (
            !isLastDrill ? `
              <button class="btn btn-primary" onclick="App.navigateToStage('${moduleId}', 4, ${itemIdx + 1})">
                Next Trap Drill (${itemIdx + 2}/${totalDrills}) →
              </button>
            ` : `
              <button class="btn btn-primary btn-large" onclick="Engine.advanceStage()">
                Proceed to Guided Practice (Stage 5) →
              </button>
            `
          ) : ""}
        </div>
      </div>
    `;

    StorageManager.markStageComplete(moduleId, 4);
  }

  function submitTrapAnswer(moduleId, drillId, selectedTrap, correctTrap, itemIdx) {
    selectedChoiceKey = selectedTrap;
    const isCorrect = selectedTrap === correctTrap;
    const drills = ACADEMY_CONTENT[moduleId].stage4_trapLab;
    const drill = drills[itemIdx];

    StorageManager.recordTrapLabAnswer(moduleId, drillId, selectedTrap, isCorrect, correctTrap);

    // Auto-log mistake if wrong
    if (!isCorrect) {
      StorageManager.logMistake({
        id: `ERR-${drill.id}`,
        moduleId: moduleId,
        moduleTitle: MODULES_CONFIG.find(m => m.id === moduleId)?.title || "Trap Lab",
        type: "Reading",
        question: `Trap Lab: Flaw of “${drill.wrongChoice}”`,
        passage: drill.stem,
        selected: selectedTrap,
        answer: correctTrap,
        trapType: correctTrap,
        explanation: drill.rationale
      });
    }

    renderStage4TrapLab(document.getElementById("stage-canvas"), drills, moduleId, itemIdx);
  }

  /**
   * Helper: Render Turkish Step-by-Step Solver Guide
   */
  function renderTurkishSolverCard(solverGuide) {
    if (!solverGuide) return "";
    return `
      <div class="turkish-solver-card animate-fade-in">
        <div class="solver-card-header">
          <span class="solver-flag">🇹🇷</span>
          <h4>Nasıl Çözülür? (Adım Adım Çözüm Rehberi)</h4>
        </div>
        <div class="solver-steps-list">
          <div class="solver-step-item">
            <span class="step-num">1</span>
            <p>${solverGuide.step1}</p>
          </div>
          <div class="solver-step-item">
            <span class="step-num">2</span>
            <p>${solverGuide.step2}</p>
          </div>
          <div class="solver-step-item">
            <span class="step-num">3</span>
            <p>${solverGuide.step3}</p>
          </div>
          <div class="solver-step-item">
            <span class="step-num">4</span>
            <p>${solverGuide.step4}</p>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Stage 5: Guided Practice ("We Do")
   */
  function renderStage5GuidedPractice(container, practiceItems, moduleId, itemIdx) {
    const item = practiceItems[itemIdx] || practiceItems[0];
    const totalItems = practiceItems.length;
    const isLastItem = itemIdx >= totalItems - 1;
    const modState = StorageManager.getModuleState(moduleId);
    const existingRecord = modState?.guided?.items?.[item.id];
    const isSubmitted = !!existingRecord;
    if (isSubmitted) {
      selectedChoiceKey = existingRecord.selected;
    }

    let choicesHTML = "";
    item.choices.forEach(choiceText => {
      const letter = choiceText.substring(0, 1);
      const isEliminated = eliminatedChoices.has(letter);
      const isSelected = isSubmitted ? (existingRecord?.selected === letter) : (selectedChoiceKey === letter);
      const isCorrect = letter === item.answer;

      let btnClass = "sat-choice-button";
      if (isEliminated) btnClass += " choice-eliminated";
      if (isSelected) btnClass += " choice-selected";

      if (isSubmitted) {
        if (isCorrect) btnClass += " choice-confirmed-correct";
        else if (isSelected && !isCorrect) btnClass += " choice-confirmed-wrong";
      }

      choicesHTML += `
        <div class="choice-row">
          <button class="${btnClass}" onclick="Engine.handleChoiceClick('${letter}', '${moduleId}', 5, ${itemIdx})" ${isSubmitted ? 'disabled' : ''}>
            <span class="choice-letter">${letter}</span>
            <span class="choice-text-content">${choiceText.substring(3)}</span>
          </button>
          ${!isSubmitted ? `
            <button class="choice-eliminate-btn ${isEliminated ? 'active' : ''}" title="Cross out option" onclick="Engine.toggleElimination('${letter}', '${moduleId}', 5, ${itemIdx})">
              ✕
            </button>
          ` : ""}
        </div>
      `;
    });

    let hintsHTML = "";
    const revealedHints = item.hints.slice(0, currentHintIndex);
    revealedHints.forEach((hint, idx) => {
      hintsHTML += `
        <div class="hint-card hint-level-${hint.level} animate-slide-up">
          <span class="hint-badge">${hint.type} (Hint ${idx + 1})</span>
          <p class="hint-text">${hint.text}</p>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="stage-card guided-stage-card animate-fade-in">
        <div class="stage-card-header flex-between">
          <div>
            <div class="stage-pill">Stage 5 of 6: Guided Practice (Scaffolded)</div>
            <h2 class="stage-title">Practice Item ${itemIdx + 1} of ${totalItems}</h2>
          </div>
          <div class="item-progress-pills">
            ${practiceItems.map((d, i) => {
              const isDone = !!modState?.guided?.items?.[d.id];
              return `<span class="item-dot ${i === itemIdx ? 'active' : (isDone ? 'completed' : '')}"></span>`;
            }).join('')}
          </div>
        </div>

        ${item.strategyHeuristic ? `
          <div class="strategy-heuristic-banner">
            <span class="heuristic-icon">💡</span>
            <div class="heuristic-content">
              <div class="heuristic-title">Strategy & Pattern Heuristic</div>
              <p class="heuristic-text">${item.strategyHeuristic}</p>
            </div>
          </div>
        ` : ""}

        <div class="sat-split-layout">
          <!-- Left: Passage -->
          <div class="sat-passage-pane">
            <div class="pane-header">
              <span class="pane-tag">Passage Context</span>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button class="btn btn-secondary btn-small" style="padding: 2px 6px; font-size: 0.75rem;" onclick="StudentTools.adjustPassageFont(-0.05)" title="Metin Boyutunu Küçült">A-</button>
                <button class="btn btn-secondary btn-small" style="padding: 2px 6px; font-size: 0.75rem;" onclick="StudentTools.adjustPassageFont(0.05)" title="Metin Boyutunu Büyüt">A+</button>
                <span class="difficulty-badge ${item.difficulty.toLowerCase()}">${item.difficulty}</span>
              </div>
            </div>
            <div class="passage-body">
              ${injectGlosses(item.passage, item.glosses)}
            </div>
            ${(isSubmitted && item.turkishSolverGuide) ? renderTurkishSolverCard(item.turkishSolverGuide) : ""}
          </div>

          <!-- Right: Question, Choices, Hint Ladder -->
          <div class="sat-question-pane">
            <div class="question-stem">${item.question}</div>

            <div class="sat-choices-container">
              ${choicesHTML}
            </div>

            <!-- Hint Ladder -->
            <div class="hint-ladder-box">
              <div class="hint-ladder-header flex-between">
                <h4>🎯 Scaffolding Hint Ladder</h4>
                ${currentHintIndex < item.hints.length && !isSubmitted ? `
                  <button class="btn btn-hint" onclick="Engine.requestHint('${moduleId}', ${itemIdx})">
                    <span>Request Next Hint (${currentHintIndex + 1}/${item.hints.length})</span> <kbd>H</kbd>
                  </button>
                ` : ""}
              </div>
              <div class="revealed-hints-list">
                ${hintsHTML}
              </div>
            </div>

            ${!isSubmitted ? `
              <div class="question-submit-area">
                <button class="btn btn-primary btn-large" onclick="Engine.submitGuidedAnswer('${moduleId}', '${item.id}', '${item.answer}', ${itemIdx})" ${!selectedChoiceKey ? 'disabled' : ''}>
                  Submit Answer <kbd>Enter</kbd>
                </button>
              </div>
            ` : renderStructuredExplanation(item.explanation, item, (existingRecord?.isCorrect || selectedChoiceKey === item.answer))}
          </div>
        </div>

        <div class="stage-actions-footer">
          <button class="btn btn-secondary" onclick="App.navigateToStage('${moduleId}', 4)">← Back to Trap Lab</button>
          ${isSubmitted ? `
            <button class="btn btn-secondary" onclick="Engine.retakeGuidedQuestion('${moduleId}', '${item.id}', ${itemIdx})">
              🔄 Retake Item
            </button>
            ${!isLastItem ? `
              <button class="btn btn-primary" onclick="App.navigateToStage('${moduleId}', 5, ${itemIdx + 1})">
                Next Guided Item (${itemIdx + 2}/${totalItems}) →
              </button>
            ` : `
              <button class="btn btn-primary btn-large" onclick="Engine.advanceStage()">
                Proceed to Independent Practice (Stage 6) →
              </button>
            `}
          ` : ""}
        </div>
      </div>
    `;

    StorageManager.markStageComplete(moduleId, 5);
  }

  function requestHint(moduleId, itemIdx) {
    const items = ACADEMY_CONTENT[moduleId].stage5_guidedPractice;
    const item = items[itemIdx];
    if (currentHintIndex < item.hints.length) {
      currentHintIndex++;
      renderStage5GuidedPractice(document.getElementById("stage-canvas"), items, moduleId, itemIdx);
    }
  }

  function submitGuidedAnswer(moduleId, itemId, correctAnswer, itemIdx) {
    if (!selectedChoiceKey) return;
    const isCorrect = selectedChoiceKey === correctAnswer;
    const items = ACADEMY_CONTENT[moduleId].stage5_guidedPractice;
    const item = items[itemIdx];
    const trapHit = isCorrect ? null : (item.trapTypes?.[selectedChoiceKey] || "Distractor Trap");

    StorageManager.recordGuidedAnswer(moduleId, itemId, selectedChoiceKey, isCorrect, currentHintIndex);

    // Auto-log mistake if wrong
    if (!isCorrect) {
      StorageManager.logMistake({
        id: `ERR-${item.id}`,
        moduleId: moduleId,
        moduleTitle: MODULES_CONFIG.find(m => m.id === moduleId)?.title || "Guided Practice",
        type: "Reading",
        question: item.question,
        passage: item.passage,
        selected: selectedChoiceKey,
        answer: item.answer,
        trapType: trapHit,
        explanation: item.explanation?.correctBridge || "Review question rationale"
      });
    }

    renderStage5GuidedPractice(document.getElementById("stage-canvas"), items, moduleId, itemIdx);
  }

  /**
   * Stage 6: Independent Practice ("You Do" Exam Pace)
   */
  function renderStage6IndependentPractice(container, practiceItems, rubricData, moduleId, itemIdx) {
    if (itemIdx >= practiceItems.length) {
      renderSelfAssessmentRubric(container, rubricData, moduleId);
      return;
    }

    const item = practiceItems[itemIdx];
    const totalItems = practiceItems.length;
    const modState = StorageManager.getModuleState(moduleId);
    const existingRecord = modState?.independent?.items?.[item.id];
    const isSubmitted = !!existingRecord;
    if (isSubmitted) {
      selectedChoiceKey = existingRecord.selected;
    }

    let choicesHTML = "";
    item.choices.forEach(choiceText => {
      const letter = choiceText.substring(0, 1);
      const isEliminated = eliminatedChoices.has(letter);
      const isSelected = isSubmitted ? (existingRecord?.selected === letter) : (selectedChoiceKey === letter);
      const isCorrect = letter === item.answer;

      let btnClass = "sat-choice-button";
      if (isEliminated) btnClass += " choice-eliminated";
      if (isSelected) btnClass += " choice-selected";

      if (isSubmitted) {
        if (isCorrect) btnClass += " choice-confirmed-correct";
        else if (isSelected && !isCorrect) btnClass += " choice-confirmed-wrong";
      }

      choicesHTML += `
        <div class="choice-row">
          <button class="${btnClass}" onclick="Engine.handleChoiceClick('${letter}', '${moduleId}', 6, ${itemIdx})" ${isSubmitted ? 'disabled' : ''}>
            <span class="choice-letter">${letter}</span>
            <span class="choice-text-content">${choiceText.substring(3)}</span>
          </button>
          ${!isSubmitted ? `
            <button class="choice-eliminate-btn ${isEliminated ? 'active' : ''}" title="Cross out option" onclick="Engine.toggleElimination('${letter}', '${moduleId}', 6, ${itemIdx})">
              ✕
            </button>
          ` : ""}
        </div>
      `;
    });

    container.innerHTML = `
      <div class="stage-card independent-stage-card animate-fade-in">
        <div class="stage-card-header flex-between">
          <div>
            <div class="stage-pill">Stage 6 of 6: Independent Practice (Exam Pace)</div>
            <h2 class="stage-title">Item ${itemIdx + 1} of ${totalItems}</h2>
          </div>
          <div class="sat-timer-box ${timerSecondsRemaining <= 15 ? 'timer-warning' : ''}" id="exam-timer-display">
            <span class="timer-icon">⏱️</span>
            <span class="timer-digits">${formatTime(timerSecondsRemaining)}</span>
          </div>
        </div>

        ${item.strategyHeuristic ? `
          <div class="strategy-heuristic-banner">
            <span class="heuristic-icon">💡</span>
            <div class="heuristic-content">
              <div class="heuristic-title">Strategy & Pattern Heuristic</div>
              <p class="heuristic-text">${item.strategyHeuristic}</p>
            </div>
          </div>
        ` : ""}

        <div class="sat-split-layout">
          <!-- Left: Passage -->
          <div class="sat-passage-pane">
            <div class="pane-header">
              <span class="pane-tag">Passage Context</span>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button class="btn btn-secondary btn-small" style="padding: 2px 6px; font-size: 0.75rem;" onclick="StudentTools.adjustPassageFont(-0.05)" title="Metin Boyutunu Küçült">A-</button>
                <button class="btn btn-secondary btn-small" style="padding: 2px 6px; font-size: 0.75rem;" onclick="StudentTools.adjustPassageFont(0.05)" title="Metin Boyutunu Büyüt">A+</button>
                <span class="difficulty-badge ${item.difficulty.toLowerCase()}">${item.difficulty}</span>
              </div>
            </div>
            <div class="passage-body">
              ${injectGlosses(item.passage, item.glosses)}
            </div>
            ${(isSubmitted && item.turkishSolverGuide) ? renderTurkishSolverCard(item.turkishSolverGuide) : ""}
          </div>

          <!-- Right: Question & Choices -->
          <div class="sat-question-pane">
            <div class="question-stem">${item.question}</div>

            <div class="sat-choices-container">
              ${choicesHTML}
            </div>

            ${!isSubmitted ? `
              <div class="question-submit-area">
                <button class="btn btn-primary btn-large" onclick="Engine.submitIndependentAnswer('${moduleId}', '${item.id}', '${item.answer}', ${itemIdx})" ${!selectedChoiceKey ? 'disabled' : ''}>
                  Confirm Answer <kbd>Enter</kbd>
                </button>
              </div>
            ` : renderStructuredExplanation(item.explanation, item, (existingRecord?.isCorrect || selectedChoiceKey === item.answer))}
          </div>
        </div>

        <div class="stage-actions-footer">
          <button class="btn btn-secondary" onclick="App.navigateToStage('${moduleId}', 5)">← Back to Guided</button>
          ${isSubmitted ? `
            <button class="btn btn-secondary" onclick="Engine.retakeIndependentQuestion('${moduleId}', '${item.id}', ${itemIdx})">
              🔄 Retake Item
            </button>
            <button class="btn btn-primary" onclick="App.navigateToStage('${moduleId}', 6, ${itemIdx + 1})">
              ${itemIdx + 1 < totalItems ? `Next Question (${itemIdx + 2}/${totalItems}) →` : "Proceed to Self-Audit Rubric →"}
            </button>
          ` : ""}
        </div>
      </div>
    `;

    if (!isSubmitted) {
      startTimer();
    }
  }

  function submitIndependentAnswer(moduleId, itemId, correctAnswer, itemIdx) {
    if (!selectedChoiceKey) return;
    stopTimer();
    const timeSpent = CONFIG.TIMER_DEFAULT_SECONDS - timerSecondsRemaining;
    const isCorrect = selectedChoiceKey === correctAnswer;
    const items = ACADEMY_CONTENT[moduleId].stage6_independentPractice;
    const item = items[itemIdx];
    const trapHit = isCorrect ? null : (item.trapTypes?.[selectedChoiceKey] || "Distractor Trap");

    StorageManager.recordIndependentAnswer(moduleId, itemId, selectedChoiceKey, isCorrect, timeSpent, trapHit);

    // Auto-log mistake if wrong
    if (!isCorrect) {
      StorageManager.logMistake({
        id: `ERR-${item.id}`,
        moduleId: moduleId,
        moduleTitle: MODULES_CONFIG.find(m => m.id === moduleId)?.title || "Independent Practice",
        type: "Reading",
        question: item.question,
        passage: item.passage,
        selected: selectedChoiceKey,
        answer: item.answer,
        trapType: trapHit,
        explanation: item.explanation?.correctBridge || "Review question rationale"
      });
    }

    renderStage6IndependentPractice(document.getElementById("stage-canvas"), items, ACADEMY_CONTENT[moduleId].selfAssessmentRubric, moduleId, itemIdx);
  }

  /**
   * Self-Assessment Rubric (End of Module)
   */
  function renderSelfAssessmentRubric(container, rubricData, moduleId) {
    const modConfig = MODULES_CONFIG.find(m => m.id === moduleId);
    const modState = StorageManager.getModuleState(moduleId);
    const indItems = Object.values(modState?.independent?.items || {});
    const correctCount = indItems.filter(i => i.isCorrect).length;
    const totalCount = indItems.length;
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

    let rubricQuestionsHTML = "";
    rubricData.prompts.forEach((prompt, idx) => {
      rubricQuestionsHTML += `
        <div class="rubric-row">
          <p class="rubric-prompt-text">${prompt.label}</p>
          <div class="rubric-rating-radios">
            <label><input type="radio" name="rubric-${prompt.id}" value="1" required /> 1 (Emerging)</label>
            <label><input type="radio" name="rubric-${prompt.id}" value="2" /> 2</label>
            <label><input type="radio" name="rubric-${prompt.id}" value="3" /> 3 (Competent)</label>
            <label><input type="radio" name="rubric-${prompt.id}" value="4" /> 4</label>
            <label><input type="radio" name="rubric-${prompt.id}" value="5" /> 5 (Mastered)</label>
          </div>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="stage-card rubric-stage-card animate-fade-in">
        <div class="stage-card-header">
          <div class="stage-pill">Module Completion & Self-Audit</div>
          <h2 class="stage-title">${rubricData.title}</h2>
          <p class="stage-subtitle">Evaluate your metacognitive mastery of ${modConfig.title}.</p>
        </div>

        <div class="module-score-banner">
          <div class="score-stat">
            <span class="score-label">Independent Practice Accuracy:</span>
            <span class="score-value ${accuracy >= 80 ? 'green' : 'amber'}">${accuracy}% (${correctCount}/${totalCount})</span>
          </div>
          <div class="score-stat">
            <span class="score-label">Mastery Status:</span>
            <span class="status-badge status-${modState.status.toLowerCase().replace(' ', '-')}">${modState.status}</span>
          </div>
        </div>

        <form id="self-assessment-form" onsubmit="Engine.submitRubric(event, '${moduleId}')">
          <div class="rubric-prompts-container">
            ${rubricQuestionsHTML}
          </div>

          <div class="stage-actions-footer">
            <button type="submit" class="btn btn-primary btn-large">
              Save Self-Audit & Return to Skill Map →
            </button>
          </div>
        </form>
      </div>
    `;
  }

  function submitRubric(event, moduleId) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const answers = {};
    for (const [key, val] of formData.entries()) {
      answers[key] = val;
    }
    StorageManager.recordSelfAssessment(moduleId, answers);
    App.navigateToSkillMap();
  }

  /**
   * Choice and Elimination Handling
   */
  function handleChoiceClick(letter, moduleId, stageNum, itemIdx) {
    if (eliminatedChoices.has(letter)) return;
    selectedChoiceKey = letter;
    refreshStageView(moduleId, stageNum, itemIdx);
  }

  function toggleElimination(letter, moduleId, stageNum, itemIdx) {
    if (eliminatedChoices.has(letter)) {
      eliminatedChoices.delete(letter);
    } else {
      eliminatedChoices.add(letter);
      if (selectedChoiceKey === letter) {
        selectedChoiceKey = null;
      }
    }
    refreshStageView(moduleId, stageNum, itemIdx);
  }

  function refreshStageView(moduleId, stageNum, itemIdx) {
    if (stageNum === 5) {
      renderStage5GuidedPractice(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage5_guidedPractice, moduleId, itemIdx);
    } else if (stageNum === 6) {
      renderStage6IndependentPractice(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage6_independentPractice, ACADEMY_CONTENT[moduleId].selfAssessmentRubric, moduleId, itemIdx);
    }
  }

  /**
   * Deep Structured Explanation Builder
   */
  function renderStructuredExplanation(exp, item, isCorrect) {
    if (!exp) return "";

    let autopsyHTML = "";
    if (exp.choiceBreakdown) {
      autopsyHTML = `
        <div class="distractor-autopsy-section">
          <div class="autopsy-section-title">
            <span>🔬</span>
            <h4>Distractor Flaw Autopsy (Why Each Choice Fails or Succeeds)</h4>
          </div>
          <div class="autopsy-list">
            ${Object.entries(exp.choiceBreakdown).map(([letter, analysis]) => {
              const isRightLetter = letter === item.answer;
              const trapBadge = item.trapTypes?.[letter] || (isRightLetter ? "Correct Answer" : "Flawed Distractor");
              return `
                <div class="autopsy-item ${isRightLetter ? 'autopsy-correct' : 'autopsy-wrong'}">
                  <div class="autopsy-header">
                    <span class="autopsy-letter">Option ${letter}</span>
                    <span class="autopsy-trap-badge ${isRightLetter ? 'badge-correct' : 'badge-trap'}">${trapBadge}</span>
                  </div>
                  <p class="autopsy-text">${analysis}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="explanation-card animate-fade-in ${isCorrect ? 'explanation-correct' : 'explanation-incorrect'}">
        <div class="explanation-status-banner">
          <span class="status-icon">${isCorrect ? '✓' : '✗'}</span>
          <div class="status-text-wrap">
            <div class="status-headline">${isCorrect ? 'Correct! Logical Path Verified.' : 'Incorrect Choice.'}</div>
            <div class="correct-answer-pill">Defensible Answer: <strong>Option ${item.answer}</strong></div>
          </div>
        </div>

        <div class="explanation-body-grid">
          <div class="explanation-block correct-bridge">
            <div class="block-title">
              <span>🎯</span>
              <h4>The Text-to-Option Bridge (Direct Textual Proof)</h4>
            </div>
            <p>${exp.correctBridge}</p>
          </div>

          ${autopsyHTML}

          <div class="explanation-block key-takeaway">
            <div class="block-title">
              <span>🧠</span>
              <h4>Metacognitive Rule for Next Time</h4>
            </div>
            <p>${exp.keyTakeaway}</p>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * =========================================================================
   * DIGITAL SAT GRAMMAR ACADEMY ENGINE
   * =========================================================================
   */
  function renderGrammarHome(container) {
    const target = container || document.getElementById("grammar-canvas") || document.getElementById("stage-canvas");
    if (!target) return;
    const state = StorageManager.getState();
    const gmods = GRAMMAR_MODULES_CONFIG || [];

    let cardsHTML = "";
    gmods.forEach(gmod => {
      const gState = state.grammar?.[gmod.id] || { status: "Not Started", completedCount: 0, correctCount: 0 };
      cardsHTML += `
        <div class="grammar-module-card animate-fade-in" onclick="App.navigateToGrammarModule('${gmod.id}')">
          <div class="gmod-header">
            <span class="gmod-icon">${gmod.icon}</span>
            <span class="gmod-tag">${gmod.domainTag}</span>
          </div>
          <h3 class="gmod-title">${gmod.title}</h3>
          <h4 class="gmod-tr-title">🇹🇷 ${gmod.turkishTitle}</h4>
          <p class="gmod-desc">${gmod.subtitle}</p>
          <div class="gmod-footer">
            <span class="status-badge status-${gState.status.toLowerCase().replace(' ', '-')}">${gState.status}</span>
            <span class="gmod-time">⏱️ ${gmod.estimatedMinutes} mins</span>
          </div>
        </div>
      `;
    });

    target.innerHTML = `
      <div class="grammar-dashboard animate-fade-in">
        <div class="grammar-hero-banner">
          <div class="hero-left">
            <div class="hero-badge">Digital SAT Standard English Conventions</div>
            <h1>✍️ Grammar & Conventions Academy</h1>
            <p>Master punctuation, clause boundaries, agreement, modifiers, and transitions with Turkish formulas and College Board drills.</p>
          </div>
          <button class="btn btn-accent" onclick="App.openTurkishModal('transitions')">
            🔄 Bağlaç & Geçişler Tablosu (🇹🇷)
          </button>
        </div>

        <div class="grammar-modules-grid">
          ${cardsHTML}
        </div>
      </div>
    `;
  }

  function renderGrammarModule(container, moduleId, itemIdx = 0) {
    const target = container || document.getElementById("grammar-canvas") || document.getElementById("stage-canvas");
    if (!target) return;
    const modData = GRAMMAR_CONTENT[moduleId];
    const modConfig = GRAMMAR_MODULES_CONFIG.find(m => m.id === moduleId);
    if (!modData || !modConfig) return;

    const drills = modData.drills || [];
    const item = drills[itemIdx] || drills[0];
    const totalDrills = drills.length;
    const isLastDrill = itemIdx >= totalDrills - 1;

    const state = StorageManager.getState();
    const gState = state.grammar?.[moduleId] || { items: {} };
    const prevRecord = gState.items?.[item.id];
    const isSubmitted = !!prevRecord;

    if (isSubmitted) {
      selectedChoiceKey = prevRecord.selected;
    } else {
      selectedChoiceKey = null;
    }

    let choicesHTML = "";
    item.choices.forEach(ch => {
      const letter = ch.substring(0, 1);
      const isSelected = isSubmitted ? (prevRecord?.selected === letter) : (selectedChoiceKey === letter);
      const isCorrect = letter === item.answer;

      let btnClass = "sat-choice-button";
      if (isSelected) btnClass += " choice-selected";
      if (isSubmitted) {
        if (isCorrect) btnClass += " choice-confirmed-correct";
        else if (isSelected && !isCorrect) btnClass += " choice-confirmed-wrong";
      }

      choicesHTML += `
        <button class="${btnClass}" onclick="Engine.handleGrammarChoice('${letter}')" ${isSubmitted ? 'disabled' : ''}>
          <span class="choice-letter">${letter}</span>
          <span class="choice-text-content">${ch.substring(3)}</span>
        </button>
      `;
    });

    target.innerHTML = `
      <div class="grammar-lesson-view animate-fade-in">
        <div class="grammar-header-row flex-between">
          <div>
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.35rem;">
              <button class="btn btn-secondary btn-small" onclick="App.navigateToGrammarHome()">← Back to Grammar Academy</button>
              <button class="btn btn-secondary btn-small" onclick="Engine.resetGrammarModuleDrills('${moduleId}')" title="Reset all drills in this module">🔄 Reset All Drills</button>
            </div>
            <h2 class="grammar-title">${modConfig.icon} ${modConfig.title} (🇹🇷 ${modConfig.turkishTitle})</h2>
          </div>
          <div class="item-progress-pills">
            ${drills.map((d, i) => {
              const isDone = !!gState.items?.[d.id];
              return `<span class="item-dot ${i === itemIdx ? 'active' : (isDone ? 'completed' : '')}"></span>`;
            }).join('')}
          </div>
        </div>

        <!-- Turkish Grammar Rule & Formula Box -->
        <div class="grammar-rule-box">
          <div class="rule-box-header">
            <span class="rule-icon">📐</span>
            <h3>${modData.lesson.title}</h3>
          </div>
          <p class="rule-tr-explanation">${modData.lesson.turkishExplanation}</p>
          <div class="formula-pre-box">
            <code>${modData.lesson.formula.replace(/\n/g, '<br>')}</code>
          </div>
        </div>

        <!-- Practice Drill -->
        <div class="sat-split-layout">
          <div class="sat-passage-pane">
            <div class="pane-header">
              <span class="pane-tag">Grammar Drill ${itemIdx + 1} of ${totalDrills}</span>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button class="btn btn-secondary btn-small" style="padding: 2px 6px; font-size: 0.75rem;" onclick="StudentTools.adjustPassageFont(-0.05)" title="Metin Boyutunu Küçült">A-</button>
                <button class="btn btn-secondary btn-small" style="padding: 2px 6px; font-size: 0.75rem;" onclick="StudentTools.adjustPassageFont(0.05)" title="Metin Boyutunu Büyüt">A+</button>
              </div>
            </div>
            <div class="grammar-passage-box">
              <p class="grammar-sentence-text">${item.passage}</p>
            </div>
            ${(isSubmitted && item.turkishSolverGuide) ? renderTurkishSolverCard(item.turkishSolverGuide) : ""}
          </div>

          <div class="sat-question-pane">
            <div class="question-stem">${item.question}</div>
            <div class="sat-choices-container">
              ${choicesHTML}
            </div>

            ${!isSubmitted ? `
              <div class="question-submit-area">
                <button class="btn btn-primary btn-large" onclick="Engine.submitGrammarAnswer('${moduleId}', '${item.id}', '${item.answer}', ${itemIdx})" ${!selectedChoiceKey ? 'disabled' : ''}>
                  Confirm Grammar Choice <kbd>Enter</kbd>
                </button>
              </div>
            ` : renderStructuredExplanation(item.explanation, item, (prevRecord?.isCorrect || selectedChoiceKey === item.answer))}
          </div>
        </div>

        <div class="stage-actions-footer">
          ${isSubmitted ? `
            <button class="btn btn-secondary" onclick="Engine.retakeGrammarQuestion('${moduleId}', '${item.id}', ${itemIdx})">
              🔄 Retake This Question
            </button>
            <button class="btn btn-primary" onclick="App.navigateToGrammarModule('${moduleId}', ${isLastDrill ? 0 : itemIdx + 1})">
              ${!isLastDrill ? `Next Grammar Question (${itemIdx + 2}/${totalDrills}) →` : "Complete Grammar Module ✓"}
            </button>
          ` : ""}
        </div>
      </div>
    `;

    if (typeof StudentTools !== "undefined") {
      StudentTools.restorePassageAnnotations(`GRAM-${moduleId}-I${itemIdx}`);
    }
  }

  function handleGrammarChoice(letter) {
    selectedChoiceKey = letter;
    const buttons = document.querySelectorAll(".sat-choice-button");
    buttons.forEach(b => {
      const l = b.querySelector(".choice-letter");
      if (l && l.textContent.trim() === letter) {
        b.classList.add("choice-selected");
      } else {
        b.classList.remove("choice-selected");
      }
    });
    const submitBtn = document.querySelector(".question-submit-area button");
    if (submitBtn) submitBtn.disabled = false;
  }

  function submitGrammarAnswer(moduleId, questionId, correctAnswer, itemIdx) {
    if (!selectedChoiceKey) return;
    const isCorrect = selectedChoiceKey === correctAnswer;
    const drills = GRAMMAR_CONTENT[moduleId].drills;
    const item = drills[itemIdx];

    StorageManager.recordGrammarAnswer(moduleId, questionId, selectedChoiceKey, isCorrect);

    // Auto-log mistake if wrong
    if (!isCorrect) {
      StorageManager.logMistake({
        id: `ERR-${item.id}`,
        moduleId: moduleId,
        moduleTitle: GRAMMAR_MODULES_CONFIG.find(m => m.id === moduleId)?.title || "Grammar",
        type: "Grammar",
        question: item.question,
        passage: item.passage,
        selected: selectedChoiceKey,
        answer: correctAnswer,
        trapType: "Grammar Convention Error",
        explanation: item.explanation?.correctBridge || "Review grammar rule"
      });
    }

    renderGrammarModule(null, moduleId, itemIdx);
  }

  function retakeGrammarQuestion(moduleId, questionId, itemIdx) {
    StorageManager.clearGrammarItem(moduleId, questionId);
    selectedChoiceKey = null;
    renderGrammarModule(null, moduleId, itemIdx);
  }

  function resetGrammarModuleDrills(moduleId) {
    if (confirm("Reset all drill progress in this module to practice again?")) {
      StorageManager.resetGrammarModule(moduleId);
      selectedChoiceKey = null;
      renderGrammarModule(null, moduleId, 0);
    }
  }

  function retakeGuidedQuestion(moduleId, itemId, itemIdx) {
    StorageManager.clearGuidedItem(moduleId, itemId);
    selectedChoiceKey = null;
    currentHintIndex = 0;
    const items = ACADEMY_CONTENT[moduleId].stage5_guidedPractice;
    renderStage5GuidedPractice(document.getElementById("stage-canvas"), items, moduleId, itemIdx);
  }

  function retakeIndependentQuestion(moduleId, itemId, itemIdx) {
    StorageManager.clearIndependentItem(moduleId, itemId);
    selectedChoiceKey = null;
    const items = ACADEMY_CONTENT[moduleId].stage6_independentPractice;
    renderStage6IndependentPractice(document.getElementById("stage-canvas"), items, moduleId, itemIdx);
  }

  /**
   * =========================================================================
   * 30-DAY DAILY VOCABULARY & DRILLS ENGINE
   * =========================================================================
   */
  function renderDailyVocabDashboard(container, selectedDay = 1) {
    const target = container || document.getElementById("vocab-canvas") || document.getElementById("stage-canvas");
    if (!target) return;
    const sets = DAILY_VOCAB_SETS || [];
    const dayData = sets.find(s => s.day === selectedDay) || sets[0];
    const progress = StorageManager.getDailyVocabProgress();
    const masteredList = StorageManager.getMasteredVocabWordsList();

    let dayPillsHTML = "";
    sets.forEach(s => {
      const isDone = !!progress[s.day];
      dayPillsHTML += `
        <button class="day-tab-pill ${s.day === selectedDay ? 'active' : ''} ${isDone ? 'completed' : ''}" onclick="Engine.renderDailyVocabDashboard(null, ${s.day})">
          <span>Day ${s.day}</span>
          ${isDone ? '<span class="done-check">✓</span>' : ''}
        </button>
      `;
    });

    let flashcardsHTML = "";
    dayData.words.forEach(w => {
      const isMastered = StorageManager.isVocabWordMastered(w.word);
      flashcardsHTML += `
        <div class="vocab-flip-card ${isMastered ? 'card-mastered' : ''}" onclick="this.classList.toggle('flipped')">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="fc-top-bar">
                <span class="fc-pos">${w.pos}</span>
                <button class="fc-master-btn ${isMastered ? 'active' : ''}" title="${isMastered ? 'Öğrenildi olarak işaretlendi' : 'Öğrendim olarak işaretle'}" onclick="event.stopPropagation(); Engine.toggleVocabMastery('${w.word}', ${selectedDay})">
                  ${isMastered ? '⭐ Öğrenildi' : '☆ Öğrendim'}
                </button>
              </div>
              <h3 class="fc-word">${w.word}</h3>
              <span class="fc-prompt">🔄 Tıkla / Çevir (Türkçe & İpucu)</span>
            </div>
            <div class="flip-card-back">
              <div class="fc-tr-line">🇹🇷 <strong>${w.tr}</strong></div>
              <p class="fc-en-def">${w.en}</p>
              <div class="fc-example"><em>"${w.ex}"</em></div>
              <div class="fc-mnemonic">💡 ${w.mnemonic}</div>
              <button class="fc-master-btn back-btn ${isMastered ? 'active' : ''}" onclick="event.stopPropagation(); Engine.toggleVocabMastery('${w.word}', ${selectedDay})">
                ${isMastered ? '⭐ Ezberlendi' : '☆ Ezberledim Olarak İşaretle'}
              </button>
            </div>
          </div>
        </div>
      `;
    });

    const quizRecord = progress[selectedDay];
    const isQuizDone = !!quizRecord;

    target.innerHTML = `
      <div class="daily-vocab-view animate-fade-in">
        <div class="daily-vocab-header flex-between">
          <div>
            <div class="stage-pill">30-Day SAT Vocabulary Challenge</div>
            <h2>📅 ${dayData.title || dayData.theme || ('Day ' + dayData.day)}</h2>
          </div>
          <div class="vocab-header-actions" style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
            <span class="vocab-mastered-pill">⭐ ${masteredList.length} Kelime Ezberlendi</span>
            <button class="btn btn-secondary" onclick="App.openTurkishModal('vocab')">
              📖 150+ Kelimelik SAT Sözlüğü
            </button>
          </div>
        </div>

        <div class="day-pills-scroll-row">
          ${dayPillsHTML}
        </div>

        <div class="flashcards-grid">
          ${flashcardsHTML}
        </div>

        <!-- Daily Quiz Drill -->
        <div class="daily-quiz-card">
          <div class="quiz-header">
            <span>⚡</span>
            <h3>Günün Alıştırması (Daily Sentence Completion Quiz)</h3>
          </div>
          <p class="quiz-question-text">${dayData.quiz.sentence || dayData.quiz.question || ''}</p>
          <div class="quiz-options-grid">
            ${dayData.quiz.options.map(opt => {
              const letter = opt.substring(0, 1);
              return `
                <button class="quiz-choice-btn" onclick="Engine.submitDailyVocabQuiz(${dayData.day}, '${letter}', '${dayData.quiz.answer}')">
                  ${opt}
                </button>
              `;
            }).join('')}
          </div>
          ${isQuizDone ? `
            <div class="quiz-feedback-box animate-fade-in">
              <p><strong>Sonuç & Açıklama:</strong> ${dayData.quiz.explanation}</p>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }

  function toggleVocabMastery(word, currentDay) {
    StorageManager.toggleVocabWordMastery(word);
    renderDailyVocabDashboard(null, currentDay);
  }

  function submitDailyVocabQuiz(dayNumber, selectedChoice, correctAnswer) {
    const isCorrect = selectedChoice === correctAnswer;
    StorageManager.recordDailyVocabCompletion(dayNumber, isCorrect ? 100 : 0);

    const sets = DAILY_VOCAB_SETS;
    const dayData = sets.find(s => s.day === dayNumber);

    if (!isCorrect && dayData) {
      StorageManager.logMistake({
        id: `ERR-VOCAB-D${dayNumber}`,
        moduleId: `Day-${dayNumber}`,
        moduleTitle: `Daily Vocab: Day ${dayNumber}`,
        type: "Vocab",
        question: dayData.quiz.sentence || dayData.quiz.question,
        passage: "Daily Vocabulary Practice",
        selected: selectedChoice,
        answer: correctAnswer,
        trapType: "Wrong Meaning",
        explanation: dayData.quiz.explanation
      });
    }

    renderDailyVocabDashboard(null, dayNumber);
  }

  /**
   * =========================================================================
   * AUTOMATIC ERROR LOG (OTOMATİK HATA DEFTERİ) & INTERACTIVE RETEST ENGINE
   * =========================================================================
   */
  let activeRetestMistakeId = null;

  function renderErrorLogView(container, filterType = "ALL") {
    const target = container || document.getElementById("error-log-canvas") || document.getElementById("stage-canvas");
    if (!target) return;
    let mistakes = StorageManager.getMistakes();
    if (filterType !== "ALL") {
      mistakes = mistakes.filter(m => m.type === filterType);
    }

    let rowsHTML = "";
    if (mistakes.length === 0) {
      rowsHTML = `
        <div class="error-log-empty">
          <span class="empty-icon">🎉</span>
          <h3>Hata Defteriniz Tertemiz!</h3>
          <p>Çözdüğünüz sorularda yaptığınız yanlışlar ve tuzaklar burada otomatik olarak toplanır ve tekrar çözmenizi sağlar.</p>
        </div>
      `;
    } else {
      rowsHTML = mistakes.map((m, idx) => `
        <div class="mistake-card ${m.resolved ? 'mistake-resolved' : ''} animate-fade-in" id="mistake-${m.id}">
          <div class="mistake-card-header flex-between">
            <div class="mistake-meta">
              <span class="mistake-type-badge type-${m.type.toLowerCase()}">${m.type}</span>
              <span class="mistake-module-name">${m.moduleTitle}</span>
              <span class="mistake-trap-pill">⚠️ ${m.trapType}</span>
            </div>
            <div class="mistake-actions">
              <button class="btn btn-small btn-primary" onclick="Engine.openMistakeRetest('${m.id}')">
                🔄 Tekrar Çöz
              </button>
              ${m.resolved ? '<span class="resolved-tag">✓ Çözüldü</span>' : `
                <button class="btn btn-small btn-accent" onclick="Engine.resolveMistakeItem('${m.id}')">
                  ✓ Öğrenildi İşaretle
                </button>
              `}
              <button class="btn-icon-delete" onclick="Engine.deleteMistakeItem('${m.id}')" title="Kayıttan Sil">✕</button>
            </div>
          </div>

          <div class="mistake-body">
            <div class="mistake-question-text"><strong>Soru:</strong> ${m.question}</div>
            ${m.passage ? `<div class="mistake-passage-preview"><em>"${m.passage.slice(0, 180)}..."</em></div>` : ''}
            
            <div class="mistake-answers-row">
              <span class="chosen-wrong">Seçtiğiniz Hatalı Cevap: <strong>${m.selected}</strong></span>
              <span class="correct-truth">Doğru Cevap: <strong>${m.answer}</strong></span>
            </div>

            <p class="mistake-explanation-text">💡 ${m.explanation}</p>

            ${m.retryCount ? `<div class="retest-count-badge">🔄 ${m.retryCount} kez tekrar denendi</div>` : ''}

            <div class="mistake-reflection-box">
              <label>📝 Kendi Notunuz (Neden bu tuzağa düştünüz?):</label>
              <div class="reflection-input-row">
                <input type="text" id="refl-input-${m.id}" value="${m.studentNote || ''}" placeholder="Örn. Qualify kelimesini yanlış anladım, zıtlık bağlacını kaçırdım..." />
                <button class="btn btn-small btn-secondary" onclick="Engine.saveMistakeReflection('${m.id}')">Notu Kaydet</button>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    const unresolvedCount = StorageManager.getMistakes().filter(m => !m.resolved).length;

    target.innerHTML = `
      <div class="error-log-view animate-fade-in">
        <div class="error-log-header flex-between">
          <div>
            <div class="stage-pill">Kişiselleştirilmiş Hata Defteri</div>
            <h2>📓 Otomatik Hata Defteri & Tuzak Analizi</h2>
            <p>Yanlış yaptığınız her soru buraya kaydedilir. Soruları tekrar çözün, tuzakları kavrayın ve zayıf noktalarınızı pekiştirin.</p>
          </div>
          <div class="error-log-filter-pills">
            <button class="filter-pill ${filterType === 'ALL' ? 'active' : ''}" onclick="Engine.renderErrorLogView(null, 'ALL')">Tümü (${StorageManager.getMistakes().length})</button>
            <button class="filter-pill ${filterType === 'Reading' ? 'active' : ''}" onclick="Engine.renderErrorLogView(null, 'Reading')">Reading</button>
            <button class="filter-pill ${filterType === 'Grammar' ? 'active' : ''}" onclick="Engine.renderErrorLogView(null, 'Grammar')">Grammar</button>
            <button class="filter-pill ${filterType === 'Vocab' ? 'active' : ''}" onclick="Engine.renderErrorLogView(null, 'Vocab')">Vocab</button>
          </div>
        </div>

        <div class="mistakes-list-container">
          ${rowsHTML}
        </div>
      </div>
    `;
  }

  function openMistakeRetest(mistakeId) {
    const mistake = StorageManager.getMistakes().find(m => m.id === mistakeId);
    if (!mistake) return;

    const modal = document.createElement("div");
    modal.id = "mistake-retest-modal";
    modal.className = "modal-backdrop open";
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    modal.innerHTML = `
      <div class="modal-card mistake-retest-card animate-slide-up">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon">🔄</span>
            <h3>Yanlış Soruyu Tekrar Çöz: ${mistake.moduleTitle}</h3>
          </div>
          <button class="modal-close-btn" onclick="document.getElementById('mistake-retest-modal').remove()">✕</button>
        </div>
        <div class="modal-body-scroll">
          <div class="retest-trap-alert">
            <span>⚠️ <strong>Dikkat:</strong> Bu soruda daha önce <em>"${mistake.trapType}"</em> tuzağına düşmüştünüz.</span>
          </div>
          ${mistake.passage ? `<div class="retest-passage-box"><p>${mistake.passage}</p></div>` : ''}
          <div class="retest-question-box"><h4>${mistake.question}</h4></div>
          <div class="retest-options-list">
            ${["A", "B", "C", "D"].map(opt => `
              <button class="retest-option-btn" id="retest-opt-${opt}" onclick="Engine.submitMistakeRetest('${mistake.id}', '${opt}', '${mistake.answer}')">
                <span class="choice-letter">${opt}</span>
                <span class="choice-text-content">Seçenek ${opt}</span>
              </button>
            `).join('')}
          </div>
          <div id="retest-feedback-area" class="retest-feedback-box" style="display: none;"></div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="document.getElementById('mistake-retest-modal').remove()">Kapat</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  function submitMistakeRetest(mistakeId, chosenOption, correctAnswer) {
    const isCorrect = chosenOption.toUpperCase() === correctAnswer.toUpperCase();
    const feedbackArea = document.getElementById("retest-feedback-area");
    
    // Highlight options
    ["A", "B", "C", "D"].forEach(opt => {
      const btn = document.getElementById(`retest-opt-${opt}`);
      if (btn) {
        btn.disabled = true;
        if (opt.toUpperCase() === correctAnswer.toUpperCase()) {
          btn.classList.add("choice-confirmed-correct");
        } else if (opt.toUpperCase() === chosenOption.toUpperCase() && !isCorrect) {
          btn.classList.add("choice-confirmed-wrong");
        }
      }
    });

    StorageManager.recordMistakeRetest(mistakeId, isCorrect);

    if (feedbackArea) {
      feedbackArea.style.display = "block";
      if (isCorrect) {
        feedbackArea.className = "retest-feedback-box retest-success animate-fade-in";
        feedbackArea.innerHTML = `
          <h4>🎉 Harika! Soruyu Doğru Çözdünüz!</h4>
          <p>Tuzaktan başarıyla kurtuldunuz. Soru otomatik olarak <strong>Öğrenildi (Resolved)</strong> olarak güncellendi.</p>
        `;
      } else {
        feedbackArea.className = "retest-feedback-box retest-failure animate-fade-in";
        feedbackArea.innerHTML = `
          <h4>⚠️ Yanlış Seçim.</h4>
          <p>Doğru cevap <strong>Seçenek ${correctAnswer}</strong> olmalıdır. Açıklamayı tekrar gözden geçirin.</p>
        `;
      }
    }

    setTimeout(() => {
      renderErrorLogView(null);
    }, 1200);
  }

  function resolveMistakeItem(mistakeId) {
    StorageManager.resolveMistake(mistakeId);
    renderErrorLogView(null);
  }

  function deleteMistakeItem(mistakeId) {
    StorageManager.deleteMistake(mistakeId);
    renderErrorLogView(null);
  }

  function saveMistakeReflection(mistakeId) {
    const input = document.getElementById(`refl-input-${mistakeId}`);
    if (input) {
      StorageManager.saveMistakeNote(mistakeId, input.value.trim());
      alert("Notunuz Hata Defterine kaydedildi!");
    }
  }

  /**
   * Injects interactive ESL gloss popovers with bilingual English & Turkish translations into passage text
   */
  function injectGlosses(text, glosses) {
    if (!glosses || Object.keys(glosses).length === 0) return text;

    let processed = text;
    Object.entries(glosses).forEach(([word, def]) => {
      const escaped = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b(${escaped})\\b`, 'gi');
      processed = processed.replace(regex, (match) => {
        let enDef = def;
        let trDef = "";
        if (def.includes("• 🇹🇷") || def.includes("🇹🇷")) {
          const parts = def.split(/•\s*🇹🇷|🇹🇷/);
          enDef = parts[0].trim();
          trDef = parts[1]?.trim() || "";
        }

        const popoverHTML = `
          <span class="esl-gloss-popover">
            <span class="gloss-en-part">${enDef}</span>
            ${trDef ? `<span class="gloss-tr-part"><span class="tr-flag">🇹🇷</span> <strong>Türkçe:</strong> ${trDef}</span>` : ""}
          </span>
        `;
        return `<span class="esl-gloss-term" tabindex="0" data-gloss="${def}">${match}${popoverHTML}</span>`;
      });
    });

    return processed;
  }

  /**
   * Timer mechanics
   */
  function startTimer() {
    stopTimer();
    timerSecondsRemaining = CONFIG.TIMER_DEFAULT_SECONDS;
    itemStartTime = Date.now();

    timerInterval = setInterval(() => {
      timerSecondsRemaining--;
      const display = document.getElementById("exam-timer-display");
      if (display) {
        display.querySelector(".timer-digits").textContent = formatTime(timerSecondsRemaining);
        if (timerSecondsRemaining <= 15) {
          display.classList.add("timer-warning");
        }
      }

      if (timerSecondsRemaining <= 0) {
        stopTimer();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function formatTime(seconds) {
    const m = Math.floor(Math.max(0, seconds) / 60);
    const s = Math.max(0, seconds) % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function advanceStage() {
    if (currentStageNumber < 6) {
      App.navigateToStage(currentModuleId, currentStageNumber + 1);
    } else {
      App.navigateToSkillMap();
    }
  }

  return {
    loadModuleStage,
    revealNextThought,
    submitTrapAnswer,
    handleChoiceClick,
    toggleElimination,
    requestHint,
    submitGuidedAnswer,
    submitIndependentAnswer,
    submitRubric,
    advanceStage,
    injectGlosses,
    renderGrammarHome,
    renderGrammarModule,
    handleGrammarChoice,
    submitGrammarAnswer,
    retakeGrammarQuestion,
    resetGrammarModuleDrills,
    retakeGuidedQuestion,
    retakeIndependentQuestion,
    renderDailyVocabDashboard,
    toggleVocabMastery,
    submitDailyVocabQuiz,
    renderErrorLogView,
    openMistakeRetest,
    submitMistakeRetest,
    resolveMistakeItem,
    deleteMistakeItem,
    saveMistakeReflection
  };
})();
