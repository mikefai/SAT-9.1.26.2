/**
 * SAT READING SKILLS ACADEMY - Analytics & Pure-SVG Visualizer
 * Calculates mastery metrics, trap vulnerability profiles, hint dependency trends,
 * and generates pure-SVG diagnostic charts with zero external libraries.
 */

const Analytics = (function() {

  /**
   * Computes comprehensive statistics for a given module
   */
  function getModuleSummary(moduleId, state) {
    const mod = state.modules[moduleId];
    const modConfig = MODULES_CONFIG.find(m => m.id === moduleId);
    if (!mod || !modConfig) return null;

    const guidedCount = Object.keys(mod.guided.items).length;
    const guidedHintsSum = mod.guided.hintsUsedTotal || 0;
    const avgHints = guidedCount > 0 ? (guidedHintsSum / guidedCount) : 0;

    let guidedCorrect = 0;
    Object.values(mod.guided.items).forEach(it => {
      if (it.isCorrect) guidedCorrect++;
    });
    const guidedAccuracy = guidedCount > 0 ? (guidedCorrect / guidedCount) : 0;

    const indCount = Object.keys(mod.independent.items).length;
    const indCorrect = mod.independent.correctCount || 0;
    const indAccuracy = indCount > 0 ? (indCorrect / indCount) : 0;

    const stagesCompletedCount = (mod.stagesCompleted || []).length;
    const isMastered = mod.status === CONFIG.STATUS_LABELS.MASTERED;

    return {
      id: moduleId,
      title: modConfig.title,
      domain: modConfig.domain,
      status: mod.status,
      stagesCompleted: mod.stagesCompleted || [],
      stagesCompletedCount,
      totalStages: modConfig.stagesCount,
      guidedCount,
      guidedAccuracy,
      avgHints: parseFloat(avgHints.toFixed(2)),
      indCount,
      indCorrect,
      indAccuracy: parseFloat(indAccuracy.toFixed(2)),
      isMastered,
      selfAssessment: mod.selfAssessment
    };
  }

  /**
   * Generates global summary across all 7 modules
   */
  function getGlobalSummary(state) {
    const modulesSummary = MODULES_CONFIG.map(m => getModuleSummary(m.id, state));
    
    let totalMastered = 0;
    let totalPracticing = 0;
    let totalLearning = 0;
    let totalNotStarted = 0;

    let totalIndQuestions = 0;
    let totalIndCorrect = 0;
    let totalGuidedQuestions = 0;
    let totalHintsUsed = 0;

    modulesSummary.forEach(m => {
      if (m.status === CONFIG.STATUS_LABELS.MASTERED) totalMastered++;
      else if (m.status === CONFIG.STATUS_LABELS.PRACTICING) totalPracticing++;
      else if (m.status === CONFIG.STATUS_LABELS.LEARNING) totalLearning++;
      else totalNotStarted++;

      totalIndQuestions += m.indCount;
      totalIndCorrect += m.indCorrect;
      totalGuidedQuestions += m.guidedCount;
      totalHintsUsed += (m.avgHints * m.guidedCount);
    });

    const overallAccuracy = totalIndQuestions > 0 ? (totalIndCorrect / totalIndQuestions) : 0;
    const overallAvgHints = totalGuidedQuestions > 0 ? (totalHintsUsed / totalGuidedQuestions) : 0;
    const overallMasteryPct = Math.round((totalMastered / MODULES_CONFIG.length) * 100);

    return {
      modulesSummary,
      totalMastered,
      totalPracticing,
      totalLearning,
      totalNotStarted,
      totalIndQuestions,
      totalIndCorrect,
      overallAccuracy: parseFloat(overallAccuracy.toFixed(2)),
      overallAvgHints: parseFloat(overallAvgHints.toFixed(2)),
      overallMasteryPct
    };
  }

  /**
   * Identifies the student's weakest skill and creates actionable metacognitive advice
   */
  function getPersonalizedRecommendation(state) {
    const summary = getGlobalSummary(state);
    const attemptedModules = summary.modulesSummary.filter(m => m.indCount > 0 || m.guidedCount > 0);

    if (attemptedModules.length === 0) {
      return {
        type: "START",
        moduleId: "MOD-0",
        moduleTitle: "Reading Like the SAT Wants",
        badge: "🎯 Step 1: Foundations",
        headline: "Begin with Foundational Active Reading",
        rationale: "Start by completing Module 0 to master pivot transitions, extreme distractor elimination, and claim-evidence architecture before tackling specific question types.",
        advice: "Start by completing Module 0 to master pivot transitions, extreme distractor elimination, and claim-evidence architecture before tackling specific question types.",
        actionText: "Launch Foundation Module",
        actionUrl: "#module/MOD-0/1"
      };
    }

    // Find module with lowest independent accuracy or highest hint reliance
    let weakest = attemptedModules[0];
    let minScore = 999;

    attemptedModules.forEach(m => {
      // Score = (accuracy * 100) - (avgHints * 25)
      const score = (m.indAccuracy * 100) - (m.avgHints * 25);
      if (score < minScore) {
        minScore = score;
        weakest = m;
      }
    });

    // Check dominant trap weakness
    const trapErrors = state.trapErrors || {};
    let topTrap = null;
    let maxTrapCount = 0;
    Object.keys(trapErrors).forEach(trapKey => {
      if (trapErrors[trapKey] > maxTrapCount) {
        maxTrapCount = trapErrors[trapKey];
        topTrap = trapKey;
      }
    });

    let trapAdvice = "";
    if (topTrap && maxTrapCount > 0) {
      const trapInfo = TRAP_TAXONOMY[topTrap];
      trapAdvice = `You frequently get caught by <strong>${topTrap}</strong> distractors (${maxTrapCount} times). Counter-strategy: ${trapInfo?.howToDefeat || 'Carefully verify textual qualifiers.'}`;
    }

    const recText = `Your current accuracy is ${Math.round(weakest.indAccuracy * 100)}% with an average of ${weakest.avgHints} hints per guided question. ${trapAdvice}`;

    return {
      type: "PRACTICE_WEAKEST",
      moduleId: weakest.id,
      moduleTitle: weakest.title,
      badge: "⚠️ Priority Weakness Drill",
      headline: `Priority Focus: ${weakest.title}`,
      rationale: recText,
      advice: recText,
      actionText: `Practice ${weakest.title}`,
      actionUrl: `#module/${weakest.id}/5`
    };
  }

  /**
   * Generates a downloadable Personal Diagnostic & Strategy Report (Markdown)
   */
  function generatePersonalStudyReport(state) {
    const global = getGlobalSummary(state);
    const score = StorageManager.calculateProjectedScore();
    const mistakes = StorageManager.getMistakes();
    const streak = state.studyStreak || { current: 1 };
    const masteredVocab = Object.keys(state.masteredVocabWords || {}).length;

    let md = `# SAT Reading & Writing Academy — Kişisel Gelişim & Strateji Raporu\n`;
    md += `*Tarih: ${new Date().toLocaleDateString('tr-TR')} | Çalışma Serisi: ${streak.current} Gün*\n\n`;
    md += `## 🎯 Tahmini Digital SAT Reading & Writing Puan Aralığı: **${score.bandLow} – ${score.bandHigh} / 800**\n`;
    md += `- **Genel Doğruluk Oranı:** %${Math.round(global.overallAccuracy * 100)}\n`;
    md += `- **Müfredat Tamamlama:** %${global.overallMasteryPct} (${global.totalMastered}/7 Modül Master Seviyesinde)\n`;
    md += `- **Ezberlenen Kritik SAT Kelimeleri:** ${masteredVocab} Kelime\n`;
    md += `- **Hata Defterindeki Toplam Soru:** ${mistakes.length} (${mistakes.filter(m => m.resolved).length} Çözüldü)\n\n`;

    md += `## 📊 Modül Bazında Performans Tablosu\n\n`;
    md += `| Modül | Durum | Guided İpuçları | Independent Doğruluk |\n`;
    md += `|---|---|---|---|\n`;
    global.modulesSummary.forEach(m => {
      md += `| ${m.title} | ${m.status} | ${m.guidedCount} soru (${m.avgHints} ipucu/soru) | %${Math.round(m.indAccuracy * 100)} (${m.indCorrect}/${m.indCount}) |\n`;
    });

    md += `\n## ⚠️ Düşülen SAT Tuzakları Dağılımı\n\n`;
    const trapErrors = state.trapErrors || {};
    Object.entries(trapErrors).forEach(([trap, count]) => {
      if (count > 0) {
        md += `- **${trap}:** ${count} kez düşüldü -> *Savunma:* ${TRAP_TAXONOMY[trap]?.howToDefeat || ''}\n`;
      }
    });

    md += `\n---\n*SAT Reading & Writing Academy ile düzenli çalışarak eksiklerinizi hızla kapatabilirsiniz.*\n`;
    return md;
  }

  /**
   * Generates a Pure-SVG Radial Mastery Ring Chart
   */
  function renderRadialGaugeSVG(percentage, label, size = 160) {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const validPct = Math.max(0, Math.min(100, percentage));
    const offset = circumference - (validPct / 100) * circumference;

    return `
      <svg class="analytics-gauge-svg" width="${size}" height="${size}" viewBox="0 0 160 160" aria-label="${label}: ${percentage}%">
        <circle cx="80" cy="80" r="${radius}" fill="none" stroke="var(--border-subtle)" stroke-width="12" />
        <circle cx="80" cy="80" r="${radius}" fill="none" stroke="var(--accent-primary)" stroke-width="12"
          stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"
          transform="rotate(-90 80 80)" class="gauge-fill" />
        <text x="80" y="75" text-anchor="middle" class="gauge-pct-text">${validPct}%</text>
        <text x="80" y="98" text-anchor="middle" class="gauge-label-text">${label}</text>
      </svg>
    `;
  }

  /**
   * Generates a Pure-SVG Horizontal Bar Chart for Question Type Accuracies
   */
  function renderAccuracyBarChartSVG(modulesSummary) {
    const barHeight = 28;
    const gap = 16;
    const totalHeight = modulesSummary.length * (barHeight + gap) + 30;
    const chartWidth = 520;
    const labelWidth = 170;
    const maxBarWidth = chartWidth - labelWidth - 65;

    let barsHTML = "";

    modulesSummary.forEach((m, idx) => {
      const y = idx * (barHeight + gap) + 20;
      const acc = m.indCount > 0 ? m.indAccuracy : 0;
      const barW = Math.max(4, acc * maxBarWidth);
      const pctText = m.indCount > 0 ? `${Math.round(acc * 100)}%` : "N/A";
      const fillColor = acc >= 0.8 ? "var(--status-mastered)" : acc >= 0.5 ? "var(--accent-primary)" : "var(--status-learning)";

      barsHTML += `
        <g class="chart-row" transform="translate(0, ${y})">
          <text x="${labelWidth - 10}" y="18" text-anchor="end" class="chart-row-label">${m.title}</text>
          <rect x="${labelWidth}" y="2" width="${maxBarWidth}" height="${barHeight - 6}" rx="4" class="chart-bar-bg" />
          <rect x="${labelWidth}" y="2" width="${barW}" height="${barHeight - 6}" rx="4" fill="${fillColor}" class="chart-bar-fill" />
          <text x="${labelWidth + barW + 10}" y="17" class="chart-row-value">${pctText}</text>
        </g>
      `;
    });

    return `
      <svg class="analytics-barchart-svg" width="100%" height="${totalHeight}" viewBox="0 0 ${chartWidth} ${totalHeight}" preserveAspectRatio="xMinYMin meet">
        ${barsHTML}
      </svg>
    `;
  }

  /**
   * Generates a Pure-SVG Donut Chart for Trap Type Error Distribution
   */
  function renderTrapDonutSVG(trapErrors) {
    const totalErrors = Object.values(trapErrors).reduce((a, b) => a + b, 0);
    const size = 260;
    const cx = 130;
    const cy = 130;
    const r = 85;
    const strokeWidth = 32;

    if (totalErrors === 0) {
      return `
        <div class="empty-chart-notice">
          <span class="empty-icon">🛡️</span>
          <p>No trap errors recorded yet. Complete Guided or Independent practice to map your distractor vulnerabilities.</p>
        </div>
      `;
    }

    const trapColors = {
      "Too Extreme": "#ef4444",      // Red
      "Half Right": "#f59e0b",       // Amber
      "Opposite": "#8b5cf6",         // Purple
      "Out of Scope": "#3b82f6",     // Blue
      "Wrong Meaning": "#ec4899",    // Pink
      "Misused Evidence": "#10b981"  // Emerald
    };

    const circumference = 2 * Math.PI * r;
    let accumulatedAngle = 0;
    let slicesHTML = "";
    let legendHTML = "";

    Object.entries(trapErrors).forEach(([trapName, count]) => {
      if (count === 0) return;
      const pct = count / totalErrors;
      const strokeDash = pct * circumference;
      const strokeOffset = circumference - strokeDash;
      const color = trapColors[trapName] || "#64748b";
      const rotation = (accumulatedAngle / circumference) * 360 - 90;

      slicesHTML += `
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${strokeWidth}"
          stroke-dasharray="${strokeDash} ${circumference - strokeDash}"
          transform="rotate(${rotation} ${cx} ${cy})" class="donut-slice" />
      `;

      accumulatedAngle += strokeDash;

      legendHTML += `
        <div class="legend-item">
          <span class="legend-dot" style="background-color: ${color}"></span>
          <span class="legend-name">${trapName}</span>
          <span class="legend-count">${count} (${Math.round(pct * 100)}%)</span>
        </div>
      `;
    });

    return `
      <div class="trap-donut-wrapper">
        <svg class="analytics-donut-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border-subtle)" stroke-width="${strokeWidth}" />
          ${slicesHTML}
          <text x="${cx}" y="${cy - 5}" text-anchor="middle" class="donut-center-number">${totalErrors}</text>
          <text x="${cx}" y="${cy + 18}" text-anchor="middle" class="donut-center-label">Trap Hits</text>
        </svg>
        <div class="trap-donut-legend">
          ${legendHTML}
        </div>
      </div>
    `;
  }

  return {
    getModuleSummary,
    getGlobalSummary,
    getPersonalizedRecommendation,
    generatePersonalStudyReport,
    renderRadialGaugeSVG,
    renderAccuracyBarChartSVG,
    renderTrapDonutSVG
  };
})();
