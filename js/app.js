/**
 * SAT READING & WRITING ACADEMY - Main Application & Router
 * Manages view routing (Reading, Grammar, Daily Vocab, Error Log, Analytics),
 * preferences, keyboard shortcuts, modals, student tools, and Teacher Mode.
 */

const App = (function() {

  let isTeacherMode = false;
  let isEslEnabled = true;

  /**
   * Initializes the application upon DOM load
   */
  function init() {
    setupTheme();
    setupPreferences();
    setupKeyboardListeners();
    handleHashRouting();

    if (typeof StudentTools !== "undefined") {
      StudentTools.init();
    }

    window.addEventListener("hashchange", handleHashRouting);
    console.log("SAT Reading & Writing Academy initialized successfully.");
  }

  /**
   * Theme configuration (Dark-first with Light toggle)
   */
  function setupTheme() {
    const state = StorageManager.getState();
    const theme = state.theme || CONFIG.THEME_DEFAULT;
    applyTheme(theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.innerHTML = theme === "dark" ? "<span>☀️</span> Light Mode" : "<span>🌙</span> Dark Mode";
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    const state = StorageManager.getState();
    state.theme = next;
    StorageManager.saveState(state);
  }

  /**
   * ESL and Teacher Mode preferences
   */
  function setupPreferences() {
    const state = StorageManager.getState();
    isEslEnabled = state.eslSupport !== undefined ? state.eslSupport : CONFIG.ESL_SUPPORT_DEFAULT;
    isTeacherMode = !!state.teacherMode;

    updateEslUI();
    updateTeacherModeUI();
  }

  function toggleEsl() {
    isEslEnabled = !isEslEnabled;
    const state = StorageManager.getState();
    state.eslSupport = isEslEnabled;
    StorageManager.saveState(state);
    updateEslUI();
  }

  function updateEslUI() {
    if (isEslEnabled) {
      document.body.classList.add("esl-enabled");
      document.body.classList.remove("esl-disabled");
    } else {
      document.body.classList.remove("esl-enabled");
      document.body.classList.add("esl-disabled");
    }
    const eslBtn = document.getElementById("esl-toggle-btn");
    if (eslBtn) {
      eslBtn.classList.toggle("active", isEslEnabled);
      eslBtn.innerHTML = `<span>📖</span> ESL Glosses: <strong>${isEslEnabled ? "ON" : "OFF"}</strong>`;
    }
  }

  function toggleTeacherMode() {
    isTeacherMode = !isTeacherMode;
    const state = StorageManager.getState();
    state.teacherMode = isTeacherMode;
    StorageManager.saveState(state);
    updateTeacherModeUI();
  }

  function updateTeacherModeUI() {
    document.body.classList.toggle("teacher-mode-active", isTeacherMode);
    const teacherBtn = document.getElementById("teacher-mode-btn");
    if (teacherBtn) {
      teacherBtn.classList.toggle("active", isTeacherMode);
      teacherBtn.innerHTML = `<span>👩‍🏫</span> Teacher Mode: <strong>${isTeacherMode ? "ON" : "OFF"}</strong>`;
    }
    const banner = document.getElementById("teacher-mode-banner");
    if (banner) {
      banner.style.display = isTeacherMode ? "block" : "none";
    }
  }

  /**
   * Router handling hash changes (#map, #module/:id/:stage, #grammar, #vocab-daily, #error-log, #dashboard)
   */
  function handleHashRouting() {
    const hash = window.location.hash || "#map";
    const parts = hash.replace("#", "").split("/");
    const view = parts[0];

    hideAllViews();

    if (view === "module" && parts[1]) {
      const moduleId = parts[1];
      const stageNum = parts[2] ? parseInt(parts[2], 10) : 1;
      const itemIdx = parts[3] ? parseInt(parts[3], 10) : 0;
      showModuleView(moduleId, stageNum, itemIdx);
    } else if (view === "grammar") {
      if (parts[1]) {
        const itemIdx = parts[2] ? parseInt(parts[2], 10) : 0;
        showGrammarModuleView(parts[1], itemIdx);
      } else {
        showGrammarHomeView();
      }
    } else if (view === "vocab-daily") {
      const dayNum = parts[1] ? parseInt(parts[1], 10) : 1;
      showDailyVocabView(dayNum);
    } else if (view === "error-log") {
      showErrorLogView();
    } else if (view === "dashboard") {
      showDashboardView();
    } else {
      showSkillMapView();
    }
  }

  function hideAllViews() {
    const views = [
      "skill-map-view",
      "module-view",
      "grammar-view",
      "vocab-daily-view",
      "error-log-view",
      "dashboard-view"
    ];
    views.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => link.classList.remove("active"));
  }

  function showSkillMapView() {
    const el = document.getElementById("skill-map-view");
    if (el) el.style.display = "block";
    const link = document.getElementById("nav-link-map");
    if (link) link.classList.add("active");
    renderSkillMap();
  }

  function showModuleView(moduleId, stageNum, itemIdx) {
    const el = document.getElementById("module-view");
    if (el) el.style.display = "block";
    Engine.loadModuleStage(moduleId, stageNum, itemIdx);
  }

  function showGrammarHomeView() {
    const el = document.getElementById("grammar-view");
    if (el) el.style.display = "block";
    const link = document.getElementById("nav-link-grammar");
    if (link) link.classList.add("active");
    Engine.renderGrammarHome(document.getElementById("grammar-canvas"));
  }

  function showGrammarModuleView(moduleId, itemIdx = 0) {
    const el = document.getElementById("grammar-view");
    if (el) el.style.display = "block";
    const link = document.getElementById("nav-link-grammar");
    if (link) link.classList.add("active");
    Engine.renderGrammarModule(document.getElementById("grammar-canvas"), moduleId, itemIdx);
  }

  function showDailyVocabView(dayNum = 1) {
    const el = document.getElementById("vocab-daily-view");
    if (el) el.style.display = "block";
    const link = document.getElementById("nav-link-vocab");
    if (link) link.classList.add("active");
    Engine.renderDailyVocabDashboard(document.getElementById("vocab-canvas"), dayNum);
  }

  function showErrorLogView(filter = "ALL") {
    const el = document.getElementById("error-log-view");
    if (el) el.style.display = "block";
    const link = document.getElementById("nav-link-error-log");
    if (link) link.classList.add("active");
    Engine.renderErrorLogView(document.getElementById("error-log-canvas"), filter);
  }

  function showDashboardView() {
    const el = document.getElementById("dashboard-view");
    if (el) el.style.display = "block";
    const link = document.getElementById("nav-link-dashboard");
    if (link) link.classList.add("active");
    renderDashboard();
  }

  /**
   * Navigation Helper Functions
   */
  function navigateToSkillMap() {
    window.location.hash = "#map";
  }

  function navigateToDashboard() {
    window.location.hash = "#dashboard";
  }

  function navigateToGrammarHome() {
    window.location.hash = "#grammar";
  }

  function navigateToGrammarModule(moduleId, itemIdx = 0) {
    window.location.hash = `#grammar/${moduleId}/${itemIdx}`;
  }

  function navigateToDailyVocab(day = 1) {
    window.location.hash = `#vocab-daily/${day}`;
  }

  function navigateToErrorLog() {
    window.location.hash = "#error-log";
  }

  function navigateToModule(moduleId) {
    const state = StorageManager.getState();
    const mod = state.modules[moduleId];
    let nextStage = 1;
    if (mod && mod.stagesCompleted.length > 0) {
      for (let s = 1; s <= 6; s++) {
        if (!mod.stagesCompleted.includes(s)) {
          nextStage = s;
          break;
        }
      }
    }
    window.location.hash = `#module/${moduleId}/${nextStage}`;
  }

  function navigateToStage(moduleId, stageNum, itemIdx = 0) {
    window.location.hash = `#module/${moduleId}/${stageNum}/${itemIdx}`;
  }

  /**
   * Renders the Skill Map Grid
   */
  function renderSkillMap() {
    const container = document.getElementById("modules-grid");
    if (!container) return;

    const state = StorageManager.getState();
    const globalSummary = Analytics.getGlobalSummary(state);
    const recommendation = Analytics.getPersonalizedRecommendation(state);

    const globalBar = document.getElementById("global-mastery-bar");
    if (globalBar) {
      globalBar.innerHTML = `
        <div class="global-overview-card animate-fade-in">
          <div class="overview-metric">
            <span class="metric-num">${globalSummary.overallMasteryPct}%</span>
            <span class="metric-label">Reading Curriculum Mastered</span>
          </div>
          <div class="overview-metric">
            <span class="metric-num">${globalSummary.totalMastered}/7</span>
            <span class="metric-label">Reading Skills at Master Level</span>
          </div>
          <div class="overview-metric">
            <span class="metric-num">${Math.round(globalSummary.overallAccuracy * 100)}%</span>
            <span class="metric-label">Exam Pace Accuracy</span>
          </div>
          <div class="overview-recommendation-box">
            <div class="rec-badge">Recommended Next Step</div>
            <div class="rec-title">${recommendation.headline}</div>
            <a href="${recommendation.actionUrl}" class="btn btn-accent btn-small">Launch Step →</a>
          </div>
        </div>
      `;
    }

    let cardsHTML = "";
    MODULES_CONFIG.forEach(mod => {
      const summary = Analytics.getModuleSummary(mod.id, state);
      const stagesDone = summary.stagesCompletedCount;
      const progressPct = Math.round((stagesDone / 6) * 100);
      const status = summary.status;
      const statusClass = `status-${status.toLowerCase().replace(' ', '-')}`;

      cardsHTML += `
        <div class="module-card ${statusClass} animate-fade-in">
          <div class="module-card-top">
            <span class="module-domain-pill">${mod.domainTag}</span>
            <span class="module-status-badge ${statusClass}">${status}</span>
          </div>

          <div class="module-card-icon">${mod.icon}</div>

          <h3 class="module-card-title">${mod.number === 0 ? "Foundation" : "Module " + mod.number}: ${mod.title}</h3>
          <p class="module-card-subtitle">${mod.subtitle}</p>

          <div class="module-card-method">
            <span class="method-label">Method:</span>
            <strong>${mod.methodName}</strong>
          </div>

          <div class="module-progress-track">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
            </div>
            <span class="progress-text">${stagesDone}/6 Stages Complete (${progressPct}%)</span>
          </div>

          <div class="module-card-footer">
            <button class="btn btn-primary btn-block" onclick="App.navigateToModule('${mod.id}')">
              ${status === CONFIG.STATUS_LABELS.NOT_STARTED ? 'Start Module →' : 'Continue Module →'}
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = cardsHTML;
  }

  /**
   * Renders the Analytics & Diagnostic Dashboard
   */
  function renderDashboard() {
    const state = StorageManager.getState();
    const global = Analytics.getGlobalSummary(state);
    const recommendation = Analytics.getPersonalizedRecommendation(state);

    const gaugeContainer = document.getElementById("analytics-radial-gauge");
    const barChartContainer = document.getElementById("analytics-barchart-container");
    const donutContainer = document.getElementById("analytics-donut-container");
    const recContainer = document.getElementById("analytics-coaching-rec");
    const tableBody = document.getElementById("analytics-table-body");

    if (gaugeContainer) {
      gaugeContainer.innerHTML = Analytics.renderRadialGaugeSVG(global.overallMasteryPct, "Overall Mastery");
    }

    if (barChartContainer) {
      barChartContainer.innerHTML = Analytics.renderAccuracyBarChartSVG(global.modulesSummary);
    }

    if (donutContainer) {
      donutContainer.innerHTML = Analytics.renderTrapDonutSVG(state.trapErrors || {});
    }

    if (recContainer) {
      recContainer.innerHTML = `
        <div class="rec-headline-badge">${recommendation.badge}</div>
        <h3 class="rec-headline-title">${recommendation.headline}</h3>
        <p class="rec-rationale">${recommendation.rationale}</p>
        <div class="rec-button-wrap">
          <a href="${recommendation.actionUrl}" class="btn btn-primary">${recommendation.actionText} →</a>
        </div>
      `;
    }

    if (tableBody) {
      tableBody.innerHTML = global.modulesSummary.map(mod => {
        const statusClass = `status-${mod.status.toLowerCase().replace(' ', '-')}`;
        return `
          <tr>
            <td><strong>${mod.number === 0 ? "Foundation" : "M" + mod.number}: ${mod.title}</strong></td>
            <td><span class="status-badge ${statusClass}">${mod.status}</span></td>
            <td>${mod.stagesCompletedCount}/6</td>
            <td>${mod.guidedCompleted} items (${mod.hintsUsedTotal} hints)</td>
            <td>${mod.accuracyPct}% (${mod.independentCorrect}/${mod.independentCompleted})</td>
            <td>
              <button class="btn btn-small btn-secondary" onclick="App.navigateToModule('${mod.id}')">Open</button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  /**
   * Method Card Drawer / Modal
   */
  function openMethodModal(moduleId) {
    const modal = document.getElementById("method-modal");
    if (!modal) return;

    const modConfig = MODULES_CONFIG.find(m => m.id === moduleId) || MODULES_CONFIG[0];
    const modContent = ACADEMY_CONTENT[modConfig.id];
    if (!modContent) return;

    const titleEl = document.getElementById("modal-method-title");
    const bodyEl = document.getElementById("modal-method-body");

    if (titleEl) titleEl.textContent = `${modConfig.title}: ${modContent.stage2_method.name}`;

    let stepsHTML = "";
    modContent.stage2_method.steps.forEach(step => {
      stepsHTML += `
        <div class="method-modal-step">
          <div class="step-num">${step.stepNumber}</div>
          <div class="step-text">
            <h4>${step.title}</h4>
            <p>${step.description}</p>
            <div class="micro-action"><em>Action:</em> ${step.action}</div>
          </div>
        </div>
      `;
    });

    if (bodyEl) bodyEl.innerHTML = stepsHTML;
    modal.classList.add("open");
  }

  function closeMethodModal() {
    const modal = document.getElementById("method-modal");
    if (modal) modal.classList.remove("open");
  }

  /**
   * Turkish SAT Guide Modal (🇹🇷)
   */
  let currentTurkishTab = "vocab";

  function openTurkishModal(tab = "vocab") {
    currentTurkishTab = tab;
    const modal = document.getElementById("turkish-modal");
    if (!modal) return;

    modal.classList.add("open");
    switchTurkishTab(tab);
  }

  function closeTurkishModal() {
    const modal = document.getElementById("turkish-modal");
    if (modal) modal.classList.remove("open");
  }

  function switchTurkishTab(tabName) {
    currentTurkishTab = tabName;
    document.querySelectorAll(".turkish-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });
    renderTurkishModalContent(tabName);
  }

  function renderTurkishModalContent(tabName, filterQuery = "") {
    const bodyEl = document.getElementById("turkish-modal-body");
    if (!bodyEl) return;

    if (tabName === "vocab") {
      let vocabList = TURKISH_SAT_VOCAB_VAULT.top100Vocab || [];
      if (filterQuery.trim()) {
        const q = filterQuery.toLowerCase().trim();
        vocabList = vocabList.filter(item => 
          item.word.toLowerCase().includes(q) || 
          item.tr.toLowerCase().includes(q) || 
          item.en.toLowerCase().includes(q)
        );
      }

      bodyEl.innerHTML = `
        <div class="turkish-tab-content">
          <div class="turkish-search-bar">
            <span>🔍</span>
            <input type="text" id="turkish-vocab-search" placeholder="Kelime ara (İngilizce veya Türkçe)..." value="${filterQuery}" oninput="App.filterTurkishVocab(this.value)" />
            <span class="vocab-count-badge">${vocabList.length} Kelime</span>
          </div>

          <div class="turkish-vocab-grid">
            ${vocabList.map(v => `
              <div class="tr-vocab-card">
                <div class="tr-vocab-header">
                  <span class="tr-word-text">${v.word}</span>
                  <span class="tr-pos-tag">${v.pos}</span>
                </div>
                <div class="tr-meaning-line">
                  <strong>🇹🇷</strong> <span class="tr-translation">${v.tr}</span>
                </div>
                <p class="tr-en-definition">${v.en}</p>
                <div class="tr-sat-tip"><span class="tip-spark">💡 SAT İpucu:</span> ${v.tip}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tabName === "false_friends") {
      const list = TURKISH_SAT_VOCAB_VAULT.falseFriends || [];
      bodyEl.innerHTML = `
        <div class="turkish-tab-content">
          <div class="turkish-info-intro">
            <h4>⚠️ Yalancı Eşdeğerler (False Friends) Nedir?</h4>
            <p>Türk öğrencilerin en sık düştüğü tuzak: İngilizce kelimenin Türkçedeki ilk çağrışımını seçmek. SAT bu kelimelerin ikincil akademik anlamlarını sorar.</p>
          </div>

          <div class="false-friends-list">
            ${list.map(ff => `
              <div class="false-friend-card">
                <div class="ff-card-header">
                  <span class="ff-word">${ff.word}</span>
                  <span class="ff-trap-tag">⚠️ Tuzak Kelime</span>
                </div>
                <div class="ff-comparison-grid">
                  <div class="ff-wrong-box">
                    <span class="ff-box-label">❌ Türkçedeki Yanıltıcı Algı:</span>
                    <p>${ff.wrongTurkishThinking || ff.wrongConcept || ''}</p>
                  </div>
                  <div class="ff-correct-box">
                    <span class="ff-box-label">✓ SAT'deki Gerçek Akademik Anlam:</span>
                    <p><strong>${ff.satRealMeaning || ff.correctConcept || ''}</strong></p>
                  </div>
                </div>
                <div class="ff-example-box">
                  <strong>Örnek Cümle:</strong> <em>${ff.example || ''}</em>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tabName === "transitions") {
      const transitions = TURKISH_SAT_VOCAB_VAULT.transitions || [];
      bodyEl.innerHTML = `
        <div class="turkish-tab-content">
          <div class="turkish-info-intro">
            <h4>🔄 SAT Bağlaçlar & Geçiş İfadeleri Tablosu</h4>
            <p>Cümle tamamlama ve Cross-Text sorularında yön değiştiren veya pekiştiren en kritik bağlaçlar.</p>
          </div>

          <div class="transitions-group-list">
            ${transitions.map(grp => `
              <div class="transition-category-card">
                <div class="transition-cat-header">
                  <h4>${grp.category}</h4>
                  <span class="cat-role-badge">İşlev: ${grp.role}</span>
                </div>
                <div class="transition-table-wrap">
                  <table class="transition-tr-table">
                    <thead>
                      <tr>
                        <th>İngilizce Bağlaç</th>
                        <th>Türkçe Anlamı</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${grp.words.map(w => `
                        <tr>
                          <td><strong>${w.en}</strong></td>
                          <td>${w.tr}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tabName === "stems") {
      const stems = TURKISH_SAT_VOCAB_VAULT.questionStems || [];
      bodyEl.innerHTML = `
        <div class="turkish-tab-content">
          <div class="turkish-info-intro">
            <h4>🎯 Soru Kökleri & Komutlar Kılavuzu (Ne İsteniyor?)</h4>
            <p>Soru kökünü doğru anlamak, seçeneklerde hangi tuzağın kurulduğunu önceden tahmin etmenizi sağlar.</p>
          </div>

          <div class="stems-list">
            ${stems.map(st => `
              <div class="stem-guide-card">
                <div class="stem-en-box">
                  <span class="stem-tag">Soru Kökü (EN):</span>
                  <h5>“${st.stemEn}”</h5>
                </div>
                <div class="stem-tr-box">
                  <span class="stem-tag">Türkçe Çevirisi:</span>
                  <p><strong>${st.stemTr}</strong></p>
                </div>
                <div class="stem-strategy-box">
                  <span class="strategy-tag">💡 Ne Yapmalısınız (Strateji):</span>
                  <p>${st.strategyTr}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  function filterTurkishVocab(query) {
    renderTurkishModalContent("vocab", query);
  }

  /**
   * Data Management
   */
  function exportDataFile() {
    const json = StorageManager.exportData();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SAT_Reading_Academy_Progress_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function triggerImportDialog() {
    const input = document.getElementById("import-file-input");
    if (input) input.click();
  }

  function confirmResetProgress() {
    if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      StorageManager.resetProgress();
      window.location.reload();
    }
  }

  /**
   * Keyboard Shortcuts Handler
   */
  function setupKeyboardListeners() {
    window.addEventListener("keydown", (e) => {
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;

      const key = e.key;

      if (key === "m" || key === "M") {
        const modal = document.getElementById("method-modal");
        if (modal && modal.classList.contains("open")) {
          closeMethodModal();
        } else {
          const state = StorageManager.getState();
          openMethodModal(state.activeModuleId || "MOD-0");
        }
      } else if (key === "Escape") {
        closeMethodModal();
        closeTurkishModal();
        if (typeof StudentTools !== "undefined") {
          StudentTools.closeNotepadDrawer();
        }
      } else if ((key === "t" || key === "T") && e.shiftKey) {
        toggleTeacherMode();
      } else if (key === "t" || key === "T") {
        const trModal = document.getElementById("turkish-modal");
        if (trModal && trModal.classList.contains("open")) {
          closeTurkishModal();
        } else {
          openTurkishModal();
        }
      } else if (key === "g" || key === "G") {
        navigateToGrammarHome();
      } else if (key === "v" || key === "V") {
        navigateToDailyVocab(1);
      } else if (key === "e" || key === "E") {
        navigateToErrorLog();
      } else if (key === "n" || key === "N") {
        if (typeof StudentTools !== "undefined") {
          StudentTools.toggleNotepadDrawer();
        }
      }
    });
  }

  return {
    init,
    toggleTheme,
    toggleEsl,
    toggleTeacherMode,
    navigateToSkillMap,
    navigateToDashboard,
    navigateToGrammarHome,
    navigateToGrammarModule,
    navigateToDailyVocab,
    navigateToErrorLog,
    navigateToModule,
    navigateToStage,
    openMethodModal,
    closeMethodModal,
    openTurkishModal,
    closeTurkishModal,
    switchTurkishTab,
    filterTurkishVocab,
    exportDataFile,
    triggerImportDialog,
    confirmResetProgress
  };
})();

// Bootstrap on DOM readiness
document.addEventListener("DOMContentLoaded", App.init);
