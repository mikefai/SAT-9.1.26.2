/**
 * SAT READING & WRITING SKILLS ACADEMY - Student Interactive Tools
 * Highlighting (Yellow, Green, Cyan), Underlining, Text Selection Toolbar,
 * Font Zoom Controls, Note Export, and Slide-out Student Scratchpad / Notepad.
 */

const StudentTools = (function() {

  let activePassageKey = null;
  let floatingToolbarEl = null;
  let currentSelectionRange = null;
  let activeTagFilter = "ALL";
  let passageFontSize = 1.05; // rem

  /**
   * Initializes student study tools listeners
   */
  function init() {
    createFloatingToolbar();
    setupSelectionListeners();
    setupNotepadDrawer();
    console.log("Student study tools initialized.");
  }

  /**
   * Creates floating toolbar DOM element
   */
  function createFloatingToolbar() {
    if (document.getElementById("student-floating-toolbar")) return;

    const toolbar = document.createElement("div");
    toolbar.id = "student-floating-toolbar";
    toolbar.className = "student-floating-toolbar";
    toolbar.innerHTML = `
      <button class="tool-btn hl-yellow" title="Vurgula: Sarı (Yellow)" onclick="StudentTools.applyHighlight('highlight-yellow')">
        <span class="hl-dot yellow"></span> Sarı
      </button>
      <button class="tool-btn hl-green" title="Vurgula: Yeşil (Green)" onclick="StudentTools.applyHighlight('highlight-green')">
        <span class="hl-dot green"></span> Yeşil
      </button>
      <button class="tool-btn hl-cyan" title="Vurgula: Mavi (Cyan)" onclick="StudentTools.applyHighlight('highlight-cyan')">
        <span class="hl-dot cyan"></span> Mavi
      </button>
      <button class="tool-btn underline-btn" title="Altını Çiz (Underline)" onclick="StudentTools.applyHighlight('annotated-underline')">
        <u>U</u> Altını Çiz
      </button>
      <button class="tool-btn note-btn" title="Not Ekle (Attach Note)" onclick="StudentTools.attachNoteToSelection()">
        📝 Not Ekle
      </button>
      <button class="tool-btn clear-btn" title="Vurguyu Kaldır (Clear)" onclick="StudentTools.clearHighlightSelection()">
        ✕
      </button>
    `;
    document.body.appendChild(toolbar);
    floatingToolbarEl = toolbar;
  }

  /**
   * Listens for mouseup/touchend selection on passage panes
   */
  function setupSelectionListeners() {
    document.addEventListener("selectionchange", handleSelectionChange);
    document.addEventListener("mousedown", (e) => {
      if (floatingToolbarEl && !floatingToolbarEl.contains(e.target) && !e.target.closest(".sat-passage-pane") && !e.target.closest(".grammar-passage-box")) {
        hideFloatingToolbar();
      }
    });
  }

  function handleSelectionChange() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || selection.toString().trim() === "") {
      hideFloatingToolbar();
      return;
    }

    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    const passagePane = container.nodeType === 1 ? container.closest(".passage-body, .grammar-passage-box") : container.parentElement?.closest(".passage-body, .grammar-passage-box");

    if (!passagePane) {
      hideFloatingToolbar();
      return;
    }

    currentSelectionRange = range;
    positionFloatingToolbar(range);
  }

  function positionFloatingToolbar(range) {
    if (!floatingToolbarEl) return;
    const rect = range.getBoundingClientRect();
    const top = rect.top + window.scrollY - 48;
    const left = rect.left + window.scrollX + (rect.width / 2) - (floatingToolbarEl.offsetWidth / 2);

    floatingToolbarEl.style.top = `${Math.max(10, top)}px`;
    floatingToolbarEl.style.left = `${Math.max(10, left)}px`;
    floatingToolbarEl.classList.add("show");
  }

  function hideFloatingToolbar() {
    if (floatingToolbarEl) {
      floatingToolbarEl.classList.remove("show");
    }
  }

  /**
   * Applies highlight or underline class to current selection
   */
  function applyHighlight(className) {
    if (!currentSelectionRange) return;

    try {
      const span = document.createElement("span");
      span.className = className;
      span.setAttribute("data-annotation", className);
      currentSelectionRange.surroundContents(span);
      window.getSelection().removeAllRanges();
      hideFloatingToolbar();
      saveCurrentPassageAnnotations();
    } catch (e) {
      console.warn("Complex selection highlighting simplified:", e);
    }
  }

  function clearHighlightSelection() {
    if (!currentSelectionRange) return;
    const parent = currentSelectionRange.commonAncestorContainer.parentElement;
    if (parent && (parent.classList.contains("highlight-yellow") || parent.classList.contains("highlight-green") || parent.classList.contains("highlight-cyan") || parent.classList.contains("annotated-underline"))) {
      const text = document.createTextNode(parent.textContent);
      parent.parentNode.replaceChild(text, parent);
    }
    window.getSelection().removeAllRanges();
    hideFloatingToolbar();
    saveCurrentPassageAnnotations();
  }

  function attachNoteToSelection() {
    const selectedText = currentSelectionRange ? currentSelectionRange.toString().trim() : "";
    hideFloatingToolbar();
    openNotepadDrawer();
    const input = document.getElementById("notepad-title-input");
    const content = document.getElementById("notepad-content-input");
    if (input && selectedText) {
      input.value = `Note: "${selectedText.slice(0, 30)}..."`;
    }
    if (content && selectedText) {
      content.value = `Selected text: "${selectedText}"\n\nNotes:\n`;
    }
  }

  function saveCurrentPassageAnnotations() {
    if (!activePassageKey) return;
    const pane = document.querySelector(".passage-body, .grammar-passage-box");
    if (pane) {
      StorageManager.saveAnnotations(activePassageKey, pane.innerHTML);
    }
  }

  function restorePassageAnnotations(passageKey) {
    activePassageKey = passageKey;
    const savedHTML = StorageManager.getAnnotations(passageKey);
    const pane = document.querySelector(".passage-body, .grammar-passage-box");
    if (pane) {
      if (savedHTML && savedHTML.length > 0) {
        pane.innerHTML = savedHTML;
      }
      pane.style.fontSize = `${passageFontSize}rem`;
    }
  }

  /**
   * Passage Zoom Controls
   */
  function adjustPassageFont(delta) {
    passageFontSize = Math.max(0.85, Math.min(1.45, passageFontSize + delta));
    const panes = document.querySelectorAll(".passage-body, .grammar-passage-box");
    panes.forEach(p => p.style.fontSize = `${passageFontSize}rem`);
  }

  let searchQuery = "";

  /**
   * Notepad / Scratchpad Drawer UI
   */
  function setupNotepadDrawer() {
    if (document.getElementById("student-notepad-drawer")) return;

    const drawer = document.createElement("div");
    drawer.id = "student-notepad-drawer";
    drawer.className = "student-notepad-drawer";
    drawer.innerHTML = `
      <div class="notepad-header">
        <div class="notepad-title">
          <span>📝</span>
          <h3>Öğrenci Çalışma Notları (Scratchpad)</h3>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button class="btn btn-secondary btn-small" title="Notları İndir (Export)" onclick="StudentTools.exportNotesMarkdown()">📥 İndir</button>
          <button class="notepad-close-btn" onclick="StudentTools.closeNotepadDrawer()">✕</button>
        </div>
      </div>

      <!-- Quick Template Inserters -->
      <div class="notepad-templates-bar">
        <span class="templates-label">⚡ Şablonlar:</span>
        <button class="template-pill-btn" onclick="StudentTools.insertTemplate('trap')">⚠️ Tuzak Analizi</button>
        <button class="template-pill-btn" onclick="StudentTools.insertTemplate('vocab')">📖 Kelime & False Friend</button>
        <button class="template-pill-btn" onclick="StudentTools.insertTemplate('grammar')">🧱 Dilbilgisi Kuralı</button>
      </div>

      <div class="notepad-new-note-box">
        <input type="text" id="notepad-title-input" placeholder="Not başlığı (örn. Qualify kuralı, FANBOYS formülü)..." />
        <textarea id="notepad-content-input" placeholder="Kendi notlarınızı, düşülen tuzakları ve formülleri buraya yazın..." rows="4"></textarea>
        <div class="notepad-actions-row">
          <select id="notepad-tag-select">
            <option value="General">🏷️ Genel Strateji</option>
            <option value="Vocabulary">📖 Kelime & False Friends</option>
            <option value="Grammar">🧱 Dilbilgisi Kuralları</option>
            <option value="Traps">⚠️ Dikkat Edilecek Tuzaklar</option>
          </select>
          <button class="btn btn-accent btn-small" onclick="StudentTools.saveNewNote()">
            💾 Notu Kaydet
          </button>
        </div>
      </div>

      <div class="notepad-search-bar">
        <input type="text" id="notepad-search-input" placeholder="Notlarda ara..." oninput="StudentTools.searchNotes(this.value)" />
      </div>

      <div class="notepad-filters-row" id="notepad-filters-container">
        <button class="filter-pill ${activeTagFilter === 'ALL' ? 'active' : ''}" data-tag="ALL" onclick="StudentTools.filterNotes('ALL')">Tümü</button>
        <button class="filter-pill ${activeTagFilter === 'General' ? 'active' : ''}" data-tag="General" onclick="StudentTools.filterNotes('General')">Strateji</button>
        <button class="filter-pill ${activeTagFilter === 'Vocabulary' ? 'active' : ''}" data-tag="Vocabulary" onclick="StudentTools.filterNotes('Vocabulary')">Kelime</button>
        <button class="filter-pill ${activeTagFilter === 'Grammar' ? 'active' : ''}" data-tag="Grammar" onclick="StudentTools.filterNotes('Grammar')">Dilbilgisi</button>
        <button class="filter-pill ${activeTagFilter === 'Traps' ? 'active' : ''}" data-tag="Traps" onclick="StudentTools.filterNotes('Traps')">Tuzaklar</button>
      </div>

      <div class="notepad-notes-list" id="notepad-notes-container"></div>
    `;
    document.body.appendChild(drawer);
  }

  function insertTemplate(type) {
    const titleInput = document.getElementById("notepad-title-input");
    const contentInput = document.getElementById("notepad-content-input");
    const tagSelect = document.getElementById("notepad-tag-select");

    if (type === "trap") {
      if (titleInput) titleInput.value = "⚠️ Tuzak Notu: [Tuzak Adı]";
      if (contentInput) contentInput.value = "Düşülen Hata: \nNeden Düştüm: \nBir Dahaki Sefere Stratejim: Metindeki sınırlayıcı (qualifier) ifadelere odaklan.";
      if (tagSelect) tagSelect.value = "Traps";
    } else if (type === "vocab") {
      if (titleInput) titleInput.value = "📖 SAT Kelimesi: [Kelime]";
      if (contentInput) contentInput.value = "Kelime: \nTürkçe Anlamı: \nSAT Akademik Anlamı / Yanıltıcı Algı (False Friend): \nÖrnek Cümle: ";
      if (tagSelect) tagSelect.value = "Vocabulary";
    } else if (type === "grammar") {
      if (titleInput) titleInput.value = "🧱 Dilbilgisi Formülü: [Kural]";
      if (contentInput) contentInput.value = "Kural: \nFormül: [Bağımsız Cümle] + [Noktalı Virgül / FANBOYS] + [Bağımsız Cümle]\nSık Yapılan Hata: ";
      if (tagSelect) tagSelect.value = "Grammar";
    }
  }

  function searchNotes(query) {
    searchQuery = (query || "").toLowerCase().trim();
    renderNotesList();
  }

  function filterNotes(tag) {
    activeTagFilter = tag;
    const filterContainer = document.getElementById("notepad-filters-container");
    if (filterContainer) {
      filterContainer.querySelectorAll(".filter-pill").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-tag") === tag);
      });
    }
    renderNotesList();
  }

  function openNotepadDrawer() {
    const drawer = document.getElementById("student-notepad-drawer");
    if (drawer) {
      drawer.classList.add("open");
      renderNotesList();
    }
  }

  function closeNotepadDrawer() {
    const drawer = document.getElementById("student-notepad-drawer");
    if (drawer) drawer.classList.remove("open");
  }

  function toggleNotepadDrawer() {
    const drawer = document.getElementById("student-notepad-drawer");
    if (drawer && drawer.classList.contains("open")) {
      closeNotepadDrawer();
    } else {
      openNotepadDrawer();
    }
  }

  function saveNewNote() {
    const titleInput = document.getElementById("notepad-title-input");
    const contentInput = document.getElementById("notepad-content-input");
    const tagSelect = document.getElementById("notepad-tag-select");

    const title = titleInput ? titleInput.value.trim() : "";
    const content = contentInput ? contentInput.value.trim() : "";
    const tag = tagSelect ? tagSelect.value : "General";

    if (!content && !title) return;

    StorageManager.saveNote(null, title || "Ders Notu", content, tag);

    if (titleInput) titleInput.value = "";
    if (contentInput) contentInput.value = "";

    renderNotesList();
  }

  function renderNotesList() {
    const container = document.getElementById("notepad-notes-container");
    if (!container) return;

    let notes = StorageManager.getNotes();
    if (activeTagFilter !== "ALL") {
      notes = notes.filter(n => n.tag === activeTagFilter);
    }
    if (searchQuery) {
      notes = notes.filter(n => 
        (n.title && n.title.toLowerCase().includes(searchQuery)) ||
        (n.content && n.content.toLowerCase().includes(searchQuery)) ||
        (n.tag && n.tag.toLowerCase().includes(searchQuery))
      );
    }

    if (notes.length === 0) {
      container.innerHTML = `
        <div class="notepad-empty-state">
          <span>🗒️</span>
          <p>${searchQuery ? 'Aramanıza uygun not bulunamadı.' : 'Henüz kayıtlı notunuz yok. Yukarıdaki kutudan soru ipuçları veya kelime notları ekleyin.'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = notes.map(note => `
      <div class="student-note-card">
        <div class="note-card-header">
          <span class="note-tag-badge tag-${note.tag.toLowerCase()}">${note.tag}</span>
          <span class="note-date">${new Date(note.updatedAt).toLocaleDateString("tr-TR", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
          <button class="note-delete-btn" onclick="StudentTools.deleteNote('${note.id}')" title="Notu Sil">✕</button>
        </div>
        <h4 class="note-card-title">${note.title}</h4>
        <p class="note-card-body">${note.content.replace(/\n/g, '<br>')}</p>
      </div>
    `).join('');
  }

  function deleteNote(noteId) {
    StorageManager.deleteNote(noteId);
    renderNotesList();
  }

  function exportNotesMarkdown() {
    const notes = StorageManager.getNotes();
    if (notes.length === 0) {
      alert("Dışa aktarılacak kayıtlı çalışma notu bulunamadı.");
      return;
    }

    let md = `# SAT Reading & Writing Academy — Öğrenci Çalışma Notları\nOluşturulma Tarihi: ${new Date().toLocaleDateString('tr-TR')}\n\n`;
    notes.forEach((n, idx) => {
      md += `### ${idx + 1}. [${n.tag}] ${n.title}\n*Tarih: ${new Date(n.updatedAt).toLocaleString('tr-TR')}*\n\n${n.content}\n\n---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SAT_Calisma_Notlari_${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return {
    init,
    applyHighlight,
    clearHighlightSelection,
    attachNoteToSelection,
    restorePassageAnnotations,
    saveCurrentPassageAnnotations,
    adjustPassageFont,
    openNotepadDrawer,
    closeNotepadDrawer,
    toggleNotepadDrawer,
    saveNewNote,
    deleteNote,
    filterNotes,
    searchNotes,
    insertTemplate,
    exportNotesMarkdown
  };
})();
