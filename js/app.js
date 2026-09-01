/**
 * SAT READING SKILLS ACADEMY - Main Application & Router
 * Manages view routing, user preferences, keyboard shortcuts, modals, and Teacher Mode.
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

    window.addEventListener("hashchange", handleHashRouting);
    console.log("SAT Reading Skills Academy initialized successfully.");
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
   * Router handling hash changes (#map, #module/:id/:stage, #dashboard)
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
    } else if (view === "dashboard") {
      showDashboardView();
    } else {
      showSkillMapView();
    }
  }

  function hideAllViews() {
    const views = ["skill-map-view", "module-view", "dashboard-view"];
    views.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });

    // Update active nav links
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

  function navigateToModule(moduleId) {
    const state = StorageManager.getState();
    const mod = state.modules[moduleId];
    // Find next uncompleted stage or default to Stage 1
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

    // Render Global Overview Bar
    const globalBar = document.getElementById("global-mastery-bar");
    if (globalBar) {
      globalBar.innerHTML = `
        <div class="global-overview-card animate-fade-in">
          <div class="overview-metric">
            <span class="metric-num">${globalSummary.overallMasteryPct}%</span>
            <span class="metric-label">Curriculum Mastered</span>
          </div>
          <div class="overview-metric">
            <span class="metric-num">${globalSummary.totalMastered}/7</span>
            <span class="metric-label">Skills at Master Level</span>
          </div>
          <div class="overview-metric">
            <span class="metric-num">${Math.round(globalSummary.overallAccuracy * 100)}%</span>
            <span class="metric-label">Independent Exam Accuracy</span>
          </div>
          <div class="overview-recommendation-box">
            <div class="rec-badge">Recommended Next Action</div>
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
        <div class="coaching-card animate-fade-in">
          <div class="coaching-header">
            <span class="coaching-icon">🧠</span>
            <div>
              <span class="coaching-tag">Pedagogical Diagnosis</span>
              <h3>${recommendation.headline}</h3>
            </div>
          </div>
          <p class="coaching-advice">${recommendation.advice}</p>
          <div class="coaching-action">
            <a href="${recommendation.actionUrl}" class="btn btn-primary">Execute Recommended Remediation →</a>
          </div>
        </div>
      `;
    }

    if (tableBody) {
      let rowsHTML = "";
      global.modulesSummary.forEach(m => {
        const indAccText = m.indCount > 0 ? `${Math.round(m.indAccuracy * 100)}% (${m.indCorrect}/${m.indCount})` : "Not Attempted";
        const guidedAccText = m.guidedCount > 0 ? `${Math.round(m.guidedAccuracy * 100)}%` : "Not Attempted";
        const avgHintText = m.guidedCount > 0 ? `${m.avgHints} hints/q` : "N/A";

        rowsHTML += `
          <tr>
            <td><strong>${m.title}</strong></td>
            <td><span class="status-badge status-${m.status.toLowerCase().replace(' ', '-')}">${m.status}</span></td>
            <td>${guidedAccText}</td>
            <td>${avgHintText}</td>
            <td><strong>${indAccText}</strong></td>
            <td>
              <button class="btn btn-small btn-secondary" onclick="App.navigateToModule('${m.id}')">Practice</button>
            </td>
          </tr>
        `;
      });
      tableBody.innerHTML = rowsHTML;
    }
  }

  /**
   * Method Card Persistent Drawer/Modal
   */
  function openMethodModal(moduleId) {
    const mod = MODULES_CONFIG.find(m => m.id === moduleId) || MODULES_CONFIG[0];
    const moduleContent = ACADEMY_CONTENT[mod.id];
    if (!moduleContent) return;

    const modal = document.getElementById("method-modal");
    const titleEl = document.getElementById("method-modal-title");
    const bodyEl = document.getElementById("method-modal-body");

    if (titleEl) titleEl.textContent = `${mod.methodName} — Strategy Card`;

    if (bodyEl) {
      let stepsHTML = "";
      moduleContent.stage2_method.steps.forEach(step => {
        stepsHTML += `
          <div class="method-modal-step">
            <div class="step-num">${step.num}</div>
            <div class="step-content">
              <h4>${step.title}</h4>
              <p>${step.rule}</p>
              <blockquote class="expert-quote">“${step.expertMove}”</blockquote>
            </div>
          </div>
        `;
      });
      bodyEl.innerHTML = stepsHTML;
    }

    if (modal) modal.classList.add("open");
  }

  function closeMethodModal() {
    const modal = document.getElementById("method-modal");
    if (modal) modal.classList.remove("open");
  }

  /**
   * JSON Export / Import Handling
   */
  function exportDataFile() {
    const jsonStr = StorageManager.exportData();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sat_reading_academy_backup_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function triggerImportDialog() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = StorageManager.importData(event.target.result);
        if (result.success) {
          alert("Progress successfully imported!");
          window.location.reload();
        } else {
          alert("Error importing data: " + result.error);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function confirmResetProgress() {
    if (confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
      StorageManager.resetProgress();
      window.location.hash = "#map";
      window.location.reload();
    }
  }

  /**
   * Keyboard Shortcuts Handler
   */
  function setupKeyboardListeners() {
    window.addEventListener("keydown", (e) => {
      // Don't intercept if user is typing in a textarea or text input
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
      } else if (key === "t" || key === "T") {
        toggleTeacherMode();
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
    navigateToModule,
    navigateToStage,
    openMethodModal,
    closeMethodModal,
    exportDataFile,
    triggerImportDialog,
    confirmResetProgress
  };
})();

// Bootstrap on DOM readiness
document.addEventListener("DOMContentLoaded", App.init);
