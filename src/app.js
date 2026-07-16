(function () {
  "use strict";

  const app = document.getElementById("app");
  if (!app) return;

  // Callback global para el fallback en cascada de imágenes
  window.handleImageError = function(img) {
    const fallbacksRaw = img.dataset.fallbacks;
    if (!fallbacksRaw) {
      img.style.display = 'none';
      if (img.nextElementSibling) {
        img.nextElementSibling.style.display = 'flex';
      }
      return;
    }
    
    try {
      const fallbacks = JSON.parse(fallbacksRaw);
      if (fallbacks && fallbacks.length > 0) {
        const nextUrl = fallbacks.shift();
        img.dataset.fallbacks = JSON.stringify(fallbacks);
        img.src = `https://images.weserv.nl/?url=${encodeURIComponent(nextUrl)}`;
      } else {
        img.style.display = 'none';
        if (img.nextElementSibling) {
          img.nextElementSibling.style.display = 'flex';
        }
      }
    } catch(e) {
      img.style.display = 'none';
      if (img.nextElementSibling) {
        img.nextElementSibling.style.display = 'flex';
      }
    }
  };

  const data = window.HOCG_DATA;
  const STORAGE_KEY = "hocg-analista-decks-v1";

  // Guardar copia de las cartas originales
  window.HOCG_DATA_ORIGINAL_CARDS = [...data.cards];

  // Cargar y fusionar cartas personalizadas
  let customCards = [];
  try {
    const rawCustom = localStorage.getItem("hocg-custom-cards");
    if (rawCustom) {
      customCards = JSON.parse(rawCustom);
      customCards.forEach((c) => {
        const idx = data.cards.findIndex((orig) => orig.number === c.number);
        if (idx !== -1) {
          data.cards[idx] = c;
        } else {
          data.cards.push(c);
        }
      });
    }
  } catch (error) {
    console.warn("No se pudieron cargar cartas personalizadas de localStorage", error);
  }

  // Lupa de princesa (Princess Lens SVG)
  const getPrincessLens = (size = 24) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100" class="princess-lens" style="transition: transform 0.3s ease;">
      <defs>
        <linearGradient id="lensEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bded"/>
          <stop offset="50%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#ff3366"/>
        </linearGradient>
        <radialGradient id="lensGlass" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.9)"/>
          <stop offset="50%" stop-color="rgba(137,207,240,0.4)"/>
          <stop offset="100%" stop-color="rgba(255,51,102,0.2)"/>
        </radialGradient>
        <linearGradient id="goldStaff" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffe259"/>
          <stop offset="100%" stop-color="#ffa751"/>
        </linearGradient>
      </defs>
      <!-- Handle -->
      <path d="M 58 58 L 82 82" stroke="url(#goldStaff)" stroke-width="8" stroke-linecap="round"/>
      <!-- Handle gem -->
      <circle cx="82" cy="82" r="6" fill="#ff3366"/>
      <circle cx="84" cy="80" r="2" fill="#fff"/>
      <!-- Bow -->
      <path d="M 58 58 Q 50 35 75 40 Q 80 55 58 58 Z" fill="#ff3366" opacity="0.9"/>
      <path d="M 58 58 Q 35 50 40 75 Q 55 80 58 58 Z" fill="#38bded" opacity="0.9"/>
      <circle cx="58" cy="58" r="5" fill="#ffe259"/>
      <!-- Lens Frame -->
      <circle cx="42" cy="42" r="26" fill="url(#lensGlass)" stroke="url(#lensEdge)" stroke-width="6"/>
      <!-- Sparkles -->
      <path d="M 18 18 Q 22 25 29 29 Q 22 33 18 40 Q 14 33 7 29 Q 14 25 18 18" fill="#ffe259"/>
      <circle cx="75" cy="25" r="3" fill="#38bded"/>
      <circle cx="25" cy="75" r="2" fill="#ff3366"/>
    </svg>
  `;

  const tabs = [
    ["dashboard", "Panel"],
    ["library", "Cartas"],
    ["builder", "Builder"],
    ["analysis", "Analisis"],
    ["compare", "Comparar"],
    ["importer", "Importar"],
    ["gacha", "Sobres"],
    ["audit", "Cambios"],
  ];

  const tabThemes = {
    dashboard: "suisei",
    library: "calliope",
    builder: "ayame",
    analysis: "raora",
    compare: "hololive",
    importer: "hololive",
    gacha: "pekoradom",
    album: "hololive",
    audit: "hololive",
  };

  const tabLabels = {
    dashboard: "Panel — Hoshimachi Suisei ☄️",
    library: "Catálogo — Mori Calliope 💀",
    builder: "Constructor — Nakiri Ayame 👹",
    analysis: "Análisis — Raora Panthera 🐆",
    compare: "Comparar Mazos",
    importer: "Importar Cartas",
    gacha: "Gacha Simulator — Usada Pekora 👯‍♀️",
    album: "Álbum de Colección",
    audit: "Registro de Cambios",
  };

  const colorMap = {
    White: "#1e293b",
    Red: "#7f1d1d",
    Blue: "#1e3a8a",
    Green: "#064e3b",
    Yellow: "#78350f",
    Purple: "#581c87",
    Neutral: "#334155",
  };

  function createStarEffect(x, y) {
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("div");
      star.className = "click-star";
      star.textContent = "⭐";
      star.style.left = (x - 12) + "px"; // Centrar aprox
      star.style.top = (y - 12) + "px";
      star.style.setProperty("--tx", (Math.random() * 80 - 40) + "px");
      star.style.setProperty("--ty", (Math.random() * -80 - 20) + "px");
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 600);
    }
  }

  const state = loadState();

  render();

  app.addEventListener("click", (event) => {
    // Modal overlay click interception
    if (event.target.id === "card-modal-overlay") {
      closeCardModal();
      return;
    }

    const target = event.target.closest("[data-action]") || event.target.closest(".home-btn-nav");
    if (!target) return;

    if (target.classList.contains("home-btn-nav") || (target.dataset.action === "tab" && target.dataset.id === "home")) {
      createStarEffect(event.clientX, event.clientY);
    }
    
    const action = target.dataset.action;
    if (!action) return;

    if (action === "close-card-modal") {
      closeCardModal();
      return;
    }
    
    // Play SFX if available
    if (window.SFX) {
      if (action === "add-card") {
        window.SFX.playCardAdd();
      } else if (action === "select-card") {
        window.SFX.playCardReveal();
      } else {
        window.SFX.playClick();
      }
    }

    const id = target.dataset.id;
    const zone = target.dataset.zone;
    const artIndex = Number(target.dataset.art || "0");

    if (action === "tab") {
      state.tab = id;
      state.selectedCard = null;
      if (id === "gacha") {
        state.gacha.opening = false;
        state.gacha.results = [];
        state.gacha.view = "lobby";
        saveState();
      }
      render();
      return;
    }

    if (action === "open-pack") {
      const setId = target.dataset.set;
      const amount = parseInt(target.dataset.amount, 10);
      openGachaPack(setId, amount);
      return;
    }

    if (action === "select-gacha-set") {
      state.gacha.selectedPack = id;
      state.gacha.view = "detail";
      state.gacha.results = [];
      saveState();
      render();
      return;
    }

    if (action === "back-gacha-lobby") {
      state.gacha.view = "lobby";
      state.gacha.results = [];
      saveState();
      render();
      return;
    }

    if (action === "clear-gacha") {
      state.gacha.results = [];
      state.gacha.view = "detail";
      saveState();
      render();
      return;
    }

    if (action === "select-card") {
      state.selectedCard = id;
      state.selectedArtIdx = 0;
      render();
      return;
    }

    if (action === "next-hit") {
      advanceHitReveal();
      return;
    }

    if (action === "close-detail") {
      state.selectedCard = null;
      render();
      return;
    }

    if (action === "view-card-gacha") {
      state.tab = "catalog";
      state.filters.search = ""; 
      state.selectedCard = id;
      state.selectedArtIdx = 0;
      render();
      window.scrollTo(0, 0);
      return;
    }

    if (action === "open-card-modal") {
      openCardModal(id, target.dataset.artidx || 0);
      return;
    }

    if (action === "salvage-card") {
      const cardId = target.dataset.id;
      if (cardId) salvageCard(cardId);
      return;
    }


    if (action === "select-art") {
      state.selectedArtIdx = artIndex;
      render();
      return;
    }

    if (action === "toggle-catalog-detail") {
      state.ui.catalogDetailMinimized = !state.ui.catalogDetailMinimized;
      saveState();
      render();
      return;
    }

    if (action === "add-card") {
      addCard(id, zone, artIndex);
      saveState();
      render();
      return;
    }

    if (action === "add-card-inventory") {
      const card = getCard(id);
      if (card) {
        let autoZone = "main";
        if (card.type === "Oshi") autoZone = "oshi";
        else if (card.type === "Cheer") autoZone = "cheer";
        addCard(id, autoZone, 0);
        saveState();
        render();
      }
      return;
    }

    if (action === "qty") {
      changeQuantity(zone, target.dataset.key, Number(target.dataset.delta));
      saveState();
      render();
      return;
    }

    if (action === "remove") {
      removeCard(zone, target.dataset.key);
      saveState();
      render();
      return;
    }

    if (action === "load-more-catalog") {
      state.ui.catalogPage = (state.ui.catalogPage || 1) + 1;
      saveState();
      render();
      return;
    }

    if (action === "new-deck") {
      const deck = createDeck("Nuevo deck");
      state.decks.unshift(deck);
      state.activeDeckId = deck.id;
      saveState();
      render();
      return;
    }

    if (action === "duplicate-deck") {
      const source = activeDeck();
      const deck = JSON.parse(JSON.stringify(source));
      deck.id = makeId();
      deck.name = `${source.name} copia`;
      deck.createdAt = new Date().toISOString();
      deck.updatedAt = deck.createdAt;
      state.decks.unshift(deck);
      state.activeDeckId = deck.id;
      saveState();
      render();
      return;
    }

    if (action === "delete-deck") {
      if (state.decks.length === 1) return;
      if (!window.confirm("Eliminar este mazo guardado?")) return;
      state.decks = state.decks.filter((deck) => deck.id !== state.activeDeckId);
      state.activeDeckId = state.decks[0].id;
      saveState();
      render();
      return;
    }

    if (action === "export-json") {
      state.exportText = JSON.stringify(toHoloDelta(activeDeck()), null, 2);
      render();
      return;
    }

    if (action === "export-text") {
      state.exportText = toPlainText(activeDeck());
      render();
      return;
    }

    if (action === "import-any") {
      const text = state.importText.trim();
      if (!text) {
        state.importMessage = "Por favor, pega el mazo antes de importar.";
        render();
        return;
      }
      if (text.startsWith("{") || text.startsWith("[")) {
        importJson();
      } else {
        try {
          const deck = fromPlainText(text);
          state.decks.unshift(deck);
          state.activeDeckId = deck.id;
          state.importMessage = `Importado: ${deck.name}`;
          state.importText = "";
        } catch (error) {
          state.importMessage = `No se pudo importar: ${error.message}`;
        }
      }
      saveState();
      render();
      return;
    }

    if (action === "download-json") {
      downloadJson();
      return;
    }

    if (action === "import-json") {
      importJson();
      saveState();
      render();
      return;
    }

    if (action === "clear-import") {
      state.importText = "";
      state.importMessage = "";
      render();
      return;
    }

    if (action === "parse-text") {
      const txt = document.getElementById("importer-input")?.value || "";
      if (!txt.trim()) {
        state.importerMessage = "Por favor escribe o pega algún texto.";
        render();
        return;
      }
      const parsed = parseCardText(txt);
      if (parsed.length === 0) {
        state.importerMessage = "No se detectaron cartas. Asegúrate de incluir números de carta tipo hBP01-001.";
      } else {
        state.parsedCards = parsed;
        state.importerMessage = `Se detectaron ${parsed.length} carta(s) potenciales.`;
      }
      render();
      return;
    }

    if (action === "clear-importer") {
      const txtarea = document.getElementById("importer-input");
      if (txtarea) txtarea.value = "";
      state.importerMessage = "";
      state.parsedCards = [];
      render();
      return;
    }

    if (action === "cancel-parsed") {
      state.parsedCards = [];
      state.importerMessage = "";
      render();
      return;
    }

    if (action === "save-parsed") {
      state.parsedCards.forEach(card => {
        const existingIdx = customCards.findIndex(c => c.number === card.number);
        if (existingIdx !== -1) {
          customCards[existingIdx] = card;
        } else {
          customCards.push(card);
        }
        
        const libIdx = data.cards.findIndex(c => c.number === card.number);
        if (libIdx !== -1) {
          data.cards[libIdx] = card;
        } else {
          data.cards.push(card);
        }
      });
      localStorage.setItem("hocg-custom-cards", JSON.stringify(customCards));
      state.importerMessage = `¡Se importaron ${state.parsedCards.length} carta(s) correctamente!`;
      state.parsedCards = [];
      saveState();
      render();
      return;
    }

    if (action === "delete-custom-card") {
      const cardNum = id;
      customCards = customCards.filter(c => c.number !== cardNum);
      localStorage.setItem("hocg-custom-cards", JSON.stringify(customCards));
      
      data.cards = data.cards.filter(c => c.number !== cardNum);
      const original = window.HOCG_DATA_ORIGINAL_CARDS.find(orig => orig.number === cardNum);
      if (original) {
        data.cards.push(original);
      }
      
      state.importerMessage = `Se eliminó la carta ${cardNum}.`;
      render();
      return;
    }

    if (action === "clear-all-custom") {
      if (!window.confirm("¿Estás seguro de que quieres eliminar TODAS las cartas personalizadas?")) return;
      customCards = [];
      localStorage.removeItem("hocg-custom-cards");
      data.cards = [...window.HOCG_DATA_ORIGINAL_CARDS];
      state.importerMessage = "Todas las cartas personalizadas fueron eliminadas.";
      render();
      return;
    }
  });

  let searchTimeout = null;

  app.addEventListener("input", (event) => {
    const target = event.target;
    const action = target.dataset.input;

    if (target.classList.contains("preview-edit-input")) {
      const idx = Number(target.dataset.idx);
      const field = target.dataset.field;
      const card = state.parsedCards[idx];
      if (card) {
        if (field === "number") {
          card.number = target.value.trim().toUpperCase();
          card.id = card.number;
        } else if (field === "name") {
          card.name = target.value;
        } else if (field === "bloom") {
          card.bloom = target.value;
        } else if (field === "imageUrl") {
          card.imageUrl = target.value;
        } else if (field === "value") {
          const val = Number(target.value) || 0;
          if (card.type === "Oshi") card.life = val;
          else if (card.type === "holomem") card.hp = val;
        }
      }
      return;
    }

    if (!action) return;

    if (action === "search") {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        state.filters.search = target.value;
        state.ui.catalogPage = 1;
        const gridEl = document.getElementById("catalog-card-grid");
        if (gridEl) {
          const cards = filteredCards();
          gridEl.innerHTML = cards.slice(0, 50 * state.ui.catalogPage).map(renderCard).join("") || `<div class="empty">No hay cartas con esos filtros.</div>`;
          // Rerender entirely to update the load more button properly
          if (state.tab === "catalog") {
            render();
          }
        }
      }, 250);
      return;
    }

    if (action === "deck-name") {
      const deck = activeDeck();
      deck.name = target.value || "Sin nombre";
      deck.updatedAt = new Date().toISOString();
      saveState();
      renderTopOnly();
      return;
    }

    if (action === "deck-notes") {
      const deck = activeDeck();
      deck.notes = target.value;
      deck.updatedAt = new Date().toISOString();
      saveState();
      return;
    }

    if (action === "import-text") {
      state.importText = target.value;
      return;
    }
    
    if (action === "builder-search") {
      state.builderSearch = target.value;
      const listEl = document.getElementById("builder-quick-cards");
      if (listEl) {
        listEl.innerHTML = renderQuickCardItems(target.value);
      }
      return;
    }
  });

  app.addEventListener("change", (event) => {
    const target = event.target;
    const action = target.dataset.change;

    if (action === "toggle-collection-filter") {
      state.gacha.filterCollection = target.checked;
      saveState();
      
      // Update quick card list without full render
      const listEl = document.getElementById("builder-quick-cards");
      if (listEl) {
        listEl.innerHTML = renderQuickCardItems(state.builderSearch || "");
      }
      return;
    }

    if (target.classList.contains("preview-edit-input")) {
      const idx = Number(target.dataset.idx);
      const field = target.dataset.field;
      const card = state.parsedCards[idx];
      if (card) {
        if (field === "type") {
          card.type = target.value;
          if (card.type === "Oshi" && !card.life) {
            card.life = 5;
            card.hp = "";
          }
          if (card.type === "holomem" && !card.hp) {
            card.hp = 100;
            card.life = "";
          }
          render();
        } else if (field === "color") {
          card.color = target.value;
        }
      }
      return;
    }

    if (!action) return;

    if (action === "filter-type") {
      state.filters.type = target.value;
      state.ui.catalogPage = 1;
      render();
      return;
    }

    if (action === "filter-color") {
      state.filters.color = target.value;
      state.ui.catalogPage = 1;
      render();
      return;
    }

    if (action === "filter-set") {
      state.filters.set = target.value;
      state.ui.catalogPage = 1;
      render();
      return;
    }

    if (action === "active-deck") {
      state.activeDeckId = target.value;
      if (state.compareA === state.compareB) {
        state.compareB = state.decks.find((deck) => deck.id !== state.compareA)?.id || state.compareA;
      }
      saveState();
      render();
      return;
    }

    if (action === "compare-a") {
      state.compareA = target.value;
      saveState();
      render();
      return;
    }

    if (action === "compare-b") {
      state.compareB = target.value;
      saveState();
      render();
    }
  });

  // ==========================================
  // SOPORTE DE DRAG AND DROP (ARRASTRAR Y SOLTAR)
  // ==========================================
  
  function closeCardModal() {
    const overlay = document.getElementById("card-modal-overlay");
    if (overlay) {
      overlay.classList.remove("active");
      setTimeout(() => overlay.remove(), 300); // Wait for fade out
    }
  }

  function openCardModal(cardId, artIndex = 0) {
    const card = getCard(cardId);
    if (!card) return;

    // Temporarily set state for renderCardDetail to use
    const prevIdx = state.selectedArtIdx;
    state.selectedArtIdx = parseInt(artIndex, 10);
    
    const detailHtml = renderCardDetail(card);
    
    // Restore state
    state.selectedArtIdx = prevIdx;

    let overlay = document.getElementById("card-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "card-modal-overlay";
      overlay.className = "modal-overlay";
      const appContainer = document.getElementById("app");
      if (appContainer) appContainer.appendChild(overlay);
      else document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div class="modal-content">
        <button class="modal-close-btn" data-action="close-card-modal">&times;</button>
        ${detailHtml}
      </div>
    `;

    // Trigger reflow for animation
    void overlay.offsetWidth;
    overlay.classList.add("active");
  }

  app.addEventListener("dragstart", (event) => {
    const cardEl = event.target.closest("[draggable='true']");
    if (!cardEl) return;
    
    const cardId = cardEl.dataset.id;
    if (cardId) {
      event.dataTransfer.setData("text/plain", cardId);
      event.dataTransfer.effectAllowed = "copy";
    }
  });

  app.addEventListener("dragover", (event) => {
    const dropZone = event.target.closest(".drop-zone");
    if (!dropZone) return;
    event.preventDefault();
    dropZone.classList.add("drag-over");
  });

  app.addEventListener("dragleave", (event) => {
    const dropZone = event.target.closest(".drop-zone");
    if (!dropZone) return;
    dropZone.classList.remove("drag-over");
  });

  // --- 3D Tilt Effect Logic ---
  app.addEventListener("mousemove", (e) => {
    const wrapper = e.target.closest('.card-3d-wrapper');
    if (!wrapper) return;
    
    const content = wrapper.querySelector('.card-3d-content');
    const foil = wrapper.querySelector('.card-foil');
    if (!content) return;
    
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;
    
    const maxDegree = 15;
    const rotateX = -normY * maxDegree;
    const rotateY = normX * maxDegree;
    
    content.style.transition = 'none';
    content.style.transform = `perspective(1000px) scale3d(1.05, 1.05, 1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    if (foil) {
      const bgX = (x / rect.width) * 100;
      const bgY = (y / rect.height) * 100;
      foil.style.backgroundPosition = `${bgX}% ${bgY}%`;
      foil.style.opacity = '0.8';
    }
  });

  app.addEventListener("mouseout", (e) => {
    const wrapper = e.target.closest('.card-3d-wrapper');
    if (!wrapper) return;

    // Ensure we are actually leaving the wrapper and not just entering a child element
    const related = e.relatedTarget;
    if (related && wrapper.contains(related)) return;

    const content = wrapper.querySelector('.card-3d-content');
    if (content) {
      content.style.transition = 'transform 0.3s ease-out';
      content.style.transform = 'perspective(1000px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)';
    }
    const foil = wrapper.querySelector('.card-foil');
    if (foil) foil.style.opacity = '0';
  });

  document.addEventListener("drop", (event) => {
    const dropZone = event.target.closest(".drop-zone");
    if (!dropZone) return;
    event.preventDefault();
    dropZone.classList.remove("drag-over");
    
    const cardId = event.dataTransfer.getData("text/plain");
    const zone = dropZone.dataset.dropZone;
    if (cardId && zone) {
      addCard(cardId, zone);
      saveState();
      render();
    }
  });

  function loadState() {
    const fallbackDeck = demoDeck();
    const base = {
      tab: "home",
      activeDeckId: fallbackDeck.id,
      decks: [fallbackDeck],
      selectedCard: null,
      filters: { search: "", type: "All", color: "All", set: "All" },
      ui: { catalogPage: 1 },
      compareA: fallbackDeck.id,
      compareB: fallbackDeck.id,
      importText: "",
      importMessage: "",
      exportText: "",
      importerText: "",
      importerMessage: "",
      parsedCards: [],
      builderSearch: "",
      collection: {}, // id: quantity
      gacha: {
        selectedPack: "hBP01",
        view: "lobby",
        opening: false,
        results: [],
        filterCollection: false,
        sparkles: 0,
        hitQueue: [],
        currentHit: null
      }
    };

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const parsed = JSON.parse(raw);
      const decks = Array.isArray(parsed.decks) && parsed.decks.length ? parsed.decks : [fallbackDeck];
      return {
        ...base,
        ...parsed,
        tab: "home",
        selectedCard: null,
        ui: { ...base.ui, ...(parsed.ui || {}) },
        decks,
        activeDeckId: decks.some((deck) => deck.id === parsed.activeDeckId)
          ? parsed.activeDeckId
          : decks[0].id,
        compareA: decks.some((deck) => deck.id === parsed.compareA) ? parsed.compareA : decks[0].id,
        compareB: decks.some((deck) => deck.id === parsed.compareB) ? parsed.compareB : decks[0].id,
        collection: parsed.collection || {},
        gacha: {
          ...base.gacha,
          ...(parsed.gacha || {}), // Recupera configuraciones (sparkles, filtros)
          view: "lobby",
          opening: false,
          results: []
        }
      };
    } catch (error) {
      console.warn("No se pudo leer localStorage; se inicia limpio.", error);
      return base;
    }
  }

  function saveState() {
    const safe = {
      activeDeckId: state.activeDeckId,
      decks: state.decks,
      selectedCard: state.selectedCard,
      filters: state.filters,
      compareA: state.compareA,
      compareB: state.compareB,
      collection: state.collection,
      gacha: state.gacha,
      ui: state.ui,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(safe));
  }

  function salvageCard(cardId) {
    const qty = state.collection[cardId] || 0;
    if (qty > 1) {
      state.collection[cardId] = qty - 1;
      
      const card = getCard(cardId);
      let sparklesEarned = 1; // Base amount
      if (card) {
        if (card.rarityClass === 'silver') sparklesEarned = 3;
        else if (card.rarityClass === 'gold' || card.rarityClass === 'platinum' || card.rarityClass === 'rainbow') sparklesEarned = 10;
      }
      
      state.gacha.sparkles = (state.gacha.sparkles || 0) + sparklesEarned;
      saveState();
      render();
    }
  }

  function createDeck(name) {
    const now = new Date().toISOString();
    return {
      id: makeId(),
      name,
      createdAt: now,
      updatedAt: now,
      oshi: null,
      main: {},
      cheer: {},
      notes: "",
    };
  }

  function demoDeck() {
    const deck = createDeck("Kanata Gen 4 demo");
    deck.oshi = { number: "hBP01-001", artIndex: 0 };
    deck.main = {
      [cardKey("hBP01-010", 0)]: 4,
      [cardKey("hBP01-014", 0)]: 3,
      [cardKey("hBP01-030", 0)]: 1,
      [cardKey("hSD01-016", 0)]: 4,
      [cardKey("hBP01-104", 0)]: 4,
      [cardKey("hBP01-105", 0)]: 3,
      [cardKey("hBP02-084", 0)]: 4,
      [cardKey("hBP05-080", 0)]: 4,
      [cardKey("hSD01-012", 0)]: 4,
    };
    deck.cheer = {
      [cardKey("hY01-001", 0)]: 16,
      [cardKey("hY01-004", 0)]: 4,
    };
    deck.notes =
      "Mazo de demostracion parcial. La base local es pequena, asi que la validacion marcara que faltan cartas para llegar a 50.";
    return deck;
  }

  function makeId() {
    return `deck-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function activeDeck() {
    return state.decks.find((deck) => deck.id === state.activeDeckId) || state.decks[0];
  }

  function getDeckById(id) {
    return state.decks.find((deck) => deck.id === id) || state.decks[0];
  }

  function cardKey(number, artIndex) {
    return `${number}@@${Number(artIndex || 0)}`;
  }

  function parseKey(key) {
    const [number, art] = String(key).split("@@");
    return { number, artIndex: Number(art || "0") };
  }

  function getCard(number) {
    return (
      data.cards.find((card) => card.id === number || card.number === number) || {
        id: number,
        number,
        name: `Carta no catalogada ${number}`,
        type: "Unknown",
        color: "Neutral",
        rarity: "Unknown",
        set: "Custom",
        tags: [],
        bloom: "",
        hp: "",
        text: "Carta importada",
        artIndex: 0,
        synergy: "Importa la base completa o agrega esta carta al catalogo para analizarla mejor.",
        market: [],
        sourceId: "manual-import",
        officialUrl: "https://en.hololive-official-cardgame.com/cardlist/",
      }
    );
  }

  function getCardImageUrl(card, artIndex = 0) {
    if (card.imageUrl) return card.imageUrl;
    const fallbacks = getCardImageFallbacks(card, artIndex);
    if (fallbacks.length > 0) {
      return `https://images.weserv.nl/?url=${encodeURIComponent(fallbacks[0])}`;
    }
    return "";
  }

  function getCardImageFallbacks(card, artIndex = 0) {
    if (card.imageUrl) return [];
    
    let num = String(card.number || "").trim();
    if (!num) return [];
    
    // Mapeo de Cheers lógicos de hBP01 a sus códigos reales de imagen hY01-hY06
    if (num === "hBP01-127") num = "hY01-001";
    if (num === "hBP01-128") num = "hY02-001";
    if (num === "hBP01-129") num = "hY03-001";
    if (num === "hBP01-130") num = "hY04-001";
    if (num === "hBP01-131") num = "hY05-001";
    if (num === "hBP01-132") num = "hY06-001";
    if (num === "hBP01-133") num = "hY01-001"; // Fallback para colorless
    
    const parts = num.split("-");
    if (parts.length < 2) return [];
    
    let folder = parts[0];
    
    // Si la carta es tipo Cheer (hY) pero pertenece a un Booster/Starter, su imagen suele estar en esa carpeta
    if (folder.startsWith("hY") && card.set) {
      if (card.set.includes("Booster Pack 1")) folder = "hBP01";
      else if (card.set.includes("Booster Pack 2")) folder = "hBP02";
      else if (card.set.includes("Booster Pack 3")) folder = "hBP03";
      else if (card.set.includes("Booster Pack 4")) folder = "hBP04";
      else if (card.set.includes("Start Deck 1")) folder = "hSD01";
      else if (card.set.includes("Start Deck 2")) folder = "hSD02";
      else if (card.set.includes("Start Deck 3")) folder = "hSD03";
    }
    
    let declaredRarity = String(card.rarity || "C").split("/")[0].trim();
    
    // Lista de sufijos comunes de rarezas para probar
    const suffixes = [declaredRarity, "C", "U", "R", "RR", "SR", "OSR", "OUR", "SEC", "P", ""];
    const uniqueSuffixes = [...new Set(suffixes)];
    
    const urls = [];
    
    // Priorizar el arte (sufijo) antes que el idioma. 
    // Es mejor mostrar el arte SEC en japonés que el arte base en inglés.
    uniqueSuffixes.forEach(s => {
      const suffixStr = s ? `_${s}` : "";
      
      // 1. Probar en subdominio inglés (EN_), carpeta de set
      urls.push(`https://en.hololive-official-cardgame.com/wp-content/images/cardlist/${folder}/EN_${num}${suffixStr}.png`);
      
      // 2. Probar en sitio japonés (sin EN_), carpeta de set
      urls.push(`https://hololive-official-cardgame.com/wp-content/images/cardlist/${folder}/${num}${suffixStr}.png`);
      
      // 3. Probar en subdominio inglés (EN_), carpeta COMMON
      urls.push(`https://en.hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/EN_${num}${suffixStr}.png`);
      
      // 4. Probar en sitio japonés (sin EN_), carpeta COMMON
      urls.push(`https://hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/${num}${suffixStr}.png`);
    });
    
    return urls;
  }

  function rarityClass(rarity) {
    const r = String(rarity || "C").toUpperCase().trim().split("/")[0].trim();
    if (r === "C") return "bronze";
    if (r === "U") return "silver";
    if (r === "R") return "gold";
    if (r === "RR" || r === "SR") return "platinum";
    if (r === "UR" || r === "OSR" || r === "OUR" || r === "SEC" || r === "P" || r === "SY") return "rainbow";
    return "bronze";
  }

  function getGachaFeaturedCards(setId, limit = 3) {
    const rarityOrder = { C: 0, U: 1, R: 2, RR: 3, SR: 4, OSR: 5, UR: 6, OUR: 7, SEC: 8 };
    const bestByCard = new Map();

    data.cards
      .filter((card) => card.number.startsWith(setId))
      .forEach((card) => {
        const candidate = { ...card, featuredArtIndex: card.artIndex || 0, featuredRarity: card.rarity };
        const previous = bestByCard.get(card.number);
        if (!previous || (rarityOrder[candidate.featuredRarity] ?? 0) > (rarityOrder[previous.featuredRarity] ?? 0)) {
          bestByCard.set(card.number, candidate);
        }
      });

    return [...bestByCard.values()]
      .sort((a, b) => {
        const aBoost = a.type === "Oshi" ? 100 : 0;
        const bBoost = b.type === "Oshi" ? 100 : 0;
        return (rarityOrder[b.featuredRarity] ?? 0) + bBoost - ((rarityOrder[a.featuredRarity] ?? 0) + aBoost);
      })
      .slice(0, limit);
  }

  // --- Carousel Logic ---
  let gachaCarouselIndex = 0;
  let gachaCarouselInterval = null;
  let gachaCarouselCards = [];

  function updateGachaCarousel() {
    const container = document.getElementById("gacha-carousel-container");
    const progress = document.getElementById("gacha-carousel-progress");
    if (!container || gachaCarouselCards.length === 0) return;

    container.classList.add("carousel-fade-out");
    
    setTimeout(() => {
      const displayCards = [];
      for (let i = 0; i < 3; i++) {
        displayCards.push(gachaCarouselCards[(gachaCarouselIndex + i) % gachaCarouselCards.length]);
      }

      container.innerHTML = displayCards.map((card, index) => `
        <button class="gacha-featured-card rarity-${rarityClass(card.featuredRarity)}" style="--feature-index:${index}; animation: none;" data-action="open-card-modal" data-id="${escapeAttr(card.id)}" data-artidx="${card.featuredArtIndex}" aria-label="Ver ${escapeAttr(card.name)}">
          ${renderCardFrame(card, card.featuredArtIndex, card.featuredRarity, true)}
          <span class="gacha-featured-rarity">${escapeHtml(card.featuredRarity)}</span>
          <span class="gacha-featured-name">${escapeHtml(card.name)}</span>
        </button>
      `).join("");

      container.classList.remove("carousel-fade-out");
      container.classList.add("carousel-fade-in");
      
      setTimeout(() => container.classList.remove("carousel-fade-in"), 500);

      gachaCarouselIndex = (gachaCarouselIndex + 3) % gachaCarouselCards.length;
    }, 500);
  }

  function initGachaCarousel(setId) {
    if (gachaCarouselInterval) {
      clearInterval(gachaCarouselInterval);
      gachaCarouselInterval = null;
    }
    gachaCarouselIndex = 0;
    
    const allHits = getGachaFeaturedCards(setId, 999);
    gachaCarouselCards = allHits.filter(c => 
      c.featuredRarity === "SEC" || 
      c.featuredRarity === "OUR" || 
      c.featuredRarity === "UR" || 
      c.featuredRarity === "SY" ||
      c.featuredRarity === "SR"
    );
    
    if (gachaCarouselCards.length <= 3) return;

    gachaCarouselIndex = 3; 
    gachaCarouselInterval = setInterval(() => {
      if (document.getElementById("gacha-carousel-container")) {
        updateGachaCarousel();
      } else {
        stopGachaCarousel();
      }
    }, 4000);
  }

  function stopGachaCarousel() {
    if (gachaCarouselInterval) {
      clearInterval(gachaCarouselInterval);
      gachaCarouselInterval = null;
    }
  }

  function addCard(number, zone, artIndex = 0) {
    const deck = activeDeck();
    const card = getCard(number);
    const key = cardKey(number, artIndex);

    // Limit check always enforces collection limits
    const owned = state.collection[card.id] || 0;
    let inDeck = 0;
    if (zone === "main") inDeck = deck.main[key] || 0;
    else if (zone === "cheer") inDeck = deck.cheer[key] || 0;
    else if (zone === "oshi") inDeck = deck.oshi && deck.oshi.number === number ? 1 : 0;
    
    if (inDeck >= owned) {
      state.importMessage = `No tienes más copias (máximo ${owned}) de ${card.name}.`;
      return;
    }

    if (zone === "oshi") {
      if (card.type !== "Oshi" && card.type !== "Unknown") {
        state.importMessage = "Solo una carta Oshi puede ir al slot Oshi.";
        return;
      }
      deck.oshi = { number, artIndex };
      deck.updatedAt = new Date().toISOString();
      return;
    }

    if (zone === "cheer") {
      if (card.type !== "Cheer" && card.type !== "Unknown") {
        state.importMessage = "Solo cartas Cheer pueden ir al cheer deck.";
        return;
      }
      deck.cheer[key] = (deck.cheer[key] || 0) + 1;
      deck.updatedAt = new Date().toISOString();
      return;
    }

    if (card.type === "Oshi" || card.type === "Cheer") {
      state.importMessage = "El main deck solo acepta holomem y support.";
      return;
    }
    deck.main[key] = (deck.main[key] || 0) + 1;
    deck.updatedAt = new Date().toISOString();
  }

  function changeQuantity(zone, key, delta) {
    const deck = activeDeck();
    const list = zone === "cheer" ? deck.cheer : deck.main;
    if (!list[key]) return;
    list[key] += delta;
    if (list[key] <= 0) delete list[key];
    deck.updatedAt = new Date().toISOString();
  }

  function removeCard(zone, key) {
    const deck = activeDeck();
    if (zone === "oshi") {
      deck.oshi = null;
    } else if (zone === "cheer") {
      delete deck.cheer[key];
    } else {
      delete deck.main[key];
    }
    deck.updatedAt = new Date().toISOString();
  }

  function deckEntries(map) {
    return Object.entries(map || {}).map(([key, qty]) => ({
      key,
      qty,
      ...parseKey(key),
      card: getCard(parseKey(key).number),
    }));
  }

  function countTotal(map) {
    return Object.values(map || {}).reduce((sum, qty) => sum + Number(qty || 0), 0);
  }

  function aggregateByNumber(map) {
    return deckEntries(map).reduce((acc, entry) => {
      acc[entry.number] = (acc[entry.number] || 0) + entry.qty;
      return acc;
    }, {});
  }

  function validateDeck(deck) {
    const warnings = [];
    const mainTotal = countTotal(deck.main);
    const cheerTotal = countTotal(deck.cheer);

    if (!deck.oshi) warnings.push("Falta seleccionar 1 Oshi holomem.");
    if (mainTotal !== data.rules.mainDeckSize) {
      warnings.push(`Main deck tiene ${mainTotal}; debe tener ${data.rules.mainDeckSize}.`);
    }
    if (cheerTotal !== data.rules.cheerDeckSize) {
      warnings.push(`Cheer deck tiene ${cheerTotal}; debe tener ${data.rules.cheerDeckSize}.`);
    }

    deckEntries(deck.main).forEach((entry) => {
      if (entry.card.type === "Oshi") warnings.push(`${entry.card.number} es Oshi y no debe estar en main deck.`);
      if (entry.card.type === "Cheer") warnings.push(`${entry.card.number} es Cheer y no debe estar en main deck.`);
      if (entry.card.type === "Unknown") warnings.push(`${entry.card.number} no esta catalogada localmente.`);
    });

    deckEntries(deck.cheer).forEach((entry) => {
      if (entry.card.type !== "Cheer" && entry.card.type !== "Unknown") {
        warnings.push(`${entry.card.number} no es Cheer y no debe estar en cheer deck.`);
      }
    });

    const byNumber = aggregateByNumber(deck.main);
    Object.entries(byNumber).forEach(([number, qty]) => {
      const restricted = data.rules.activeRestricted.cards[number];
      const limit = restricted || data.rules.defaultCopyLimit;
      if (qty > limit) warnings.push(`${number} tiene ${qty} copias; limite actual: ${limit}.`);
    });

    // Validar Cobertura de Cheer
    const mainColors = new Set(deckEntries(deck.main).map(entry => entry.card.color).filter(c => c !== "Neutral"));
    const cheerColors = new Set(deckEntries(deck.cheer).map(entry => entry.card.color));
    
    mainColors.forEach(color => {
      if (!cheerColors.has(color)) {
        warnings.push(`Tu mazo principal tiene cartas de color ${color}, pero tu cheer deck no produce Cheer de ese color.`);
      }
    });

    return warnings;
  }

  function deckStats(deck) {
    const mainEntries = deckEntries(deck.main);
    const cheerEntries = deckEntries(deck.cheer);
    const colors = {};
    const tags = {};
    const blooms = {};
    const types = {};
    const supportSubtypes = { Item: 0, Event: 0, Staff: 0 };

    mainEntries.concat(cheerEntries).forEach((entry) => {
      colors[entry.card.color] = (colors[entry.card.color] || 0) + entry.qty;
      types[entry.card.type] = (types[entry.card.type] || 0) + entry.qty;
      if (entry.card.bloom) blooms[entry.card.bloom] = (blooms[entry.card.bloom] || 0) + entry.qty;
      (entry.card.tags || []).forEach((tag) => {
        tags[tag] = (tags[tag] || 0) + entry.qty;
      });
    });

    mainEntries.forEach(entry => {
      if (entry.card.type === "Support" && entry.card.tags) {
        if (entry.card.tags.includes("Item")) supportSubtypes.Item += entry.qty;
        else if (entry.card.tags.includes("Event")) supportSubtypes.Event += entry.qty;
        else if (entry.card.tags.includes("Staff")) supportSubtypes.Staff += entry.qty;
      }
    });

    return {
      oshi: deck.oshi ? getCard(deck.oshi.number) : null,
      mainTotal: countTotal(deck.main),
      cheerTotal: countTotal(deck.cheer),
      colors,
      tags,
      blooms,
      types,
      supportSubtypes,
      warnings: validateDeck(deck),
      mainEntries,
      cheerEntries,
    };
  }

  function analyzeDeck(deck) {
    const stats = deckStats(deck);
    const warnings = stats.warnings.length;
    const mainScore = clamp(100 - Math.abs(data.rules.mainDeckSize - stats.mainTotal) * 3 - warnings * 6);
    const cheerScore = clamp(100 - Math.abs(data.rules.cheerDeckSize - stats.cheerTotal) * 4);
    const consistencyCards = ["Draw", "Search", "Setup"].reduce((sum, tag) => sum + (stats.tags[tag] || 0), 0);
    const consistencyScore = clamp(consistencyCards * 8 + (stats.types.Support || 0) * 3);
    const curveScore = curveHealth(stats);
    const colorScore = colorHealth(stats);
    const archetypes = matchArchetypes(deck);
    const archetypeScore = archetypes.length ? archetypes[0].score : 0;

    const scores = [
      ["Estructura", Math.round((mainScore + cheerScore) / 2)],
      ["Color", colorScore],
      ["Curva Bloom", curveScore],
      ["Consistencia", consistencyScore],
      ["Arquetipo", archetypeScore],
    ];

    const advice = [];
    if (!stats.oshi) advice.push("Selecciona un Oshi antes de evaluar identidad de color y plan principal.");
    if (stats.mainTotal < 50) advice.push("Completa el main deck hasta 50 cartas antes de probar consistencia real.");
    if (stats.cheerTotal < 20) advice.push("Completa el cheer deck a 20; el analisis de color depende mucho de esa mezcla.");
    if ((stats.blooms.Debut || 0) < 8) advice.push("El mazo parece bajo en Debut holomem; revisa si puedes abrir stage de forma consistente.");
    if (consistencyCards < 8) advice.push("Considera mas cartas de draw/search/setup para encontrar debuts y piezas de bloom.");
    if (stats.oshi && stats.colors[stats.oshi.color] < 8) {
      advice.push(`Tu Oshi es ${stats.oshi.color}; el main deck tiene pocas cartas de ese color.`);
    }
    if (!advice.length) advice.push("La estructura base se ve razonable para empezar pruebas.");

    return { scores, advice, archetypes };
  }

  function curveHealth(stats) {
    const debut = stats.blooms.Debut || 0;
    const first = stats.blooms["1st"] || 0;
    const second = stats.blooms["2nd"] || 0;
    const spot = stats.blooms.Spot || 0;
    const baseline = debut * 5 + first * 4 + second * 3 + spot * 2;
    const balancePenalty = Math.abs(second - first) * 4;
    return clamp(baseline - balancePenalty);
  }

  function colorHealth(stats) {
    if (!stats.oshi) return 0;
    const oshiColor = stats.oshi.color;
    const mainColorCount = stats.colors[oshiColor] || 0;
    const cheerColorCount = stats.cheerEntries
      .filter((entry) => entry.card.color === oshiColor)
      .reduce((sum, entry) => sum + entry.qty, 0);
    const offColorCount = Object.entries(stats.colors)
      .filter(([color]) => !["Neutral", oshiColor].includes(color))
      .reduce((sum, [, qty]) => sum + qty, 0);
    return clamp(mainColorCount * 5 + cheerColorCount * 4 - offColorCount * 2);
  }

  function matchArchetypes(deck) {
    const keys = new Set([
      ...(deck.oshi ? [deck.oshi.number] : []),
      ...deckEntries(deck.main).map((entry) => entry.number),
      ...deckEntries(deck.cheer).map((entry) => entry.number),
    ]);
    return data.archetypes
      .map((arch) => {
        const matched = arch.keyCards.filter((number) => keys.has(number));
        const score = clamp(Math.round((matched.length / arch.keyCards.length) * 100));
        return { ...arch, matched, score };
      })
      .filter((arch) => arch.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  function clamp(value) {
    return Math.max(0, Math.min(100, Number(value) || 0));
  }

  function toHoloDelta(deck) {
    return {
      deckName: deck.name,
      oshi: deck.oshi ? [deck.oshi.number, deck.oshi.artIndex || 0] : ["", 0],
      deck: deckEntries(deck.main).map((entry) => [entry.number, entry.qty, entry.artIndex || 0]),
      cheerDeck: deckEntries(deck.cheer).map((entry) => [entry.number, entry.qty, entry.artIndex || 0]),
    };
  }

  function importJson() {
    try {
      const parsed = JSON.parse(state.importText);
      const deck = fromHoloDelta(parsed);
      state.decks.unshift(deck);
      state.activeDeckId = deck.id;
      state.importMessage = `Importado: ${deck.name}`;
      state.importText = "";
    } catch (error) {
      state.importMessage = `No se pudo importar: ${error.message}`;
    }
  }

  function fromHoloDelta(parsed) {
    if (!parsed || typeof parsed !== "object") throw new Error("JSON vacio o invalido.");
    if (!Array.isArray(parsed.deck) || !Array.isArray(parsed.cheerDeck)) {
      throw new Error("No parece formato HoloDelta: faltan deck o cheerDeck.");
    }

    const deck = createDeck(String(parsed.deckName || "Import HoloDelta").slice(0, 80));
    if (Array.isArray(parsed.oshi) && parsed.oshi[0]) {
      deck.oshi = { number: String(parsed.oshi[0]), artIndex: Number(parsed.oshi[1] || 0) };
    }
    deck.main = listFromHoloDelta(parsed.deck);
    deck.cheer = listFromHoloDelta(parsed.cheerDeck);
    deck.notes = "Importado desde JSON HoloDelta.";
    return deck;
  }

  function listFromHoloDelta(list) {
    return list.reduce((acc, item) => {
      if (!Array.isArray(item) || item.length < 2) return acc;
      const number = String(item[0] || "").trim();
      const qty = Math.max(0, Number(item[1] || 0));
      const artIndex = Number(item[2] || 0);
      if (!number || !qty) return acc;
      acc[cardKey(number, artIndex)] = (acc[cardKey(number, artIndex)] || 0) + qty;
      return acc;
    }, {});
  }

  function downloadJson() {
    const deck = activeDeck();
    const json = JSON.stringify(toHoloDelta(deck), null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slug(deck.name)}.holodelta.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function renderTopOnly() {
    const title = app.querySelector("[data-active-title]");
    if (title) title.textContent = activeDeck().name;
  }

  function renderHome() {
    return `
      <div class="home-container">
        <div class="home-hero">
          <div class="home-logo">
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
              <rect width='100' height='100' rx='25' fill='#0a0a0a' stroke='#e8af44' stroke-width='4'/>
              <text x='50' y='75' font-family='sans-serif' font-size='65' font-weight='900' fill='url(#grad-home)' text-anchor='middle'>h</text>
              <defs>
                <linearGradient id='grad-home' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stop-color='#e8af44'/>
                  <stop offset='100%' stop-color='#ffffff'/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 class="home-title">Analista de Decks</h1>
          <p class="home-subtitle">Hololive Official Card Game</p>
        </div>
        
        <div class="home-menu">
          <button class="home-btn suisei-preview" data-action="tab" data-id="dashboard">
            <img src="https://images.weserv.nl/?url=https://en.hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/EN_hBP01-007_OSR.png" alt="Suisei" class="idol-portrait">
            <span class="btn-text">Panel</span>
            <span class="btn-idol">☄️ Suisei</span>
          </button>
          
          <button class="home-btn calliope-preview" data-action="tab" data-id="library">
            <img src="https://images.weserv.nl/?url=https://en.hololive-official-cardgame.com/wp-content/images/cardlist/hBP02/EN_hBP02-007_OSR.png" alt="Calliope" class="idol-portrait">
            <span class="btn-text">Catálogo</span>
            <span class="btn-idol">💀 Calliope</span>
          </button>
          
          <button class="home-btn ayame-preview" data-action="tab" data-id="builder">
            <img src="https://images.weserv.nl/?url=https://en.hololive-official-cardgame.com/wp-content/images/cardlist/hBP02/EN_hSD02-009_SR.png" alt="Ayame" class="idol-portrait">
            <span class="btn-text">Constructor</span>
            <span class="btn-idol">👹 Ayame</span>
          </button>
          
          <button class="home-btn raora-preview" data-action="tab" data-id="analysis">
            <img src="https://images.weserv.nl/?url=https://en.hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/EN_hBP01-006_OSR.png" alt="Raora" class="idol-portrait">
            <span class="btn-text">Análisis</span>
            <span class="btn-idol">🐆 Raora</span>
          </button>
          
          <button class="home-btn pekora-preview" data-action="tab" data-id="gacha">
            <img src="https://images.weserv.nl/?url=https://en.hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/EN_hBP01-038_C.png" alt="Pekora" class="idol-portrait" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%23222%22/></svg>'">
            <span class="btn-text">Sobres</span>
            <span class="btn-idol">👯‍♀️ Pekora</span>
          </button>
          
          <button class="home-btn generic-preview" data-action="tab" data-id="compare">
            <span class="btn-icon">⚖️</span>
            <span class="btn-text">Comparar</span>
            <span class="btn-idol">Mazos</span>
          </button>
          
          <button class="home-btn generic-preview" data-action="tab" data-id="importer">
            <span class="btn-icon">📥</span>
            <span class="btn-text">Importar</span>
            <span class="btn-idol">Cartas</span>
          </button>

          <button class="home-btn album-preview" data-action="tab" data-id="album">
            <img src="https://images.weserv.nl/?url=https://en.hololive-official-cardgame.com/wp-content/images/cardlist/hBP01/EN_hBP01-020_SEC.png" alt="Album" class="idol-portrait" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%23222%22/></svg>'">
            <span class="btn-text">Álbum</span>
            <span class="btn-idol">Colección</span>
          </button>
          
          <button class="home-btn audit-preview" data-action="tab" data-id="audit">
            <div class="idol-portrait" style="background:#222; display:flex; align-items:center; justify-content:center; color:#fff; font-size:30px;">📋</div>
            <span class="btn-text">Historial</span>
            <span class="btn-idol">Registro</span>
          </button>
        </div>
      </div>
    `;
  }

  function render() {
    // Preservar foco y cursor antes de redibujar
    const activeEl = document.activeElement;
    let focusSelector = null;
    let selectionStart = null;
    let selectionEnd = null;
    
    if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")) {
      if (activeEl.id) {
        focusSelector = `#${activeEl.id}`;
      } else if (activeEl.dataset.input) {
        focusSelector = `input[data-input="${activeEl.dataset.input}"]`;
      } else if (activeEl.dataset.change) {
        focusSelector = `input[data-change="${activeEl.dataset.change}"]`;
      } else if (activeEl.name) {
        focusSelector = `input[name="${activeEl.name}"]`;
      }
      
      try {
        selectionStart = activeEl.selectionStart;
        selectionEnd = activeEl.selectionEnd;
      } catch (e) {
        // Ignorar para tipos de inputs que no soportan seleccion
      }
    }

    if (state.tab === "home") {
      app.innerHTML = renderHome();
      return;
    }

    const deck = activeDeck();
    const stats = deckStats(deck);
    const theme = tabThemes[state.tab] || "hololive";
    const pageLabel = tabLabels[state.tab] || state.tab;
    app.innerHTML = `
      <div class="page-view" data-theme="${theme}">
        <header class="page-header">
          <div class="page-header-inner">
            <button class="home-btn-nav" data-action="tab" data-id="home" title="Volver al inicio">
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' style="width:100%; height:100%;">
                <rect width='100' height='100' rx='25' fill='#0a0a0a' stroke='#e8af44' stroke-width='4'/>
                <text x='50' y='75' font-family='sans-serif' font-size='65' font-weight='900' fill='url(#grad-home-nav)' text-anchor='middle'>h</text>
                <defs>
                  <linearGradient id='grad-home-nav' x1='0%' y1='0%' x2='100%' y2='0%'>
                    <stop offset='0%' stop-color='#e8af44'/>
                    <stop offset='100%' stop-color='#ffffff'/>
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <h2 class="page-title">${escapeHtml(pageLabel)}</h2>
            <span class="deck-indicator">🎴 ${escapeHtml(deck.name)} — ${stats.mainTotal}/50 main · ${stats.cheerTotal}/20 cheer</span>
          </div>
        </header>
        <div class="page-content">
          ${renderTab(deck, stats)}
        </div>
      </div>
    `;

    // Restaurar foco y cursor
    if (focusSelector) {
      const elToFocus = app.querySelector(focusSelector);
      if (elToFocus) {
        elToFocus.focus();
        if (selectionStart !== null && selectionEnd !== null) {
          try {
            elToFocus.setSelectionRange(selectionStart, selectionEnd);
          } catch (e) {
            // Ignorar para tipos de inputs que no soportan seleccion
          }
        }
      }
    }

    // Inicializar carrusel si estamos en la vista de detalle de gacha
    if (state.tab === "gacha" && state.gacha.view === "detail" && typeof initGachaCarousel === "function") {
      const selectedPack = state.gacha.selectedPack || "hBP01";
      initGachaCarousel(selectedPack);
    } else if (typeof stopGachaCarousel === "function") {
      stopGachaCarousel();
    }
  }

  function renderHeader(deck, stats) {
    return `
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true">hOCG</div>
          <div>
            <h1>Analista de Decks Hololive OCG</h1>
            <p>Deck builder local, comparador, fuentes y auditoria de cambios</p>
          </div>
        </div>
        <div class="top-actions">
          <span class="status-pill"><span class="status-dot"></span> Offline por defecto</span>
          <span class="status-pill">Deck: <b data-active-title>${escapeHtml(deck.name)}</b></span>
          <span class="status-pill">${stats.mainTotal}/50 main - ${stats.cheerTotal}/20 cheer</span>
        </div>
      </header>
    `;
  }

  function tabBadge(id, stats) {
    if (id === "builder") return `${stats.mainTotal + stats.cheerTotal}`;
    if (id === "audit") return data.changes.length;
    if (id === "library") return data.cards.length;
    if (id === "compare") return state.decks.length;
    if (id === "analysis") return stats.warnings.length ? "!" : "ok";
    if (id === "importer") return customCards.length;
    return "";
  }

  function renderTab(deck, stats) {
    if (state.tab === "library") return renderLibrary();
    if (state.tab === "builder") return renderBuilder(deck, stats);
    if (state.tab === "analysis") return renderAnalysis(deck);
    if (state.tab === "compare") return renderCompare();
    if (state.tab === "importer") return renderImporter();
    if (state.tab === "audit") return renderAudit();
    if (state.tab === "gacha") return renderGacha();
    if (state.tab === "album") return renderAlbum();
    return renderDashboard(deck, stats);
  }

  function renderDashboard(deck, stats) {
    const latestSources = data.sources.slice(0, 4);
    return `
      <section>
        <div class="section-title">
          <div>
            <h2>Panel principal</h2>
            <p>Vista rapida del catalogo, mazo activo, riesgos y estado de fuentes.</p>
          </div>
          <button class="primary" data-action="new-deck">Nuevo deck</button>
        </div>
        <div class="metric-row">
          <div class="metric"><b>${data.cards.length}</b><span>cartas semilla catalogadas</span></div>
          <div class="metric"><b>${state.decks.length}</b><span>mazos locales guardados</span></div>
          <div class="metric"><b>${data.sources.length}</b><span>fuentes registradas</span></div>
          <div class="metric"><b>${stats.warnings.length}</b><span>alertas del deck activo</span></div>
        </div>
      </section>

      <section class="grid sidebar-grid">
        <div class="panel">
          <div class="section-title">
            <div>
              <h2>${escapeHtml(deck.name)}</h2>
              <p>${stats.oshi ? `Oshi: ${escapeHtml(stats.oshi.name)} (${escapeHtml(stats.oshi.color)})` : "Sin Oshi seleccionado"}</p>
            </div>
          </div>
          ${renderWarnings(stats.warnings)}
          <div class="grid two" style="margin-top: 14px">
            <div class="panel tight">
              <h3>Main deck</h3>
              <p>${stats.mainTotal}/50 cartas. Holomem: ${stats.types.holomem || 0}. Support: ${stats.types.Support || 0}.</p>
            </div>
            <div class="panel tight">
              <h3>Cheer deck</h3>
              <p>${stats.cheerTotal}/20 cartas. Color principal: ${escapeHtml(topEntry(stats.colors)?.[0] || "Sin datos")}.</p>
            </div>
          </div>
        </div>

        <div class="panel">
          <h2>Fuentes recientes</h2>
          <div class="source-list">
            ${latestSources.map(renderSourceRow).join("")}
          </div>
        </div>
      </section>

      <section class="panel">
        <h2>Ultimos cambios</h2>
        <div class="source-list">
          ${data.changes.map(renderChangeRow).join("")}
        </div>
      </section>
    `;
  }

  function renderLibrary() {
    const cards = filteredCards();
    const selected = state.selectedCard ? getCard(state.selectedCard) : null;
    return `
      <section>
        <div class="section-title">
          <div>
            <h2>Catalogo de cartas</h2>
            <p>Base inicial con fuentes, rarezas, artes, expansion y links de mercado manual.</p>
          </div>
        </div>
        <div class="toolbar">
          <div class="field grow">
            <label for="search">Buscar</label>
            <input id="search" data-input="search" value="${escapeAttr(state.filters.search)}" placeholder="Nombre, numero, tag, set..." />
          </div>
          <div class="field">
            <label for="type">Tipo</label>
            <select id="type" data-change="filter-type">
              ${option("All", "Todos", state.filters.type)}
              ${["Oshi", "holomem", "Support", "Cheer"].map((type) => option(type, type, state.filters.type)).join("")}
            </select>
          </div>
          <div class="field">
            <label for="color">Color</label>
            <select id="color" data-change="filter-color">
              ${option("All", "Todos", state.filters.color)}
              ${["White", "Green", "Red", "Blue", "Purple", "Yellow", "Neutral"].map((color) => option(color, color, state.filters.color)).join("")}
            </select>
          </div>
          <div class="field">
            <label for="set">Expansión</label>
            <select id="set" data-change="filter-set">
              ${option("All", "Todas", state.filters.set)}
              ${[...new Set(data.cards.map(c => c.set))].map((set) => option(set, set, state.filters.set)).join("")}
            </select>
          </div>
        </div>
      </section>
      <section class="grid">
        <div id="catalog-card-grid" class="card-grid">
          ${cards.slice(0, 50 * state.ui.catalogPage).map(renderCard).join("") || `<div class="empty">No hay cartas con esos filtros.</div>`}
        </div>
        ${cards.length > 50 * state.ui.catalogPage ? `
          <div style="text-align: center; margin-top: 20px; grid-column: 1 / -1;">
            <button class="btn" data-action="load-more-catalog">Cargar más cartas</button>
          </div>
        ` : ''}
        ${selected ? `
          <div class="card-detail-modal">
            <div class="modal-backdrop" data-action="close-detail"></div>
            <div class="modal-content">
              <button class="close-btn" data-action="close-detail" aria-label="Cerrar">&times;</button>
              ${renderCardDetail(selected)}
            </div>
          </div>
        ` : ''}
      </section>
    `;
  }

  function filteredCards() {
    const query = state.filters.search.trim().toLowerCase();
    return data.cards.filter((card) => {
      const matchesQuery =
        !query ||
        [card.name, card.number, card.set, card.type, card.color, card.rarity, ...(card.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesType = state.filters.type === "All" || card.type === state.filters.type;
      const matchesColor = state.filters.color === "All" || card.color === state.filters.color;
      const matchesSet = state.filters.set === "All" || card.set === state.filters.set;
      return matchesQuery && matchesType && matchesColor && matchesSet;
    });
  }

  function renderCard(card) {
    return `
      <article class="card" draggable="true" data-id="${escapeAttr(card.id)}">
        ${renderCardFrame(card)}
        <div class="card-info">
          <h3>${escapeHtml(card.name)}</h3>
          <p>${escapeHtml(card.number)} - ${escapeHtml(card.type)} - ${escapeHtml(card.rarity)}</p>
          <div class="meta-line" style="margin-bottom: 8px;">
            <span class="tag ${colorClass(card.color)}">${escapeHtml(card.color)}</span>
            ${card.bloom ? `<span class="tag">${escapeHtml(card.bloom)}</span>` : ""}
            <span class="tag">${escapeHtml(card.set.split(" - ")[0])}</span>
          </div>
          <p style="margin-bottom: 12px;">${escapeHtml(card.role)}</p>
          <div class="card-actions">
            <button data-action="select-card" data-id="${escapeAttr(card.id)}">Detalle</button>
            ${renderAddButtons(card)}
          </div>
        </div>
      </article>
    `;
  }

  function renderCardFrame(card, artIndex = 0, overrideRarity = null, applyGlow = false) {
    const imgUrl = getCardImageUrl(card, artIndex);
    const fallbacks = getCardImageFallbacks(card, artIndex);
    if (fallbacks.length > 0) fallbacks.shift();
    const fallbacksJson = escapeAttr(JSON.stringify(fallbacks));
    const rClass = rarityClass(overrideRarity || card.rarity);
    return `
      <div class="card-3d-wrapper ${applyGlow ? 'glow-effect' : ''}" style="aspect-ratio: 63/88; width: 100%; height: auto; position: relative;">
        <div class="card-3d-content">
          <div class="card-frame rarity-${rClass}" style="--card-color: ${colorMap[card.color] || colorMap.Neutral}">
            <img src="${imgUrl}" alt="${escapeHtml(card.name)}" loading="lazy" data-fallbacks="${fallbacksJson}" onerror="handleImageError(this)" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;" />
            <div class="card-fallback-frame" style="display: none;">
              <span>${escapeHtml((overrideRarity || card.rarity).split(" ")[0])}</span>
              <strong>${escapeHtml(card.name)}</strong>
              <span>${escapeHtml(card.number.replace(/^h/, ""))}</span>
            </div>
          </div>
          <div class="card-foil"></div>
        </div>
      </div>
    `;
  }

  function renderAddButtons(card) {
    if (card.type === "Oshi") {
      return `<button class="primary" data-action="add-card" data-zone="oshi" data-id="${escapeAttr(card.id)}">Usar Oshi</button>`;
    }
    if (card.type === "Cheer") {
      return `<button data-action="add-card" data-zone="cheer" data-id="${escapeAttr(card.id)}">+ Cheer</button>`;
    }
    return `<button data-action="add-card" data-zone="main" data-id="${escapeAttr(card.id)}">+ Main</button>`;
  }

  function renderCardDetail(card) {
    if (!card) {
      return `
        <div class="empty">Selecciona una carta del catalogo para ver sus detalles y analisis de juego.</div>
      `;
    }
    
    const source = data.sources.find((item) => item.id === card.sourceId);
    const artIndex = Number(card.artIndex || 0);
    const imgUrl = getCardImageUrl(card, artIndex);
    const fallbacks = getCardImageFallbacks(card, artIndex);
    if (fallbacks.length > 0) fallbacks.shift();
    const fallbacksJson = escapeAttr(JSON.stringify(fallbacks));
    
    let rClass = rarityClass(card.rarity);
    
    return `
      <div class="section-title">
        <div>
          <h2>${escapeHtml(card.name)}</h2>
          <p>${escapeHtml(card.number)} - ${escapeHtml(card.type)} - ${escapeHtml(card.set)}</p>
        </div>
      </div>
      <div class="detail-grid">
        <div class="detail-card-image rarity-${rClass}">
          <img src="${imgUrl}" alt="${escapeHtml(card.name)}" data-fallbacks="${fallbacksJson}" onerror="handleImageError(this)" />
          <div class="card-fallback-frame" style="display: none;">
            <span>${escapeHtml(card.rarity.split(" ")[0])}</span>
            <strong>${escapeHtml(card.name)}</strong>
            <span>${escapeHtml(card.number.replace(/^h/, ""))}</span>
          </div>
        </div>
        <div class="grid">
          <div>
            <div class="meta-line" style="margin-bottom: 16px; align-items: center;">
              <span class="tag ${colorClass(card.color)}">${escapeHtml(card.color)}</span>
              <span class="tag">${escapeHtml(card.rarity)}</span>
              ${card.hp ? `<span class="tag">HP ${escapeHtml(card.hp)}</span>` : ""}
              ${card.life ? `<span class="tag">Life ${escapeHtml(card.life)}</span>` : ""}
              ${card.bloom ? `<span class="tag">${escapeHtml(card.bloom)}</span>` : ""}
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; line-height: 1.6;">
              <p style="margin:0;"><b>Texto/resumen:</b> ${escapeHtml(card.text)}</p>
              <p style="margin:0;"><b>Sinergia:</b> ${escapeHtml(card.synergy)}</p>
              <p style="margin:0;"><b>Tags:</b> ${(card.tags || []).map(escapeHtml).join(", ") || "Sin tags"}</p>
            </div>
            <h3>Acciones</h3>
            <div class="source-list">
              <div class="source-row" style="border-left: 3px solid #6366f1; background: rgba(99, 102, 241, 0.1); padding-left: 8px;">
                <div>
                  <strong style="color: #fff; font-size: 13px;">${escapeHtml(card.rarity)}</strong>
                  <span style="font-size: 11px; color: #a1a1aa; margin-left: 6px;">Art #${Number(card.artIndex || 0)}</span>
                </div>
                <p style="font-size: 12px; margin: 4px 0 8px 0;">${escapeHtml(card.note || "Carta oficial")}</p>
                <div class="source-meta" style="display: flex; gap: 8px;">
                  ${card.type === "Oshi"
                    ? `<button data-action="add-card" data-zone="oshi" data-id="${escapeAttr(card.id)}" data-art="${Number(card.artIndex || 0)}">Usar esta carta</button>`
                    : card.type === "Cheer"
                      ? `<button data-action="add-card" data-zone="cheer" data-id="${escapeAttr(card.id)}" data-art="${Number(card.artIndex || 0)}">+ Cheer</button>`
                      : `<button data-action="add-card" data-zone="main" data-id="${escapeAttr(card.id)}" data-art="${Number(card.artIndex || 0)}">+ Main</button>`
                  }
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>Mercado</h3>
            <div class="source-list">
              ${(card.market || []).map((market) => `
                <div class="source-row">
                  <h3>${escapeHtml(market.vendor)}</h3>
                  <p>${escapeHtml(market.status)}</p>
                  <div class="source-meta">
                    ${/^https?:\/\//i.test(market.url) ? `<a href="${safeUrl(market.url)}" target="_blank" rel="noreferrer noopener">Abrir referencia</a>` : `<span style="color:#aaa;">Sin enlace</span>`}
                  </div>
                </div>
              `).join("") || `<div class="empty">Sin mercado registrado.</div>`}
            </div>
          </div>
          <div>
            <h3>Fuente</h3>
            <p>${source ? escapeHtml(source.title) : "Import/manual"}
            ${/^https?:\/\//i.test(card.officialUrl) ? ` - <a href="${safeUrl(card.officialUrl)}" target="_blank" rel="noreferrer noopener">ver carta/fuente</a>` : ''}
            </p>
          </div>
        </div>
      </div>
    `;
  }

  function renderBuilder(deck, stats) {
    const exportText = state.exportText || JSON.stringify(toHoloDelta(deck), null, 2);
    const selected = state.selectedCard ? getCard(state.selectedCard) : null;
    return `
      <section class="builder-layout">
        <div class="builder-inventory">
          <div class="toolbar" style="margin-bottom: 20px;">
            <div class="field grow">
              <label for="builderSearch">Buscar en inventario</label>
              <input id="builderSearch" data-input="builder-search" value="${escapeAttr(state.builderSearch || '')}" placeholder="Nombre, número, tipo, color..." />
            </div>
            <div class="field">
              <button data-action="duplicate-deck">Duplicar Mazo</button>
            </div>
            <div class="field">
              <button class="danger" data-action="delete-deck" ${state.decks.length === 1 ? "disabled" : ""}>Eliminar Mazo</button>
            </div>
          </div>
          
          <div class="gacha-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
            ${renderInventoryGrid(deck)}
          </div>
        </div>
        
        <aside class="builder-decklist">
          <div class="field" style="margin-bottom: 16px;">
            <label for="activeDeck">Mazo Activo</label>
            <select id="activeDeck" data-change="active-deck">
              ${state.decks.map((item) => option(item.id, item.name, state.activeDeckId)).join("")}
            </select>
          </div>
          <div class="field" style="margin-bottom: 20px;">
            <label for="deckName">Nombre</label>
            <input id="deckName" data-input="deck-name" value="${escapeAttr(deck.name)}" />
          </div>
          
          ${renderWarnings(stats.warnings)}
          
          <div class="decklist-zones" style="margin-top: 14px; display: flex; flex-direction: column; gap: 20px;">
            <div class="drop-zone" data-drop-zone="oshi">
              ${renderOshiSlot(deck)}
            </div>
            <div class="drop-zone" data-drop-zone="main">
              ${renderDeckList("main", "Main deck", deck.main)}
            </div>
            <div class="drop-zone" data-drop-zone="cheer">
              ${renderDeckList("cheer", "Cheer deck", deck.cheer)}
            </div>
          </div>
          
          <hr style="margin: 24px 0;" />
          
          <h3>Opciones de Mazo</h3>
          <div class="toolbar" style="margin-top: 12px; display: flex; flex-direction: column; gap: 8px;">
            <button class="primary" data-action="export-json">Exportar a HoloDelta JSON</button>
            <button class="primary" data-action="export-text">Copiar Lista de Texto</button>
            <button data-action="download-json">Descargar JSON</button>
          </div>
        </aside>
      </section>
      
      ${selected ? `
        <div class="card-detail-modal">
          <div class="modal-backdrop" data-action="close-detail"></div>
          <div class="modal-content">
            <button class="close-btn" data-action="close-detail" aria-label="Cerrar">&times;</button>
            ${renderCardDetail(selected)}
          </div>
        </div>
      ` : ''}
    `;
  }

  function renderOshiSlot(deck) {
    if (!deck.oshi) {
      return `<div class="deck-line"><div class="qty">O</div><div><b>Oshi</b><small>Selecciona una carta Oshi desde el catalogo.</small></div></div>`;
    }
    const card = getCard(deck.oshi.number);
    return `
      <div>
        <h3>Oshi</h3>
        <div class="deck-line">
          <div class="qty">1</div>
          <div><b>${escapeHtml(card.name)}</b><small>${escapeHtml(card.number)} - artIndex ${Number(deck.oshi.artIndex || 0)} - ${escapeHtml(card.rarity)}</small></div>
          <div class="deck-controls">
            <button class="danger" data-action="remove" data-zone="oshi" data-key="">Quitar</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderDeckList(zone, title, map) {
    const entries = deckEntries(map);
    return `
      <div>
        <h3>${escapeHtml(title)} (${countTotal(map)})</h3>
        ${entries
          .map(
            (entry) => `
              <div class="deck-line">
                <div class="qty">${entry.qty}</div>
                <div>
                  <b>${escapeHtml(entry.card.name)}</b>
                  <small>${escapeHtml(entry.number)} - ${escapeHtml(entry.card.type)} - ${escapeHtml(entry.card.color)} - artIndex ${entry.artIndex}</small>
                </div>
                <div class="deck-controls">
                  <button data-action="qty" data-zone="${zone}" data-key="${escapeAttr(entry.key)}" data-delta="-1">-</button>
                  <button data-action="qty" data-zone="${zone}" data-key="${escapeAttr(entry.key)}" data-delta="1">+</button>
                  <button class="danger" data-action="remove" data-zone="${zone}" data-key="${escapeAttr(entry.key)}">x</button>
                </div>
              </div>
            `,
          )
          .join("") || `<div class="empty">Sin cartas todavia.</div>`}
      </div>
    `;
  }

  function renderWarnings(warnings) {
    if (!warnings.length) return `<div class="success-box">Sin alertas estructurales detectadas.</div>`;
    return `<ul class="warning-list">${warnings.map((warning) => `<li>${escapeHtml(warning)}</li>`).join("")}</ul>`;
  }

  function renderAnalysis(deck) {
    const analysis = analyzeDeck(deck);
    const stats = deckStats(deck);
    return `
      <section>
        <div class="section-title">
          <div>
            <h2>Análisis de sinergias</h2>
            <p>Heurística local basada en color, curva, tags, consistencia, reglas y arquetipos documentados.</p>
          </div>
        </div>
      </section>
      <section class="grid sidebar-grid">
        <div class="panel analysis-block">
          <h2>Puntajes</h2>
          ${analysis.scores.map(([label, value]) => renderScore(label, value)).join("")}
          <h2>Lectura del deck</h2>
          <ul class="warning-list">
            ${analysis.advice.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          
          <div class="visual-charts">
            <h2>Gráficos de Distribución</h2>
            ${renderBloomChart(stats)}
            ${renderColorBalanceChart(stats)}
            ${renderTypeDistributionChart(stats)}
          </div>
        </div>
        <aside class="panel">
          <h2>Arquetipos cercanos</h2>
          <div class="source-list">
            ${analysis.archetypes
              .map(
                (arch) => `
                  <div class="source-row">
                    <h3>${escapeHtml(arch.name)} - ${arch.score}%</h3>
                    <p>${escapeHtml(arch.focus)}</p>
                    <div class="source-meta">
                      <span class="tag">Early ${escapeHtml(arch.early)}</span>
                      <span class="tag">Late ${escapeHtml(arch.late)}</span>
                      <span class="tag">Dificultad ${escapeHtml(arch.difficulty)}</span>
                    </div>
                    <p>Coinciden: ${arch.matched.map(escapeHtml).join(", ") || "ninguna"}</p>
                  </div>
                `,
              )
              .join("") || `<div class="empty">No hay arquetipo cercano con la base actual.</div>`}
          </div>
        </aside>
      </section>
    `;
  }

  function renderScore(label, value) {
    return `
      <div class="score-line">
        <strong>${escapeHtml(label)}</strong>
        <div class="bar"><span style="--value: ${value}%"></span></div>
        <span>${value}</span>
      </div>
    `;
  }

  function renderCompare() {
    const deckA = getDeckById(state.compareA);
    const deckB = getDeckById(state.compareB);
    const statsA = deckStats(deckA);
    const statsB = deckStats(deckB);
    return `
      <section>
        <div class="section-title">
          <div>
            <h2>Comparador</h2>
            <p>Compara estructura, colores, curva y cartas diferentes entre dos mazos locales.</p>
          </div>
        </div>
        <div class="toolbar">
          <div class="field">
            <label for="compareA">Deck A</label>
            <select id="compareA" data-change="compare-a">
              ${state.decks.map((deck) => option(deck.id, deck.name, state.compareA)).join("")}
            </select>
          </div>
          <div class="field">
            <label for="compareB">Deck B</label>
            <select id="compareB" data-change="compare-b">
              ${state.decks.map((deck) => option(deck.id, deck.name, state.compareB)).join("")}
            </select>
          </div>
        </div>
      </section>
      <section class="panel">
        <table class="compare-table">
          <thead><tr><th>Metrica</th><th>${escapeHtml(deckA.name)}</th><th>${escapeHtml(deckB.name)}</th></tr></thead>
          <tbody>
            ${compareRow("Oshi", statsA.oshi?.name || "Sin Oshi", statsB.oshi?.name || "Sin Oshi")}
            ${compareRow("Main", `${statsA.mainTotal}/50`, `${statsB.mainTotal}/50`)}
            ${compareRow("Cheer", `${statsA.cheerTotal}/20`, `${statsB.cheerTotal}/20`)}
            ${compareRow("Color principal", topEntry(statsA.colors)?.[0] || "Sin datos", topEntry(statsB.colors)?.[0] || "Sin datos")}
            ${compareRow("Debut / 1st / 2nd", bloomLine(statsA), bloomLine(statsB))}
            ${compareRow("Alertas", String(statsA.warnings.length), String(statsB.warnings.length))}
          </tbody>
        </table>
      </section>
      <section class="grid two">
        <div class="panel">
          <h2>Solo en ${escapeHtml(deckA.name)}</h2>
          ${renderDiff(deckA, deckB)}
        </div>
        <div class="panel">
          <h2>Solo en ${escapeHtml(deckB.name)}</h2>
          ${renderDiff(deckB, deckA)}
        </div>
      </section>
    `;
  }

  function renderDiff(left, right) {
    const rightKeys = new Set([...Object.keys(right.main), ...Object.keys(right.cheer), right.oshi ? cardKey(right.oshi.number, right.oshi.artIndex) : ""].filter(Boolean));
    const leftEntries = [
      ...(left.oshi ? [{ key: cardKey(left.oshi.number, left.oshi.artIndex), qty: 1, number: left.oshi.number, artIndex: left.oshi.artIndex, card: getCard(left.oshi.number) }] : []),
      ...deckEntries(left.main),
      ...deckEntries(left.cheer),
    ].filter((entry) => !rightKeys.has(entry.key));

    return (
      leftEntries
        .map(
          (entry) => `
            <div class="deck-line">
              <div class="qty">${entry.qty}</div>
              <div><b>${escapeHtml(entry.card.name)}</b><small>${escapeHtml(entry.number)} - ${escapeHtml(entry.card.type)}</small></div>
            </div>
          `,
        )
        .join("") || `<div class="empty">Sin diferencias por carta/artIndex.</div>`
    );
  }

  function generateBoosterPack(setId) {
    const packCards = [];
    const setCards = data.cards.filter(c => c.number.startsWith(setId));
    if (!setCards.length) return packCards;

    const pool = { C: [], U: [], R: [], RR: [], SR: [], UR: [], SEC: [], OSR: [], OUR: [] };
    
    setCards.forEach(c => {
      if (pool[c.rarity]) pool[c.rarity].push({ ...c, pulledRarity: c.rarity, pulledVariantIndex: c.artIndex || 0 });
    });

    const getRandomCard = (rarity, excludeIds = [], excludeNames = []) => {
      let p = pool[rarity] && pool[rarity].length ? pool[rarity] : (pool["R"].length ? pool["R"] : setCards.map(c => ({...c, pulledRarity: c.rarity, pulledVariantIndex: 0})));
      let available = p.filter(c => !excludeIds.includes(c.id + ":" + c.pulledVariantIndex) && !excludeNames.includes(c.name));
      if (available.length === 0) available = p.filter(c => !excludeIds.includes(c.id + ":" + c.pulledVariantIndex));
      if (available.length > 0) p = available;
      return p[Math.floor(Math.random() * p.length)];
    };

    const packIds = [];
    const packNames = [];
    const addCard = (rarity) => {
      const c = getRandomCard(rarity, packIds, packNames);
      packCards.push(c);
      packIds.push(c.id + ":" + c.pulledVariantIndex);
      packNames.push(c.name);
    };

    const rand = () => Math.random() * 100;
    for (let i = 0; i < 4; i++) addCard("C");
    for (let i = 0; i < 2; i++) addCard("U");
    addCard(Math.random() > 0.5 ? "C" : "U");
    
    const roll = rand();
    let hitRarity = "R";
    if (roll < 0.1) hitRarity = "SEC";
    else if (roll < 0.3) hitRarity = "OUR";
    else if (roll < 1.68) hitRarity = "UR";
    else if (roll < 10) hitRarity = "OSR";
    else if (roll < 35) hitRarity = "SR";
    else if (roll < 85) hitRarity = "RR";
    
    // Normalize missing database cards by downgrading hits if the pool is artificially small
    while (hitRarity !== "R") {
      if (!pool[hitRarity] || !pool[hitRarity].length) {
        hitRarity = hitRarity === "SEC" ? "UR" : hitRarity === "OUR" ? "OSR" : hitRarity === "UR" ? "SR" : hitRarity === "OSR" ? "SR" : hitRarity === "SR" ? "RR" : "R";
      } else {
        const expectedMinimums = { SR: 8, UR: 3, SEC: 2, OSR: 6, OUR: 3, RR: 10 };
        const expected = expectedMinimums[hitRarity];
        if (expected && pool[hitRarity].length < expected && Math.random() > (pool[hitRarity].length / expected)) {
          hitRarity = hitRarity === "SEC" ? "UR" : hitRarity === "OUR" ? "OSR" : hitRarity === "UR" ? "SR" : hitRarity === "OSR" ? "SR" : hitRarity === "SR" ? "RR" : "R";
        } else {
          break;
        }
      }
    }
    if (!pool[hitRarity] || !pool[hitRarity].length) hitRarity = "R";
    addCard(hitRarity);

    return packCards.sort(() => Math.random() - 0.5);
  }

  function generateBoosterBox(setId) {
    const boxPacks = [];
    const setCards = data.cards.filter(c => c.number.startsWith(setId));
    if (!setCards.length) return boxPacks;

    const pool = { C: [], U: [], R: [], RR: [], SR: [], UR: [], SEC: [], OSR: [], OUR: [] };
    
    setCards.forEach(c => {
      if (pool[c.rarity]) pool[c.rarity].push({ ...c, pulledRarity: c.rarity, pulledVariantIndex: 0 });
      if (c.variants) {
        c.variants.forEach(v => {
          if (v.artIndex === 0 && v.rarity === c.rarity) return; // Fix for double-weighting Mumei
          if (pool[v.rarity]) pool[v.rarity].push({ ...c, pulledRarity: v.rarity, pulledVariantIndex: v.artIndex });
        });
      }
    });

    const getRandomCard = (rarity, excludeIds = [], excludeNames = []) => {
      let p = pool[rarity] && pool[rarity].length ? pool[rarity] : (pool["R"].length ? pool["R"] : setCards.map(c => ({...c, pulledRarity: c.rarity, pulledVariantIndex: 0})));
      let available = p.filter(c => !excludeIds.includes(c.id + ":" + c.pulledVariantIndex) && !excludeNames.includes(c.name));
      if (available.length === 0) available = p.filter(c => !excludeIds.includes(c.id + ":" + c.pulledVariantIndex));
      if (available.length > 0) p = available;
      return p[Math.floor(Math.random() * p.length)];
    };

    // - 1 UR asegurada por caja
    // - 1 OSR en promedio por caja (con chance baja de ser SEC/OUR)
    // - ~4 SR
    // - ~6 RR
    // Total = 12 hits/slots asegurados, uno por sobre
    
    // Slot 1: UR Garantizado
    let boxHit1 = "UR";
    
    // Slot 2: OSR o mejor
    let boxHit2 = "OSR";
    const boxRoll = Math.random() * 100;
    if (boxRoll < 1.25) boxHit2 = "SEC";      // 1/80 boxes
    else if (boxRoll < 3.75) boxHit2 = "OUR"; // 1/40 boxes
    
    // Distribución de rarezas altas en los 12 sobres
    const boxRarities = [boxHit1, boxHit2];
    for (let i = 0; i < 4; i++) boxRarities.push("SR");
    while (boxRarities.length < 12) boxRarities.push("RR");
    
    // Shuffle the 12 hit rarities
    boxRarities.sort(() => Math.random() - 0.5);

    for (let p = 0; p < 12; p++) {
      const packCards = [];
      const packIds = [];
      const packNames = [];
      
      const addCard = (rarity) => {
        const c = getRandomCard(rarity, packIds, packNames);
        packCards.push(c);
        packIds.push(c.id + ":" + c.pulledVariantIndex);
        packNames.push(c.name);
      };

      for (let i = 0; i < 4; i++) addCard("C");
      for (let i = 0; i < 2; i++) addCard("U");
      addCard(Math.random() > 0.5 ? "C" : "U");
      
      let hitR = boxRarities[p];
      while (hitR !== "R") {
        if (!pool[hitR] || !pool[hitR].length) {
          hitR = hitR === "SEC" ? "UR" : hitR === "OUR" ? "OSR" : hitR === "UR" ? "SR" : hitR === "OSR" ? "SR" : hitR === "SR" ? "RR" : "R";
        } else {
          const expectedMinimums = { SR: 8, UR: 3, SEC: 2, OSR: 6, OUR: 3, RR: 10 };
          const expected = expectedMinimums[hitR];
          if (expected && pool[hitR].length < expected && Math.random() > (pool[hitR].length / expected)) {
            hitR = hitR === "SEC" ? "UR" : hitR === "OUR" ? "OSR" : hitR === "UR" ? "SR" : hitR === "OSR" ? "SR" : hitR === "SR" ? "RR" : "R";
          } else {
            break;
          }
        }
      }
      if (!pool[hitR] || !pool[hitR].length) hitR = "R";
      addCard(hitR);
      
      boxPacks.push(packCards.sort(() => Math.random() - 0.5));
    }

    return boxPacks;
  }

  function openGachaPack(setId, amount = 1) {
    if (state.gacha.opening) return;
    const packArt = setId === "hBP02" ? "assets/hbp02_pack.png" : "assets/hbp01_pack.jpg";
    state.gacha.opening = { setId, amount, packArt };
    state.gacha.results = [];
    render();

    if (amount === 12) {
      if (window.SFX && window.SFX.playBoxOpen) window.SFX.playBoxOpen();
    } else {
      if (window.SFX && window.SFX.playPackOpen) window.SFX.playPackOpen();
    }

    setTimeout(() => {
      let results = [];
      if (amount === 12) {
        // Caja Completa (Box Mapping asegurado)
        results = generateBoosterBox(setId);
      } else {
        // Sobre suelto (Aleatorio normal o simula sobre suelto)
        for (let i = 0; i < amount; i++) {
          results.push(generateBoosterPack(setId));
        }
      }
      
      // Tag pulls before adding them to the collection so the reveal can celebrate new cards.
      const newCards = new Set();
      results.forEach(pack => {
        pack.forEach(card => {
          card.isNewPull = !state.collection[card.id] && !newCards.has(card.id);
          if (card.isNewPull) newCards.add(card.id);
          if (!state.collection[card.id]) state.collection[card.id] = 0;
          state.collection[card.id]++;
        });
      });

      state.gacha.results = results;
      state.gacha.opening = false;
      
      // Filter for hits
      const allPulls = results.flat();
      const hits = allPulls.filter(c => ["SR", "OSR", "UR", "OUR", "SEC"].includes(c.pulledRarity || c.rarity));
      
      if (hits.length > 0) {
        // Sort hits by rarity order (lowest hit first, saving the best for last!)
        const rarityOrder = { SR: 4, OSR: 5, UR: 6, OUR: 7, SEC: 8 };
        hits.sort((a, b) => {
          return (rarityOrder[a.pulledRarity || a.rarity] || 0) - (rarityOrder[b.pulledRarity || b.rarity] || 0);
        });
        state.gacha.hitQueue = hits;
        advanceHitReveal(false); // Start reveal process without rendering yet (it will render inside)
      } else {
        saveState();
        render();
      }
    }, amount === 12 ? 2100 : 1650);
  }

  function advanceHitReveal(isManualClick = true) {
    if (state.gacha.hitQueue.length > 0) {
      state.gacha.currentHit = state.gacha.hitQueue.shift();
      if (window.SFX?.playHit) {
        const rarity = state.gacha.currentHit.pulledRarity || state.gacha.currentHit.rarity;
        window.SFX.playHit(rarity);
      }
      render();
    } else {
      state.gacha.currentHit = null;
      saveState();
      render();
    }
  }

  function renderAlbum() {
    const sets = {};
    data.cards.forEach(card => {
      const set = card.set || card.number.split("-")[0]; // Agrupar por nombre de expansión o prefijo
      if (!sets[set]) sets[set] = [];
      sets[set].push(card);
    });

    let html = `<div class="album-section">`;
    html += `<div class="section-title">
        <div>
          <h2>Álbum de Colección</h2>
          <p>Progreso de obtención de cartas, agrupado por expansión.</p>
        </div>
        <div style="text-align:right;">
          <h3 style="color:var(--highlight); margin:0;">✨ Sparkles: ${state.gacha.sparkles || 0}</h3>
          <small style="color:var(--muted);">Quema repetidas para obtener Sparkles</small>
        </div>
      </div>`;

    for (const [setName, setCards] of Object.entries(sets)) {
      let obtainedCount = 0;
      const totalCount = setCards.length;
      
      const cardsHtml = setCards.map(card => {
        const qty = state.collection[card.id] || 0;
        if (qty > 0) obtainedCount++;
        
        const isMissing = qty === 0;
        const missingClass = isMissing ? 'card-missing' : '';
        const badgeHtml = qty > 1 ? `<div class="collection-badge">x${qty}</div>` : '';
        const rarityDisp = escapeHtml(card.rarity.split(" ")[0]);
        
        const salvageBtn = qty > 1 ? `<button class="salvage-btn" data-action="salvage-card" data-id="${escapeAttr(card.id)}" title="Quemar duplicado" onclick="event.stopPropagation()">🔥</button>` : '';
        
        return `
          <div class="card-item album-card ${missingClass}" data-id="${escapeAttr(card.id)}" style="cursor: pointer; position: relative;" onclick="document.querySelector('[data-action=open-card-modal][data-id=\\'${card.id}\\']')?.click()">
            <button style="display:none;" data-action="open-card-modal" data-id="${escapeAttr(card.id)}"></button>
            ${renderCardFrame(card, 0, null)}
            ${badgeHtml}
            ${salvageBtn}
            <div class="card-info" style="text-align: center; margin-top: 8px;">
              <div class="card-name" style="font-size: 10px; color: #aaa;">${escapeHtml(card.name)}</div>
              <div class="card-rarity" style="font-size: 12px; color: var(--hl-cyan);">${rarityDisp}</div>
            </div>
          </div>
        `;
      }).join('');

      const completionPct = totalCount > 0 ? ((obtainedCount / totalCount) * 100).toFixed(0) : 0;

      html += `
        <div class="panel" style="margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line); padding-bottom: 12px; margin-bottom: 20px;">
            <h3>${escapeHtml(setName)}</h3>
            <span style="font-weight: bold; color: var(--hl-cyan);">${obtainedCount} / ${totalCount} (${completionPct}%)</span>
          </div>
          <div class="card-grid" style="display: flex; gap: 16px; flex-wrap: wrap;">
            ${cardsHtml}
          </div>
        </div>
      `;
    }
    
    html += `</div>`;
    return html;
  }

  function renderGacha() {
    const packs = [
      {
        id: "hBP01", name: "Blooming Radiance", img: "assets/hbp01_pack.jpg", theme: "blooming",
        eyebrow: "Booster Pack 01", tagline: "El primer escenario se ilumina", description: "Descubre a las estrellas que encendieron el comienzo de hololive OCG.",
        accent: "#ff6f9f", glow: "rgba(255, 111, 159, .45)", rarityNote: "UR garantizada en una caja"
      },
      {
        id: "hBP02", name: "Quintet Spectrum", img: "assets/hbp02_pack.png", theme: "quintet",
        eyebrow: "Booster Pack 02", tagline: "Cinco colores. Un escenario.", description: "Una expansión etérea donde cada sobre puede revelar un nuevo brillo.",
        accent: "#56d7ff", glow: "rgba(86, 215, 255, .45)", rarityNote: "OSR o mejor en cada caja"
      }
    ];

    let content = "";
    if (state.gacha.opening) {
      const opening = state.gacha.opening;
      const openingLabel = opening.amount === 12 ? "Abriendo la caja..." : "Rompiendo el sello...";
      content = `
        <div class="gacha-opening-scene ${opening.amount === 12 ? "is-box" : ""}">
          <div class="gacha-opening-aura"></div>
          <div class="gacha-opening-rays"></div>
          <div class="gacha-opening-sparkles" aria-hidden="true">
            ${Array.from({ length: 14 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}
          </div>
          <div class="gacha-pack-opening" style="--pack-art: url('${opening.packArt}')"></div>
          <div class="gacha-opening-copy">
            <span class="gacha-opening-kicker">${opening.amount === 12 ? "12 SOBRES · CAJA COMPLETA" : "SOBRE ENCONTRADO"}</span>
            <h2>${openingLabel}</h2>
            <p>La suerte ya está echada...</p>
          </div>
        </div>
      `;
    } else if (state.gacha.currentHit) {
      const hit = state.gacha.currentHit;
      const hitRarity = hit.pulledRarity || hit.rarity;
      const hitArtIdx = hit.artIndex || 0;
      
      content = `
        <div class="gacha-hit-reveal-overlay rarity-${rarityClass(hitRarity)}" data-action="next-hit">
          <div class="hit-reveal-bg"></div>
          <div class="hit-reveal-rays"></div>
          
          <div class="hit-reveal-text"><span>${escapeHtml(hitRarity)}</span></div>
          
          <div class="hit-reveal-card-container">
            ${renderCardFrame(hit, hitArtIdx, hitRarity, true)}
            ${hit.isNewPull ? '<span class="hit-new-badge">NUEVA</span>' : ''}
          </div>
          
          <div class="hit-character-name">${escapeHtml(hit.name)}</div>
          
          <p class="hit-continue-text">Toca para continuar</p>
        </div>
      `;
    } else if (state.gacha.results.length > 0) {
      const rarityOrder = { C: 0, U: 1, R: 2, RR: 3, SR: 4, OSR: 5, UR: 6, OUR: 7, SEC: 8 };
      const flatResults = state.gacha.results.flat();
      const rarestPull = flatResults.reduce((best, card) => {
        const current = rarityOrder[card.pulledRarity || card.rarity] ?? 0;
        const previous = rarityOrder[best?.pulledRarity || best?.rarity] ?? -1;
        return current > previous ? card : best;
      }, null);
      const rarestRarity = rarestPull?.pulledRarity || rarestPull?.rarity || "R";
      const newCount = flatResults.filter(card => card.isNewPull).length;
      const hitLabel = ["UR", "OUR", "SEC"].includes(rarestRarity) ? "MEGA HIT" : ["SR", "OSR"].includes(rarestRarity) ? "HIT!" : "SOBRE ABIERTO";
      content = `
        <div class="gacha-results-hero rarity-${rarityClass(rarestRarity)}">
          <div>
            <span class="gacha-hit-label">${hitLabel}</span>
            <h2 class="magical-text">Nuevas cartas obtenidas</h2>
            <p>${newCount ? `${newCount} carta${newCount === 1 ? "" : "s"} nueva${newCount === 1 ? "" : "s"} para tu colección · ` : ""}Mejor pull: <b>${escapeHtml(rarestRarity)}</b></p>
          </div>
        </div>
        <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
          <h2 class="magical-text">¡Nuevas Cartas Obtenidas!</h2>
          <button class="btn outline" onclick="document.querySelector('[data-action=clear-gacha]').click()">Volver a la expansión</button>
          <button style="display:none;" data-action="clear-gacha"></button>
        </div>
        <div class="gacha-packs-container" style="display: flex; flex-direction: column; gap: 40px; margin-bottom: 40px;">
          ${state.gacha.results.map((pack, index) => `
            <div class="gacha-pack-result" style="background: rgba(255,255,255,0.02); border-radius: 16px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);">
              <h3 style="margin-top: 0; color: var(--hl-cyan); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-bottom: 20px;">Sobre ${index + 1}</h3>
              <div class="gacha-grid">
                ${pack.map((card, cardIndex) => {
                  const displayRarity = card.pulledRarity || card.rarity;
                  const artIndex = card.pulledVariantIndex || 0;
                  const isHighRarity = ["SR", "UR", "SEC", "OUR", "OSR"].includes(displayRarity);
                  const delay = Math.min((index * 42) + (cardIndex * 85), 1100);
                  return `
                    <div class="card-item gacha-result-card ${isHighRarity ? "is-hit rarity-" + rarityClass(displayRarity) : ""}" style="--reveal-delay:${delay}ms;" onclick="document.querySelector('[data-action=open-card-modal][data-id=\\'${card.id}\\']')?.click()">
                      <button style="display:none;" data-action="open-card-modal" data-id="${card.id}" data-artidx="${artIndex}"></button>
                      ${renderCardFrame(card, artIndex, displayRarity, isHighRarity)}
                      <div class="card-info" style="margin-top: 16px; text-align: center;">
                        <div class="card-name">${escapeHtml(card.name)}</div>
                        <div class="card-rarity">${card.isNewPull ? `<span class="gacha-new-badge">NUEVA</span>` : ""}${displayRarity}</div>
                      </div>
                    </div>
                  `;
                }).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else if (state.gacha.view === "detail") {
      const selectedPack = packs.find((pack) => pack.id === state.gacha.selectedPack) || packs[0];
      const featuredCards = getGachaFeaturedCards(selectedPack.id);
      content = `
        <div class="gacha-set-page theme-${selectedPack.theme}" style="--set-accent:${selectedPack.accent}; --set-glow:${selectedPack.glow}; --set-art:url('${selectedPack.img}')">
          <button class="gacha-back-button" data-action="back-gacha-lobby">← Todas las expansiones</button>
          <section class="gacha-set-hero">
            <div class="gacha-set-hero-copy">
              <span class="gacha-set-eyebrow">${selectedPack.eyebrow}</span>
              <h2>${selectedPack.name}</h2>
              <p class="gacha-set-tagline">${selectedPack.tagline}</p>
              <p class="gacha-set-description">${selectedPack.description}</p>
              <div class="gacha-set-meta"><span>8 cartas por sobre</span><span>${selectedPack.rarityNote}</span></div>
              <div class="gacha-set-actions">
                <button class="btn primary" data-action="open-pack" data-set="${selectedPack.id}" data-amount="1">Abrir 1 sobre</button>
                <button class="btn outline" data-action="open-pack" data-set="${selectedPack.id}" data-amount="12">Abrir caja · 12 sobres</button>
              </div>
            </div>
            <div class="gacha-set-pack-stage" aria-label="Sobre de ${escapeAttr(selectedPack.name)}">
              <div class="gacha-set-pack-image"></div>
              <span class="gacha-set-orbit orbit-one"></span><span class="gacha-set-orbit orbit-two"></span>
            </div>
          </section>
          <section class="gacha-featured-section">
            <div class="gacha-featured-heading">
              <div><span>SPOTLIGHT</span><h3>Los hits que pueden aparecer</h3></div>
              <p>Las cartas de rareza más alta de esta expansión.</p>
            </div>
            <div class="gacha-featured-cards" id="gacha-carousel-container">
              ${featuredCards.map((card, index) => `
                <button class="gacha-featured-card rarity-${rarityClass(card.featuredRarity)}" style="--feature-index:${index};" data-action="open-card-modal" data-id="${escapeAttr(card.id)}" data-artidx="${card.featuredArtIndex}" aria-label="Ver ${escapeAttr(card.name)}">
                  ${renderCardFrame(card, card.featuredArtIndex, card.featuredRarity, true)}
                  <span class="gacha-featured-rarity">${escapeHtml(card.featuredRarity)}</span>
                  <span class="gacha-featured-name">${escapeHtml(card.name)}</span>
                </button>
              `).join("") || `<p class="empty">No hay cartas destacadas disponibles para esta expansión.</p>`}
            </div>
          </section>
        </div>
      `;
    } else if (state.gacha.view === "lobby") {
      content = `
        <div class="gacha-expansion-hub">
          <div class="gacha-hub-intro"><span>SELECT SET</span><h2>Elige tu próximo escenario</h2><p>Cada expansión tiene su propio mundo, sus propios hits y una experiencia de apertura personalizada.</p></div>
          <div class="gacha-expansion-list">
            ${packs.map((pack, index) => `
              <article class="gacha-expansion-portal theme-${pack.theme}" style="--set-accent:${pack.accent}; --set-glow:${pack.glow}; --set-art:url('${pack.img}'); --portal-index:${index};">
                <div class="gacha-portal-art"><div class="gacha-portal-pack"></div><span class="gacha-portal-shimmer"></span></div>
                <div class="gacha-portal-copy"><span>${pack.eyebrow}</span><h3>${pack.name}</h3><p>${pack.tagline}</p><small>${pack.rarityNote}</small><button class="btn primary" data-action="select-gacha-set" data-id="${pack.id}">Explorar expansión <b>→</b></button></div>
              </article>
            `).join("")}
          </div>
        </div>
      `;
    } else {
      content = `
        <div style="display: flex; gap: 30px; flex-wrap: wrap; justify-content: center;">
          ${packs.map(p => `
            <div class="gacha-pack-card" style="background: linear-gradient(145deg, #1e1e2f, #151520); border: 2px solid ${p.bg}; border-radius: 20px; padding: 20px; text-align: center; width: 300px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
              <div style="background: url('${p.img}') center/cover no-repeat; width: 100%; height: 350px; display: flex; align-items: flex-end; justify-content: center; border-radius: 10px; border: 2px solid ${p.bg}; box-shadow: 0 5px 15px rgba(0,0,0,0.5); overflow: hidden; position: relative;">
                <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 40%);"></div>
                <div style="text-align: center; position: relative; z-index: 10; padding-bottom: 15px;">
                  <h3 style="color: #fff; margin-bottom: 5px; font-size: 1.5rem; text-shadow: 0 2px 10px #000;">${p.id}</h3>
                  <div style="font-size: 0.9rem; color: #ddd; text-shadow: 0 1px 5px #000;">${p.name}</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">
                <button class="btn primary" style="background: ${p.bg}; color: #fff;" data-action="open-pack" data-set="${p.id}" data-amount="1">Abrir 1 Sobre</button>
                <button class="btn outline" style="border-color: ${p.bg}; color: ${p.bg};" data-action="open-pack" data-set="${p.id}" data-amount="12">Abrir 1 Caja (12 Sobres)</button>
              </div>
            </div>
          `).join("")}
        </div>
        <div style="margin-top: 50px; text-align: center; color: var(--text-muted);">
          <p>Total de cartas en tu colección: <b>${Object.values(state.collection).reduce((a,b)=>a+b, 0)}</b></p>
        </div>
      `;
    }

    return `
      <section class="gacha-view-root">
        <div class="section-title">
          <div>
            <h2>Gacha Simulator</h2>
            <p>¡Abre sobres virtuales y consigue cartas para tu colección local!</p>
          </div>
        </div>
        <div class="gacha-view-content">
          ${content}
        </div>
      </section>
    `;
  }

  function renderAudit() {
    return `
      <section>
        <div class="section-title">
          <div>
            <h2>Cambios, fuentes y seguridad</h2>
            <p>Panel pedido para reportar que se hizo, que fuente se uso y como se protege tu computador.</p>
          </div>
        </div>
      </section>
      <section class="grid sidebar-grid">
        <div class="panel">
          <h2>Registro de cambios</h2>
          <div class="source-list">
            ${data.changes.map(renderChangeRow).join("")}
          </div>
        </div>
        <aside class="panel">
          <h2>Postura de seguridad</h2>
          <div class="source-list">
            <div class="source-row">
              <h3>Sin dependencias externas</h3>
              <p>No se usa npm, CDN, trackers, iframes ni scripts remotos.</p>
            </div>
            <div class="source-row">
              <h3>Sin fetch automatico</h3>
              <p>La app no consulta internet. Los links se abren solo por accion del usuario.</p>
            </div>
            <div class="source-row">
              <h3>Datos locales</h3>
              <p>Los mazos se guardan en localStorage del navegador. No hay servidor ni subida de archivos.</p>
            </div>
            <div class="source-row">
              <h3>Codigo de terceros</h3>
              <p>No se copio una libreria externa. Solo se verifico manualmente el esquema HoloDelta desde un archivo fuente MIT.</p>
            </div>
          </div>
        </aside>
      </section>
      <section class="panel">
        <h2>Fuentes registradas</h2>
        <div class="source-list">
          ${data.sources.map(renderSourceRow).join("")}
        </div>
      </section>
      <section class="panel">
        <h2>Conectores planeados</h2>
        <div class="source-list">
          <div class="source-row">
            <h3>Importador oficial cardlist</h3>
            <p>Proximo paso: scraper local revisable para modo texto oficial. Debe ejecutarse manualmente y guardar JSON local.</p>
          </div>
          <div class="source-row">
            <h3>Precios de mercado</h3>
            <p>Proximo paso: conector con API key propia para TCGplayer/TCGAPIs o carga manual CSV. No se hardcodearan credenciales.</p>
          </div>
          <div class="source-row">
            <h3>HoloArchive Chocolat</h3>
            <p>Proximo paso: importar resumen de arquetipos desde texto exportado, manteniendo atribucion y evitando copia masiva.</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderSourceRow(source) {
    return `
      <div class="source-row">
        <h3>${escapeHtml(source.title)}</h3>
        <p>${escapeHtml(source.notes)}</p>
        <div class="source-meta">
          <span class="tag">${escapeHtml(source.type)}</span>
          <span class="tag">${escapeHtml(source.trust)}</span>
          <span class="tag">${escapeHtml(source.status)}</span>
          <a href="${safeUrl(source.url)}" target="_blank" rel="noreferrer noopener">Abrir fuente</a>
        </div>
      </div>
    `;
  }

  function renderChangeRow(change) {
    return `
      <div class="change-row">
        <h3>${escapeHtml(change.title)} <span class="tag">${escapeHtml(change.date)}</span></h3>
        <p>${escapeHtml(change.detail)}</p>
        <div class="source-meta">
          ${(change.files || []).map((file) => `<span class="tag">${escapeHtml(file)}</span>`).join("")}
          ${(change.sources || [])
            .map((id) => data.sources.find((source) => source.id === id))
            .filter(Boolean)
            .map((source) => `<a href="${safeUrl(source.url)}" target="_blank" rel="noreferrer noopener">${escapeHtml(source.title)}</a>`)
            .join("")}
        </div>
      </div>
    `;
  }

  function compareRow(metric, a, b) {
    return `<tr><td>${escapeHtml(metric)}</td><td>${escapeHtml(a)}</td><td>${escapeHtml(b)}</td></tr>`;
  }

  function bloomLine(stats) {
    return `${stats.blooms.Debut || 0} / ${stats.blooms["1st"] || 0} / ${stats.blooms["2nd"] || 0}`;
  }

  function topEntry(obj) {
    return Object.entries(obj || {}).sort((a, b) => b[1] - a[1])[0];
  }

  function option(value, label, selected) {
    return `<option value="${escapeAttr(value)}" ${String(value) === String(selected) ? "selected" : ""}>${escapeHtml(label)}</option>`;
  }

  function colorClass(color) {
    return String(color || "neutral").toLowerCase();
  }

  function slug(value) {
    return String(value || "deck")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "deck";
  }

  function safeUrl(url) {
    const text = String(url || "");
    if (/^https?:\/\//i.test(text)) return escapeAttr(text);
    return "#";
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replaceAll("`", "&#096;");
  }

  // ==========================================
  // HERRAMIENTAS Y VISTAS DE IMPORTACIÓN TEXTO
  // ==========================================

  function renderImporter() {
    return `
      <section>
        <div class="section-title">
          <div>
            <h2>Importador de cartas por texto</h2>
            <p>Copia y pega la información textual de las cartas desde la base de datos oficial (o cualquier otra fuente) para agregarlas al catálogo local offline.</p>
          </div>
        </div>
        <div class="panel">
          <h3>Pegar texto de cartas aquí</h3>
          <textarea id="importer-input" placeholder="Ejemplo:
Card No. hBP01-001
Amane Kanata
Rarity OSR
Card Type Oshi
Color White
Life 5
Text ...
" style="min-height: 180px; font-family: monospace; font-size: 13px;"></textarea>
          <div class="toolbar" style="margin-top: 12px; margin-bottom: 0;">
            <button class="primary" data-action="parse-text">Procesar Texto</button>
            <button data-action="clear-importer">Limpiar</button>
          </div>
          ${state.importerMessage ? `<div class="success-box" style="margin-top:12px;">${escapeHtml(state.importerMessage)}</div>` : ""}
        </div>
      </section>
      
      ${state.parsedCards && state.parsedCards.length > 0 ? renderParsedPreview() : ""}
      
      <section class="panel" style="margin-top: 20px;">
        <h2>Cartas personalizadas guardadas (${customCards.length})</h2>
        <p>Estas son las cartas que has importado y que actualmente están fusionadas con tu catálogo local offline.</p>
        ${customCards.length > 0 ? `
          <div class="source-list" style="margin-top: 14px;">
            <table class="preview-table">
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Color</th>
                  <th>Bloom/Subtipo</th>
                  <th>HP / Vida</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                ${customCards.map(card => `
                  <tr>
                    <td><code>${escapeHtml(card.number)}</code></td>
                    <td><b>${escapeHtml(card.name)}</b></td>
                    <td><span class="tag">${escapeHtml(card.type)}</span></td>
                    <td><span class="tag ${colorClass(card.color)}">${escapeHtml(card.color)}</span></td>
                    <td>${escapeHtml(card.bloom || "-")}</td>
                    <td>${card.type === "Oshi" ? `Vida: ${card.life}` : card.type === "holomem" ? `HP: ${card.hp}` : "-"}</td>
                    <td>
                      <button class="danger" style="min-height: 28px; padding: 2px 8px; font-size: 12px;" data-action="delete-custom-card" data-id="${escapeAttr(card.number)}">Eliminar</button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
            <div class="toolbar" style="margin-top: 14px;">
              <button class="danger" data-action="clear-all-custom">Eliminar Todas las Cartas Personalizadas</button>
            </div>
          </div>
        ` : `<div class="empty">No tienes cartas personalizadas guardadas.</div>`}
      </section>
    `;
  }

  function renderParsedPreview() {
    return `
      <section class="panel" style="margin-top: 20px;">
        <h2>Vista previa de cartas detectadas (${state.parsedCards.length})</h2>
        <p>Revisa y edita los campos si es necesario antes de confirmar la importación.</p>
        <table class="preview-table">
          <thead>
            <tr>
              <th>Número</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Color</th>
              <th>Subtipo / Bloom</th>
              <th>HP / Vida</th>
              <th>Imagen URL (Opcional)</th>
            </tr>
          </thead>
          <tbody>
            ${state.parsedCards.map((card, idx) => `
              <tr>
                <td><input class="preview-edit-input" data-idx="${idx}" data-field="number" value="${escapeAttr(card.number)}" /></td>
                <td><input class="preview-edit-input" data-idx="${idx}" data-field="name" value="${escapeAttr(card.name)}" /></td>
                <td>
                  <select class="preview-edit-input" data-idx="${idx}" data-field="type">
                    ${["holomem", "Oshi", "Support", "Cheer"].map(t => `<option value="${t}" ${card.type === t ? "selected" : ""}>${t}</option>`).join("")}
                  </select>
                </td>
                <td>
                  <select class="preview-edit-input" data-idx="${idx}" data-field="color">
                    ${["White", "Red", "Blue", "Green", "Yellow", "Purple", "Neutral"].map(c => `<option value="${c}" ${card.color === c ? "selected" : ""}>${c}</option>`).join("")}
                  </select>
                </td>
                <td><input class="preview-edit-input" data-idx="${idx}" data-field="bloom" value="${escapeAttr(card.bloom || "")}" placeholder="Debut, 1st, 2nd, Spot, Event..." /></td>
                <td>
                  <input class="preview-edit-input" data-idx="${idx}" data-field="value" value="${card.type === "Oshi" ? card.life : card.hp}" placeholder="HP o Vida" />
                </td>
                <td><input class="preview-edit-input" data-idx="${idx}" data-field="imageUrl" value="${escapeAttr(card.imageUrl || "")}" placeholder="Opcional: URL" /></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        <div class="toolbar" style="margin-top: 14px; margin-bottom: 0;">
          <button class="primary" data-action="save-parsed">Confirmar e Importar al Catálogo</button>
          <button data-action="cancel-parsed">Cancelar</button>
        </div>
      </section>
    `;
  }

  function parseCardText(rawText) {
    const chunks = rawText.split(/\n\s*\n+/);
    const parsed = [];
    
    chunks.forEach(chunk => {
      const lines = chunk.split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length === 0) return;
      
      let number = "";
      let name = "";
      let type = "holomem";
      let color = "Neutral";
      let bloom = "";
      let hp = "";
      let life = "";
      let rarity = "C";
      let textLines = [];
      
      const numRegex = /(h[a-z0-9]+-\d+)/i;
      let numLineIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const m = lines[i].match(numRegex);
        if (m) {
          number = m[1].toUpperCase();
          numLineIndex = i;
          break;
        }
      }
      
      if (!number) return;
      
      const numLine = lines[numLineIndex];
      const cleanNumLine = numLine.replace(numRegex, "").replace(/card\s+no\.?/i, "").replace(/no\.?/i, "").trim().replace(/^[-:\s]+|[-:\s]+$/g, "");
      
      if (cleanNumLine.length > 2) {
        name = cleanNumLine;
      } else {
        if (numLineIndex > 0 && lines[numLineIndex - 1].length > 2 && !lines[numLineIndex - 1].match(/card/i)) {
          name = lines[numLineIndex - 1];
        } else if (numLineIndex < lines.length - 1 && lines[numLineIndex + 1].length > 2 && !lines[numLineIndex + 1].match(/type|color|rarity|life|hp/i)) {
          name = lines[numLineIndex + 1];
        } else {
          name = "Carta Importada " + number;
        }
      }
      
      lines.forEach((line, idx) => {
        const lineLower = line.toLowerCase();
        
        if (lineLower.includes("white")) color = "White";
        else if (lineLower.includes("red")) color = "Red";
        else if (lineLower.includes("blue")) color = "Blue";
        else if (lineLower.includes("green")) color = "Green";
        else if (lineLower.includes("yellow")) color = "Yellow";
        else if (lineLower.includes("purple")) color = "Purple";
        
        if (lineLower.includes("oshi")) type = "Oshi";
        else if (lineLower.includes("cheer") && !lineLower.includes("cheer deck") && !lineLower.includes("cheer card")) type = "Cheer";
        else if (lineLower.includes("support")) type = "Support";
        else if (lineLower.includes("holomem")) type = "holomem";
        
        if (lineLower.includes("debut")) bloom = "Debut";
        else if (lineLower.includes("spot")) bloom = "Spot";
        else if (lineLower.includes("1st")) bloom = "1st";
        else if (lineLower.includes("2nd")) bloom = "2nd";
        
        const hpMatch = line.match(/hp\s*:?\s*(\d+)/i) || line.match(/(\d+)\s*hp/i);
        if (hpMatch) hp = hpMatch[1];
        
        const lifeMatch = line.match(/life\s*:?\s*(\d+)/i) || line.match(/(\d+)\s*life/i);
        if (lifeMatch) life = lifeMatch[1];
        
        const rarities = ["osr", "our", "sec", "ur", "rr", "sr", "r", "u", "c", "p"];
        for (const r of rarities) {
          const rRegex = new RegExp(`\\b${r}\\b`, "i");
          if (lineLower.match(rRegex)) {
            rarity = r.toUpperCase();
            break;
          }
        }
        
        if (idx !== numLineIndex && 
            line !== name && 
            !lineLower.match(/^(card no|rarity|card type|color|life|hp|bloom|level|illustrator|product|expansion|set)\b/i) &&
            !lineLower.includes(color.toLowerCase()) && 
            !lineLower.includes(type.toLowerCase()) && 
            !(bloom && lineLower.includes(bloom.toLowerCase()))) {
          textLines.push(line);
        }
      });
      
      if (type === "Oshi" && !life) {
        const digitMatch = chunk.match(/\b([56])\b/);
        if (digitMatch) life = digitMatch[1];
        else life = "5";
      }
      
      if (type === "holomem" && !hp) {
        const hpDigits = chunk.match(/\b(50|60|70|80|90|100|110|120|130|140|150|160|170|180|190|200|210|220|230|240|250)\b/);
        if (hpDigits) hp = hpDigits[1];
      }
      
      if (number.startsWith("HY") || number.match(/cheer/i)) {
        type = "Cheer";
        color = color === "Neutral" ? "White" : color;
      }
      
      parsed.push({
        id: number,
        number: number,
        name: name.trim(),
        type: type,
        color: color,
        rarity: rarity,
        set: "Importación Manual",
        release: new Date().toLocaleDateString(),
        life: type === "Oshi" ? Number(life || 5) : "",
        tags: ["Importada", type],
        bloom: type === "holomem" ? (bloom || "Debut") : "",
        hp: type === "holomem" ? Number(hp || 100) : "",
        role: type,
        text: textLines.slice(0, 4).join(" ") || "Texto de la carta importada.",
        synergy: "Importada localmente.",
        market: [
          { vendor: "TCGplayer", status: "Buscar por número " + number, url: "https://www.tcgplayer.com/search/hololive-official-card-game/product?q=" + number }
        ],
        artIndex: 0,
        sourceId: "manual-import",
        officialUrl: "https://en.hololive-official-cardgame.com/cardlist/"
      });
    });
    
    return parsed;
  }

  // ==========================================
  // EXPORTADOR E IMPORTADOR DE TEXTO PLANO
  // ==========================================

  function toPlainText(deck) {
    let lines = [];
    lines.push(`// Oshi`);
    if (deck.oshi) {
      const card = getCard(deck.oshi.number);
      lines.push(`1x ${deck.oshi.number} ${card.name}`);
    } else {
      lines.push(`(Ninguno)`);
    }
    lines.push("");
    
    lines.push(`// Main Deck (${countTotal(deck.main)})`);
    deckEntries(deck.main).forEach(entry => {
      lines.push(`${entry.qty}x ${entry.number} ${entry.card.name}`);
    });
    lines.push("");
    
    lines.push(`// Cheer Deck (${countTotal(deck.cheer)})`);
    deckEntries(deck.cheer).forEach(entry => {
      lines.push(`${entry.qty}x ${entry.number} ${entry.card.name}`);
    });
    
    return lines.join("\n");
  }

  function fromPlainText(text) {
    const deck = createDeck("Mazo Importado");
    const lines = text.split("\n").map(l => l.trim()).filter(Boolean);
    
    let currentZone = "main";
    
    lines.forEach(line => {
      if (line.startsWith("//") || line.startsWith("#")) {
        const lower = line.toLowerCase();
        if (lower.includes("oshi")) currentZone = "oshi";
        else if (lower.includes("cheer")) currentZone = "cheer";
        else if (lower.includes("main")) currentZone = "main";
        return;
      }
      
      const m = line.match(/^(\d+)x\s+(h[a-z0-9]+-\d+)/i) || line.match(/^(h[a-z0-9]+-\d+)\s+(\d+)x/i);
      if (m) {
        let qty, number;
        if (m[1].match(/^h/i)) {
          number = m[1].toUpperCase();
          qty = Number(m[2]);
        } else {
          qty = Number(m[1]);
          number = m[2].toUpperCase();
        }
        
        const card = getCard(number);
        if (card.type === "Oshi" || currentZone === "oshi") {
          deck.oshi = { number, artIndex: 0 };
        } else if (card.type === "Cheer" || currentZone === "cheer") {
          deck.cheer[cardKey(number, 0)] = (deck.cheer[cardKey(number, 0)] || 0) + qty;
        } else {
          deck.main[cardKey(number, 0)] = (deck.main[cardKey(number, 0)] || 0) + qty;
        }
      } else {
        const m2 = line.match(/^(h[a-z0-9]+-\d+)/i);
        if (m2) {
          const number = m2[1].toUpperCase();
          const card = getCard(number);
          if (card.type === "Oshi" || currentZone === "oshi") {
            deck.oshi = { number, artIndex: 0 };
          } else if (card.type === "Cheer" || currentZone === "cheer") {
            deck.cheer[cardKey(number, 0)] = (deck.cheer[cardKey(number, 0)] || 0) + 1;
          } else {
            deck.main[cardKey(number, 0)] = (deck.main[cardKey(number, 0)] || 0) + 1;
          }
        }
      }
    });
    
    deck.notes = "Importado desde texto plano.";
    return deck;
  }

  // ==========================================
  // GRÁFICOS VISUALES DE DISTRIBUCIÓN
  // ==========================================

  function renderBloomChart(stats) {
    const debut = stats.blooms.Debut || 0;
    const first = stats.blooms["1st"] || 0;
    const second = stats.blooms["2nd"] || 0;
    const spot = stats.blooms.Spot || 0;
    const total = debut + first + second + spot;
    
    const getPct = (val) => total > 0 ? Math.round((val / total) * 100) : 0;
    
    return `
      <div class="chart-card">
        <h3>Curva de Bloom</h3>
        <div class="bar-chart">
          ${renderChartRow("Debut", debut, getPct(debut), "var(--teal)")}
          ${renderChartRow("Bloom 1st", first, getPct(first), "var(--blue)")}
          ${renderChartRow("Bloom 2nd", second, getPct(second), "var(--purple)")}
          ${renderChartRow("Spot", spot, getPct(spot), "var(--yellow)")}
        </div>
        <p style="font-size:12px; color:var(--muted); margin-top:10px; text-align:center; margin-bottom:0;">
          Distribución de Holomems en juego (${total} cartas)
        </p>
      </div>
    `;
  }

  function renderChartRow(label, count, pct, color) {
    return `
      <div class="bar-chart-row">
        <div class="bar-chart-label">${label}</div>
        <div class="bar-chart-fill-bg">
          <div class="bar-chart-fill" style="width: ${pct}%; background: ${color}; box-shadow: 0 0 8px ${color}55;"></div>
        </div>
        <div class="bar-chart-val">${count}</div>
      </div>
    `;
  }

  function renderColorBalanceChart(stats) {
    const mainColors = {};
    const cheerColors = {};
    
    stats.mainEntries.forEach(entry => {
      const col = entry.card.color;
      mainColors[col] = (mainColors[col] || 0) + entry.qty;
    });
    
    stats.cheerEntries.forEach(entry => {
      const col = entry.card.color;
      cheerColors[col] = (cheerColors[col] || 0) + entry.qty;
    });
    
    const mainTotal = stats.mainTotal || 1;
    const cheerTotal = stats.cheerTotal || 1;
    
    const mainSegments = Object.entries(mainColors).map(([color, qty]) => {
      const pct = Math.round((qty / mainTotal) * 100);
      return { color, qty, pct };
    });
    
    const cheerSegments = Object.entries(cheerColors).map(([color, qty]) => {
      const pct = Math.round((qty / cheerTotal) * 100);
      return { color, qty, pct };
    });
    
    const drawStackBar = (segments) => {
      if (segments.length === 0) return `<div class="empty" style="padding:6px; font-size:11px;">Sin cartas</div>`;
      return `
        <div class="stack-bar">
          ${segments.map(seg => `
            <div class="stack-bar-segment" 
                 style="width: ${seg.pct}%; background: ${colorMap[seg.color] || '#64748b'};"
                 data-tooltip="${seg.color}: ${seg.qty} (${seg.pct}%)">
            </div>
          `).join("")}
        </div>
      `;
    };
    
    const drawLegend = (segments) => {
      return `
        <div class="stack-legend">
          ${segments.map(seg => `
            <div class="stack-legend-item">
              <span class="stack-legend-color" style="background: ${colorMap[seg.color] || '#64748b'};"></span>
              <span>${seg.color}: ${seg.qty}</span>
            </div>
          `).join("")}
        </div>
      `;
    };

    return `
      <div class="chart-card">
        <h3>Balance de color en el mazo</h3>
        
        <p style="font-size:12px; margin-bottom: 6px; font-weight:700;">Mazo Principal (${stats.mainTotal}/50)</p>
        ${drawStackBar(mainSegments)}
        ${drawLegend(mainSegments)}
        
        <p style="font-size:12px; margin-top:14px; margin-bottom: 6px; font-weight:700;">Cheer Deck (${stats.cheerTotal}/20)</p>
        ${drawStackBar(cheerSegments)}
        ${drawLegend(cheerSegments)}
      </div>
    `;
  }

  function renderTypeDistributionChart(stats) {
    const holomems = stats.types.holomem || 0;
    const supports = stats.types.Support || 0;
    const items = stats.supportSubtypes?.Item || 0;
    const events = stats.supportSubtypes?.Event || 0;
    const staff = stats.supportSubtypes?.Staff || 0;
    const others = Math.max(0, supports - (items + events + staff));
    
    const total = holomems + supports;
    const getPct = (val) => total > 0 ? Math.round((val / total) * 100) : 0;
    
    const segments = [];
    if (holomems > 0) segments.push({ label: "Holomem", qty: holomems, pct: getPct(holomems), color: "var(--teal)" });
    if (items > 0) segments.push({ label: "Support: Item", qty: items, pct: getPct(items), color: "var(--yellow)" });
    if (events > 0) segments.push({ label: "Support: Event", qty: events, pct: getPct(events), color: "var(--rose)" });
    if (staff > 0) segments.push({ label: "Support: Staff", qty: staff, pct: getPct(staff), color: "var(--purple)" });
    if (others > 0) segments.push({ label: "Support: Otros", qty: others, pct: getPct(others), color: "var(--neutral)" });
    
    return `
      <div class="chart-card">
        <h3>Distribución de tipos de cartas</h3>
        <div class="stack-bar">
          ${segments.map(seg => `
            <div class="stack-bar-segment" 
                 style="width: ${seg.pct}%; background: ${seg.color};"
                 data-tooltip="${seg.label}: ${seg.qty} (${seg.pct}%)">
            </div>
          `).join("")}
        </div>
        <div class="stack-legend">
          ${segments.map(seg => `
            <div class="stack-legend-item">
              <span class="stack-legend-color" style="background: ${seg.color};"></span>
              <span>${seg.label}: ${seg.qty} (${seg.pct}%)</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderInventoryGrid(deck) {
    const q = (state.builderSearch || "").trim().toLowerCase();
    
    // Strict inventory logic
    const inventory = data.cards.filter(c => {
      // 1. Must own at least 1 copy
      if (!state.collection[c.id] || state.collection[c.id] <= 0) return false;
      // 2. Search filter
      if (q && ![c.name, c.number, c.type, c.color].join(" ").toLowerCase().includes(q)) return false;
      return true;
    });

    if (inventory.length === 0) {
      return `<div class="empty" style="grid-column: 1/-1;">No tienes cartas que coincidan con la búsqueda. ¡Abre sobres en el Gacha Simulator!</div>`;
    }

    return inventory.map(card => {
      const owned = state.collection[card.id] || 0;
      let inDeck = 0;
      const key = cardKey(card.number, 0); // default art
      
      if (deck.main[key]) inDeck += deck.main[key];
      if (deck.cheer[key]) inDeck += deck.cheer[key];
      if (deck.oshi && deck.oshi.number === card.number) inDeck += 1;
      
      const available = owned - inDeck;
      const isDepleted = available <= 0;
      
      const imgUrl = getCardImageUrl(card);
      const fallbacks = getCardImageFallbacks(card);
      if (fallbacks.length > 0) fallbacks.shift();
      const fallbacksJson = escapeAttr(JSON.stringify(fallbacks));
      const rClass = rarityClass(card.rarity);
      const isHighRarity = ["SR", "UR", "OSR", "OUR", "SEC"].includes(card.rarity);
      
      return `
        <div class="card-inventory-item ${isDepleted ? 'depleted' : ''}" 
             data-action="add-card-inventory" data-id="${card.number}" 
             draggable="true" 
             style="position:relative; cursor:pointer;"
             title="${escapeAttr(card.name)} (${card.number})">
             
          <div class="inventory-detail-btn" data-action="select-card" data-id="${card.id}" title="Ver detalles">
            i
          </div>
          
          <div class="card-copies-badge ${isDepleted ? 'depleted-badge' : ''}">x${available}</div>
          
          <div class="card-3d-wrapper ${isHighRarity ? 'glow-effect' : ''}" style="--card-color: ${colorMap[card.color] || '#78709e'}; width: 100%;">
            <div class="card-3d-content rarity-${rClass}">
              <img src="${imgUrl}" alt="${escapeHtml(card.name)}" data-fallbacks="${fallbacksJson}" onerror="handleImageError(this)" loading="lazy" style="width: 100%; height: auto; border-radius: 12px; display: block;" />
              <div class="card-foil"></div>
              <div class="card-fallback-frame" style="display: none;">
                <span>${escapeHtml(card.rarity.split(" ")[0])}</span>
                <strong>${escapeHtml(card.name)}</strong>
                <span>${escapeHtml(card.number.replace(/^h/, ""))}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

})();
