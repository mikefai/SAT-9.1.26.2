/**
 * SAT READING SKILLS ACADEMY - Execution Engine
 * Handles stage flow, think-aloud progressive reveals, trap lab drills,
 * hint ladders, timer countdowns, answer checking, structured deep explanations,
 * and ESL gloss rendering.
 */

const Engine = (function() {

  let currentModuleId = "MOD-0";
  let currentStageNumber = 1;
  let currentItemIndex = 0;
  let currentThinkAloudStep = 0;
  let currentHintsRevealed = 0;
  let selectedChoiceKey = null;
  let eliminatedChoices = new Set();
  let timerInterval = null;
  let timerSecondsRemaining = CONFIG.TIMER_DEFAULT_SECONDS;
  let itemStartTime = null;

  /**
   * Initializes or transitions to a specific module and stage
   */
  function loadModuleStage(moduleId, stageNumber = 1, itemIndex = 0) {
    currentModuleId = moduleId;
    currentStageNumber = parseInt(stageNumber, 10);
    currentItemIndex = parseInt(itemIndex, 10);
    currentThinkAloudStep = 0;
    currentHintsRevealed = 0;
    selectedChoiceKey = null;
    eliminatedChoices.clear();
    stopTimer();

    const moduleData = ACADEMY_CONTENT[moduleId];
    if (!moduleData) {
      console.error(`Module ${moduleId} not found in content database.`);
      return;
    }

    renderModuleHeader(moduleId, currentStageNumber);
    renderStageContent(moduleId, currentStageNumber, currentItemIndex);
  }

  /**
   * Renders the top navigation stepper for the 6 stages
   */
  function renderModuleHeader(moduleId, stageNum) {
    const modConfig = MODULES_CONFIG.find(m => m.id === moduleId);
    const modState = StorageManager.getModuleState(moduleId);
    const stagesContainer = document.getElementById("stage-stepper");
    if (!stagesContainer) return;

    const stages = [
      { num: 1, name: "The Skill", icon: "📖" },
      { num: 2, name: "The Method", icon: "🧭" },
      { num: 3, name: "Worked Examples", icon: "🧠" },
      { num: 4, name: "Trap Lab", icon: "🧪" },
      { num: 5, name: "Guided Practice", icon: "🤝" },
      { num: 6, name: "Independent", icon: "🎯" }
    ];

    let html = "";
    stages.forEach(st => {
      const isCompleted = modState && modState.stagesCompleted.includes(st.num);
      const isActive = st.num === stageNum;
      const statusClass = isActive ? "active" : isCompleted ? "completed" : "";

      html += `
        <button class="stage-step-btn ${statusClass}" data-stage="${st.num}" onclick="App.navigateToStage('${moduleId}', ${st.num})">
          <span class="stage-badge">${isCompleted && !isActive ? "✓" : st.num}</span>
          <span class="stage-label">${st.name}</span>
        </button>
      `;
    });

    stagesContainer.innerHTML = html;

    // Update Module Banner title & tags
    const titleEl = document.getElementById("module-banner-title");
    const domainEl = document.getElementById("module-banner-domain");
    const methodBtn = document.getElementById("module-banner-method-btn");

    if (titleEl) titleEl.textContent = `${modConfig.number === 0 ? "Foundation" : "Module " + modConfig.number}: ${modConfig.title}`;
    if (domainEl) domainEl.textContent = modConfig.domainTag;
    if (methodBtn) {
      methodBtn.innerHTML = `<span>📜</span> ${modConfig.methodName} <kbd>M</kbd>`;
      methodBtn.onclick = () => App.openMethodModal(moduleId);
    }
  }

  /**
   * Renders the active stage view
   */
  function renderStageContent(moduleId, stageNum, itemIdx) {
    const contentArea = document.getElementById("stage-canvas");
    if (!contentArea) return;

    const moduleData = ACADEMY_CONTENT[moduleId];

    switch (stageNum) {
      case 1:
        renderStage1Skill(contentArea, moduleData.stage1_skill, moduleId);
        break;
      case 2:
        renderStage2Method(contentArea, moduleData.stage2_method, moduleId);
        break;
      case 3:
        renderStage3WorkedExamples(contentArea, moduleData.stage3_workedExamples, moduleId, itemIdx);
        break;
      case 4:
        renderStage4TrapLab(contentArea, moduleData.stage4_trapLab, moduleId, itemIdx);
        break;
      case 5:
        renderStage5GuidedPractice(contentArea, moduleData.stage5_guidedPractice, moduleId, itemIdx);
        break;
      case 6:
        renderStage6IndependentPractice(contentArea, moduleData.stage6_independentPractice, moduleData.selfAssessmentRubric, moduleId, itemIdx);
        break;
      default:
        contentArea.innerHTML = `<p>Unknown stage.</p>`;
    }
  }

  /**
   * Stage 1: The Skill ("What & Why" + Golden Rules + Pacing Breakdown)
   */
  function renderStage1Skill(container, skillData, moduleId) {
    let goldenRulesHTML = "";
    if (skillData.goldenRules && skillData.goldenRules.length > 0) {
      let cards = "";
      skillData.goldenRules.forEach((rule, idx) => {
        cards += `
          <div class="golden-rule-card">
            <div class="rule-number-pill">${idx + 1}</div>
            <div class="rule-card-body">
              <h4>${rule.title}</h4>
              <p>${rule.description}</p>
            </div>
          </div>
        `;
      });
      goldenRulesHTML = `
        <div class="golden-rules-section">
          <div class="section-subtitle-pill"><span>🏆</span> Core Golden Rules for Answering</div>
          <div class="golden-rules-grid">
            ${cards}
          </div>
        </div>
      `;
    }

    let pacingHTML = "";
    if (skillData.pacingStrategy) {
      const steps = skillData.pacingStrategy.steps || [];
      pacingHTML = `
        <div class="pacing-timeline-box">
          <div class="pacing-header">
            <h3><span>⏱️</span> 90-Second Exam Pacing Protocol</h3>
            <span class="pacing-total">Target: ~75–90s Total</span>
          </div>
          <div class="pacing-steps-row">
            ${steps.map(s => `
              <div class="pacing-step">
                <span class="pacing-time">${s.seconds}s</span>
                <div class="pacing-action">${s.action}</div>
                <span class="pacing-subtext">${s.detail}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    let pitfallsHTML = "";
    if (skillData.commonPitfalls && skillData.commonPitfalls.length > 0) {
      pitfallsHTML = `
        <div class="pitfalls-section">
          <div class="section-subtitle-pill" style="color: var(--status-error);"><span>⚠️</span> Common Cognitive Pitfalls & Misconceptions</div>
          <div class="pitfalls-grid">
            ${skillData.commonPitfalls.map(p => `
              <div class="pitfall-card">
                <h4><span>🚨</span> ${p.name}</h4>
                <p>${p.explanation}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="stage-card skill-stage-card animate-fade-in">
        <div class="stage-card-header">
          <div class="stage-pill">Stage 1 of 6</div>
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

        ${skillData.eslNote ? `
          <div class="esl-scaffold-banner">
            <span class="esl-badge">ESL / Academic English Scaffold</span>
            <p>${skillData.eslNote}</p>
          </div>
        ` : ""}

        <div class="stage-actions-footer">
          <button class="btn btn-primary btn-large" onclick="Engine.advanceStage()">
            Proceed to Method Card (Stage 2) →
          </button>
        </div>
      </div>
    `;

    StorageManager.markStageComplete(moduleId, 1);
  }

  /**
   * Stage 2: The Method ("The Steps" + Blueprint Formula & Verification Checklist)
   */
  function renderStage2Method(container, methodData, moduleId) {
    let stepsHTML = "";
    methodData.steps.forEach(step => {
      stepsHTML += `
        <div class="method-step-card">
          <div class="step-number-badge">${step.num}</div>
          <div class="step-body">
            <h4 class="step-title">${step.title}</h4>
            <p class="step-rule">${step.rule}</p>
            <div class="step-expert-quote">
              <span class="expert-label">Top 1% Reader Move:</span>
              <p>“${step.expertMove}”</p>
            </div>
          </div>
        </div>
      `;
    });

    let formulaHTML = "";
    if (methodData.examFormula) {
      formulaHTML = `
        <div class="strategy-heuristic-banner" style="margin-bottom: 1.5rem;">
          <span class="heuristic-icon">📐</span>
          <div class="heuristic-content">
            <div class="heuristic-title">The College Board Construction Formula</div>
            <p class="heuristic-text">${methodData.examFormula}</p>
          </div>
        </div>
      `;
    }

    let checklistHTML = "";
    if (methodData.checklist && methodData.checklist.length > 0) {
      checklistHTML = `
        <div class="golden-rules-section">
          <div class="section-subtitle-pill"><span>📋</span> Pre-Submission Verification Checklist</div>
          <div class="golden-rules-grid">
            ${methodData.checklist.map((item, idx) => `
              <div class="golden-rule-card">
                <div class="rule-number-pill" style="background-color: var(--status-mastered); color: #fff;">✓</div>
                <div class="rule-card-body">
                  <h4>Check ${idx + 1}</h4>
                  <p>${item}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="stage-card method-stage-card animate-fade-in">
        <div class="stage-card-header">
          <div class="stage-pill">Stage 2 of 6</div>
          <h2 class="stage-title">${methodData.name}</h2>
          <p class="stage-subtitle">${methodData.summary}</p>
        </div>

        ${formulaHTML}

        <div class="method-steps-container">
          ${stepsHTML}
        </div>

        ${checklistHTML}

        <div class="method-tip-banner">
          <span class="tip-icon">💡</span>
          <p><strong>Hot Tip:</strong> You can open this Method Card at ANY time during practice by pressing <kbd>M</kbd> or clicking the Method button in the header.</p>
        </div>

        <div class="stage-actions-footer">
          <button class="btn btn-secondary" onclick="App.navigateToStage('${moduleId}', 1)">← Back to Skill</button>
          <button class="btn btn-primary btn-large" onclick="Engine.advanceStage()">
            Watch Worked Examples (Stage 3) →
          </button>
        </div>
      </div>
    `;

    StorageManager.markStageComplete(moduleId, 2);
  }

  /**
   * Helper: Renders structured or string explanations cleanly
   */
  function renderStructuredExplanation(explanation, item, isCorrect) {
    if (!explanation) return "";

    if (typeof explanation === "object") {
      let breakdownHTML = "";
      if (explanation.choiceBreakdown) {
        breakdownHTML = `
          <div class="expl-section choice-autopsy">
            <h4><span>🔍</span> Option-by-Option Breakdown & Trap Autopsy</h4>
            <div class="autopsy-list">
              ${["A", "B", "C", "D"].map(letter => {
                const text = explanation.choiceBreakdown[letter];
                if (!text) return "";
                const isChoiceCorrect = letter === item.answer;
                const trapName = item.trapTypes ? item.trapTypes[letter] : null;
                const trapInfo = trapName ? TRAP_TAXONOMY[trapName] : null;
                return `
                  <div class="autopsy-item ${isChoiceCorrect ? 'autopsy-correct' : 'autopsy-wrong'}">
                    <div class="autopsy-header">
                      <span class="autopsy-letter">${letter})</span>
                      ${isChoiceCorrect ? `
                        <span class="autopsy-trap-badge" style="background-color: var(--status-mastered-bg); color: var(--status-mastered);">✓ Correct Answer (Logically Forced)</span>
                      ` : (trapInfo ? `
                        <span class="autopsy-trap-badge ${trapInfo.badgeClass}">${trapInfo.icon} Trap: ${trapName}</span>
                      ` : '')}
                    </div>
                    <div class="autopsy-text">${text}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }

      return `
        <div class="structured-explanation-card animate-fade-in">
          <div class="expl-section correct-bridge">
            <h4><span>🌟</span> Why Choice ${item.answer} is 100% Defensible</h4>
            <p>${explanation.correctBridge || ""}</p>
          </div>

          ${explanation.keyTakeaway ? `
            <div class="expl-section strategy-takeaway">
              <h4><span>💡</span> Core Metacognitive Takeaway & Exam Heuristic</h4>
              <p>${explanation.keyTakeaway}</p>
            </div>
          ` : ""}

          ${breakdownHTML}
        </div>
      `;
    }

    return `
      <div class="feedback-reveal-card animate-fade-in">
        <div class="feedback-title ${isCorrect ? 'correct' : 'incorrect'}">
          <span>${isCorrect ? '✓ Correct!' : '✕ Incorrect'}</span>
        </div>
        <p class="explanation-text">${explanation}</p>
        ${item.trapTypes ? `
          <div class="trap-breakdown-box">
            <h5>Distractor Trap Breakdown:</h5>
            <ul>
              ${Object.entries(item.trapTypes).map(([opt, trap]) => `<li><strong>${opt}:</strong> ${trap} — ${TRAP_TAXONOMY[trap]?.description}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `;
  }

  /**
   * Stage 3: Worked Examples ("Watch Me Think")
   */
  function renderStage3WorkedExamples(container, examples, moduleId, itemIdx) {
    const item = examples[itemIdx] || examples[0];
    const totalItems = examples.length;
    const isLastItem = itemIdx >= totalItems - 1;

    let optionsHTML = "";
    const letters = ["A", "B", "C", "D"];

    item.choices.forEach((choiceText, idx) => {
      const letter = letters[idx];
      const isCorrect = letter === item.answer;
      const trapName = item.trapTypes[letter];
      const trapInfo = trapName ? TRAP_TAXONOMY[trapName] : null;

      optionsHTML += `
        <div class="worked-choice-card ${isCorrect ? 'choice-correct' : 'choice-distractor'}">
          <div class="choice-text-line">
            <span class="choice-marker">${letter}</span>
            <span class="choice-text">${choiceText.substring(3)}</span>
          </div>
          ${!isCorrect && trapInfo ? `
            <div class="worked-trap-tag ${trapInfo.badgeClass}">
              <span class="trap-icon">${trapInfo.icon}</span>
              <strong>Trap Type:</strong> ${trapName}
            </div>
          ` : isCorrect ? `
            <div class="worked-correct-tag">
              <span>✓</span> <strong>Correct Answer</strong> (Logically Forced)
            </div>
          ` : ""}
        </div>
      `;
    });

    let thoughtsHTML = "";
    item.thinkAloud.forEach((thought, idx) => {
      const isVisible = idx <= currentThinkAloudStep;
      thoughtsHTML += `
        <div class="think-step-card ${isVisible ? 'visible animate-slide-up' : 'hidden'}">
          <div class="think-step-badge">Thought ${idx + 1}</div>
          <div class="think-step-text">${thought}</div>
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
            ${examples.map((_, i) => `<span class="item-dot ${i === itemIdx ? 'active' : 'completed'}"></span>`).join('')}
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
              <span class="difficulty-badge ${item.difficulty.toLowerCase()}">${item.difficulty}</span>
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

            <!-- Full Structured Explanation (revealed when all thoughts shown) -->
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

  /**
   * Advances think-aloud step
   */
  function revealNextThought(moduleId, itemIdx) {
    currentThinkAloudStep++;
    renderStage3WorkedExamples(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage3_workedExamples, moduleId, itemIdx);
  }

  /**
   * Stage 4: Trap Lab ("Know the Enemy")
   */
  function renderStage4TrapLab(container, trapDrills, moduleId, itemIdx) {
    const drill = trapDrills[itemIdx] || trapDrills[0];
    const totalDrills = trapDrills.length;
    const isLastDrill = itemIdx >= totalDrills - 1;
    const modState = StorageManager.getModuleState(moduleId);
    const prevAttempt = modState?.trapLab?.attempts?.[drill.id];

    let optionsPillsHTML = "";
    drill.options.forEach(opt => {
      const isSelected = selectedChoiceKey === opt || prevAttempt?.selectedTrap === opt;
      const isCorrectOption = opt === drill.correctTrap;
      let buttonClass = "trap-select-btn";
      
      if (prevAttempt || selectedChoiceKey) {
        if (isCorrectOption) buttonClass += " trap-btn-correct";
        else if (isSelected && !isCorrectOption) buttonClass += " trap-btn-wrong";
      }

      optionsPillsHTML += `
        <button class="${buttonClass}" onclick="Engine.submitTrapAnswer('${moduleId}', '${drill.id}', '${opt}', '${drill.correctTrap}', ${itemIdx})">
          <span class="trap-opt-icon">${TRAP_TAXONOMY[opt]?.icon || '⚠️'}</span>
          <span class="trap-opt-text">${opt}</span>
        </button>
      `;
    });

    const isAnswered = !!prevAttempt || selectedChoiceKey !== null;

    container.innerHTML = `
      <div class="stage-card traplab-stage-card animate-fade-in">
        <div class="stage-card-header flex-between">
          <div>
            <div class="stage-pill">Stage 4 of 6: Trap Lab</div>
            <h2 class="stage-title">Distractor Diagnosis Drill (${itemIdx + 1} of ${totalDrills})</h2>
          </div>
          <div class="item-progress-pills">
            ${trapDrills.map((_, i) => `<span class="item-dot ${i === itemIdx ? 'active' : 'completed'}"></span>`).join('')}
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
                <span class="feedback-icon">${(prevAttempt?.isCorrect || selectedChoiceKey === drill.correctTrap) ? '🎯' : '⚠️'}</span>
                <h4>${(prevAttempt?.isCorrect || selectedChoiceKey === drill.correctTrap) ? 'Accurate Diagnosis!' : 'Trap Misidentified'}</h4>
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
                Begin Guided Practice (Stage 5) →
              </button>
            `
          ) : ""}
        </div>
      </div>
    `;

    StorageManager.markStageComplete(moduleId, 4);
  }

  /**
   * Submits Trap Lab classification
   */
  function submitTrapAnswer(moduleId, drillId, selectedTrap, correctTrap, itemIdx) {
    selectedChoiceKey = selectedTrap;
    const isCorrect = selectedTrap === correctTrap;
    StorageManager.recordTrapLabAnswer(moduleId, drillId, selectedTrap, isCorrect, correctTrap);
    renderStage4TrapLab(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage4_trapLab, moduleId, itemIdx);
  }

  /**
   * Stage 5: Guided Practice ("We Do" with 3-level Hint Ladder & Structured Explanations)
   */
  function renderStage5GuidedPractice(container, items, moduleId, itemIdx) {
    const item = items[itemIdx] || items[0];
    const totalItems = items.length;
    const isLastItem = itemIdx >= totalItems - 1;
    const modState = StorageManager.getModuleState(moduleId);
    const existingRecord = modState?.guided?.items?.[item.id];
    const isSubmitted = !!existingRecord || selectedChoiceKey !== null;

    let choicesHTML = "";
    const letters = ["A", "B", "C", "D"];

    item.choices.forEach((choiceText, idx) => {
      const letter = letters[idx];
      const isEliminated = eliminatedChoices.has(letter);
      const isSelected = (existingRecord?.selected === letter) || (selectedChoiceKey === letter);
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
            <button class="choice-eliminate-btn ${isEliminated ? 'active' : ''}" title="Cross out / eliminate option" onclick="Engine.toggleElimination('${letter}', '${moduleId}', 5, ${itemIdx})">
              ✕
            </button>
          ` : ""}
        </div>
      `;
    });

    let hintsHTML = "";
    for (let h = 0; h < currentHintsRevealed; h++) {
      const hintText = item.hints[h];
      const hintTierLabels = ["Level 1: Gentle Nudge", "Level 2: Method Strategy Reminder", "Level 3: Partial Elimination"];
      hintsHTML += `
        <div class="hint-card hint-tier-${h + 1} animate-slide-up">
          <div class="hint-header">
            <span class="hint-tier-badge">${hintTierLabels[h]}</span>
          </div>
          <p class="hint-body">${hintText}</p>
        </div>
      `;
    }

    const hintsRemaining = 3 - currentHintsRevealed;

    container.innerHTML = `
      <div class="stage-card guided-stage-card animate-fade-in">
        <div class="stage-card-header flex-between">
          <div>
            <div class="stage-pill">Stage 5 of 6: Guided Practice (Scaffolded)</div>
            <h2 class="stage-title">Practice Item ${itemIdx + 1} of ${totalItems}</h2>
          </div>
          <div class="hint-meter-box">
            <span class="hint-meter-label">Hints Used: <strong>${currentHintsRevealed}/3</strong></span>
            <div class="hint-dots">
              <span class="h-dot ${currentHintsRevealed >= 1 ? 'used' : ''}"></span>
              <span class="h-dot ${currentHintsRevealed >= 2 ? 'used' : ''}"></span>
              <span class="h-dot ${currentHintsRevealed >= 3 ? 'used' : ''}"></span>
            </div>
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
              <span class="difficulty-badge ${item.difficulty.toLowerCase()}">${item.difficulty}</span>
            </div>
            <div class="passage-body">
              ${injectGlosses(item.passage, item.glosses)}
            </div>
          </div>

          <!-- Right: Question, Choices & Hint Ladder -->
          <div class="sat-question-pane">
            <div class="question-stem">${item.question}</div>

            <div class="sat-choices-container">
              ${choicesHTML}
            </div>

            <!-- Hint Ladder Drawer -->
            <div class="hint-ladder-section">
              ${hintsHTML}

              ${!isSubmitted && hintsRemaining > 0 ? `
                <button class="btn btn-hint" onclick="Engine.requestHint('${moduleId}', ${itemIdx})">
                  <span>💡</span> Request Next Hint (${hintsRemaining} available) <kbd>H</kbd>
                </button>
              ` : ""}
            </div>

            <!-- Submission or Feedback -->
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
          ${isSubmitted ? (
            !isLastItem ? `
              <button class="btn btn-primary" onclick="App.navigateToStage('${moduleId}', 5, ${itemIdx + 1})">
                Next Guided Item (${itemIdx + 2}/${totalItems}) →
              </button>
            ` : `
              <button class="btn btn-primary btn-large" onclick="Engine.advanceStage()">
                Begin Independent Practice (Stage 6) →
              </button>
            `
          ) : ""}
        </div>
      </div>
    `;

    StorageManager.markStageComplete(moduleId, 5);
  }

  /**
   * Request next hint in Guided Practice
   */
  function requestHint(moduleId, itemIdx) {
    if (currentHintsRevealed < 3) {
      currentHintsRevealed++;
      renderStage5GuidedPractice(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage5_guidedPractice, moduleId, itemIdx);
    }
  }

  /**
   * Submits Guided Answer
   */
  function submitGuidedAnswer(moduleId, itemId, correctAnswer, itemIdx) {
    if (!selectedChoiceKey) return;
    const isCorrect = selectedChoiceKey === correctAnswer;
    StorageManager.recordGuidedAnswer(moduleId, itemId, selectedChoiceKey, isCorrect, currentHintsRevealed);
    renderStage5GuidedPractice(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage5_guidedPractice, moduleId, itemIdx);
  }

  /**
   * Stage 6: Independent Practice ("You Do" with 90s Timer, Structured Explanations & Self-Audit)
   */
  function renderStage6IndependentPractice(container, items, rubricData, moduleId, itemIdx) {
    const totalItems = items.length;
    const modState = StorageManager.getModuleState(moduleId);
    const allCompleted = Object.keys(modState?.independent?.items || {}).length >= totalItems;

    // If all items finished and we are at index >= totalItems, show rubric
    if (itemIdx >= totalItems || (allCompleted && itemIdx === -1)) {
      renderSelfAssessmentRubric(container, rubricData, moduleId);
      return;
    }

    const item = items[itemIdx] || items[0];
    const existingRecord = modState?.independent?.items?.[item.id];
    const isSubmitted = !!existingRecord || selectedChoiceKey !== null;

    let choicesHTML = "";
    const letters = ["A", "B", "C", "D"];

    item.choices.forEach((choiceText, idx) => {
      const letter = letters[idx];
      const isEliminated = eliminatedChoices.has(letter);
      const isSelected = (existingRecord?.selected === letter) || (selectedChoiceKey === letter);
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
            <button class="choice-eliminate-btn ${isEliminated ? 'active' : ''}" title="Cross out / eliminate option" onclick="Engine.toggleElimination('${letter}', '${moduleId}', 6, ${itemIdx})">
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
              <span class="difficulty-badge ${item.difficulty.toLowerCase()}">${item.difficulty}</span>
            </div>
            <div class="passage-body">
              ${injectGlosses(item.passage, item.glosses)}
            </div>
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

  /**
   * Submits Independent Answer
   */
  function submitIndependentAnswer(moduleId, itemId, correctAnswer, itemIdx) {
    if (!selectedChoiceKey) return;
    stopTimer();
    const timeSpent = CONFIG.TIMER_DEFAULT_SECONDS - timerSecondsRemaining;
    const isCorrect = selectedChoiceKey === correctAnswer;
    const items = ACADEMY_CONTENT[moduleId].stage6_independentPractice;
    const item = items[itemIdx];
    const trapHit = isCorrect ? null : item.trapTypes[selectedChoiceKey];

    StorageManager.recordIndependentAnswer(moduleId, itemId, selectedChoiceKey, isCorrect, timeSpent, trapHit);
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

  /**
   * Handles Self-Assessment submission
   */
  function submitRubric(event, moduleId) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const answers = {};
    for (let [key, val] of formData.entries()) {
      answers[key] = parseInt(val, 10);
    }
    StorageManager.recordSelfAssessment(moduleId, answers);
    App.navigateToSkillMap();
  }

  /**
   * Handles option selection
   */
  function handleChoiceClick(letter, moduleId, stageNum, itemIdx) {
    selectedChoiceKey = letter;
    if (stageNum === 5) {
      renderStage5GuidedPractice(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage5_guidedPractice, moduleId, itemIdx);
    } else if (stageNum === 6) {
      renderStage6IndependentPractice(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage6_independentPractice, ACADEMY_CONTENT[moduleId].selfAssessmentRubric, moduleId, itemIdx);
    }
  }

  /**
   * Toggles elimination (strike-through)
   */
  function toggleElimination(letter, moduleId, stageNum, itemIdx) {
    if (eliminatedChoices.has(letter)) {
      eliminatedChoices.delete(letter);
    } else {
      eliminatedChoices.add(letter);
      if (selectedChoiceKey === letter) selectedChoiceKey = null;
    }

    if (stageNum === 5) {
      renderStage5GuidedPractice(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage5_guidedPractice, moduleId, itemIdx);
    } else if (stageNum === 6) {
      renderStage6IndependentPractice(document.getElementById("stage-canvas"), ACADEMY_CONTENT[moduleId].stage6_independentPractice, ACADEMY_CONTENT[moduleId].selfAssessmentRubric, moduleId, itemIdx);
    }
  }

  /**
   * Injects interactive ESL gloss popovers into passage text
   */
  function injectGlosses(text, glosses) {
    if (!glosses || Object.keys(glosses).length === 0) return text;

    let processed = text;
    Object.entries(glosses).forEach(([word, def]) => {
      const escaped = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b(${escaped})\\b`, 'gi');
      processed = processed.replace(regex, (match) => {
        return `<span class="esl-gloss-term" tabindex="0" data-gloss="${def}">${match}<span class="esl-gloss-popover">${def}</span></span>`;
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
    injectGlosses
  };
})();
