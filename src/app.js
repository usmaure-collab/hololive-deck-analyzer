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
        img.src = nextUrl;
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

  const tabs = [
    ["dashboard", "Panel"],
    ["library", "Cartas"],
    ["builder", "Builder"],
    ["analysis", "Analisis"],
    ["compare", "Comparar"],
    ["importer", "Importar"],
    ["audit", "Cambios"],
  ];

  const colorMap = {
    White: "#1e293b",
    Red: "#7f1d1d",
    Blue: "#1e3a8a",
    Green: "#064e3b",
    Yellow: "#78350f",
    Purple: "#581c87",
    Neutral: "#334155",
  };

  const state = loadState();

  render();

  app.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;
    const zone = target.dataset.zone;
    const artIndex = Number(target.dataset.art || "0");

    if (action === "tab") {
      state.tab = id;
      render();
      return;
    }

    if (action === "select-card") {
      state.selectedCard = id;
      state.selectedArtIdx = 0;
      render();
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
      state.filters.search = target.value;
      const gridEl = document.getElementById("catalog-card-grid");
      if (gridEl) {
        gridEl.innerHTML = filteredCards().map(renderCard).join("") || `<div class="empty">No hay cartas con esos filtros.</div>`;
      }
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
      render();
      return;
    }

    if (action === "filter-color") {
      state.filters.color = target.value;
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

  app.addEventListener("drop", (event) => {
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
      tab: "dashboard",
      activeDeckId: fallbackDeck.id,
      decks: [fallbackDeck],
      selectedCard: data.cards[0]?.id || "",
      filters: { search: "", type: "All", color: "All" },
      ui: { catalogDetailMinimized: false },
      compareA: fallbackDeck.id,
      compareB: fallbackDeck.id,
      importText: "",
      importMessage: "",
      exportText: "",
      importerText: "",
      importerMessage: "",
      parsedCards: [],
      builderSearch: "",
    };

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const parsed = JSON.parse(raw);
      const decks = Array.isArray(parsed.decks) && parsed.decks.length ? parsed.decks : [fallbackDeck];
      return {
        ...base,
        ...parsed,
        ui: parsed.ui || base.ui,
        decks,
        activeDeckId: decks.some((deck) => deck.id === parsed.activeDeckId)
          ? parsed.activeDeckId
          : decks[0].id,
        compareA: decks.some((deck) => deck.id === parsed.compareA) ? parsed.compareA : decks[0].id,
        compareB: decks.some((deck) => deck.id === parsed.compareB) ? parsed.compareB : decks[0].id,
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
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(safe));
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
        set: "No esta en la base local",
        release: "",
        tags: ["Importada"],
        text: "Esta carta fue importada desde JSON, pero aun no esta en el catalogo local.",
        synergy: "Importa la base completa o agrega esta carta al catalogo para analizarla mejor.",
        market: [],
        variants: [{ rarity: "Unknown", artIndex: 0, note: "Importada" }],
        sourceId: "manual-import",
        officialUrl: "https://en.hololive-official-cardgame.com/cardlist/",
      }
    );
  }

  function getCardImageUrl(card, artIndex = 0) {
    if (card.imageUrl) return card.imageUrl;
    const fallbacks = getCardImageFallbacks(card, artIndex);
    return fallbacks.length > 0 ? fallbacks[0] : "";
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
    
    // Mapeo de Cheers alternos (ej. hY01-003, hY02-002) a su base hY0X-001
    if (num.match(/^hY0[1-6]-00[2-9]$/)) {
      num = num.substring(0, 5) + "001";
    }
    
    const parts = num.split("-");
    if (parts.length < 2) return [];
    
    const set = parts[0];
    let declaredRarity = String(card.rarity || "C").split("/")[0].trim();
    if (card.variants && card.variants[artIndex]) {
      declaredRarity = String(card.variants[artIndex].rarity || declaredRarity).split("/")[0].trim();
    }
    
    // Lista de sufijos comunes de rarezas para probar
    const suffixes = [declaredRarity, "C", "U", "R", "RR", "SR", "OSR", "OUR", "SEC", "P", ""];
    const uniqueSuffixes = [...new Set(suffixes)];
    
    const urls = [];
    
    // 1. Probar en subdominio inglés (EN_), carpeta de set
    uniqueSuffixes.forEach(s => {
      const suffixStr = s ? `_${s}` : "";
      urls.push(`https://en.hololive-official-cardgame.com/wp-content/images/cardlist/${set}/EN_${num}${suffixStr}.png`);
    });
    
    // 2. Probar en subdominio inglés (EN_), carpeta COMMON
    uniqueSuffixes.forEach(s => {
      const suffixStr = s ? `_${s}` : "";
      urls.push(`https://en.hololive-official-cardgame.com/wp-content/images/cardlist/COMMON/EN_${num}${suffixStr}.png`);
    });
    
    // 3. Probar en sitio japonés (sin EN_), carpeta de set
    uniqueSuffixes.forEach(s => {
      const suffixStr = s ? `_${s}` : "";
      urls.push(`https://hololive-official-cardgame.com/wp-content/images/cardlist/${set}/${num}${suffixStr}.png`);
    });
    
    // 4. Probar en sitio japonés (sin EN_), carpeta COMMON
    uniqueSuffixes.forEach(s => {
      const suffixStr = s ? `_${s}` : "";
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

  function addCard(number, zone, artIndex = 0) {
    const deck = activeDeck();
    const card = getCard(number);
    const key = cardKey(number, artIndex);

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

    const deck = activeDeck();
    const stats = deckStats(deck);
    app.innerHTML = `
      ${renderHeader(deck, stats)}
      <div class="layout">
        <aside class="sidebar">
          <nav class="nav-list" aria-label="Secciones">
            ${tabs
              .map(
                ([id, label]) => `
                  <button class="tab-button ${state.tab === id ? "active" : ""}" data-action="tab" data-id="${id}">
                    <span>${escapeHtml(label)}</span>
                    <span>${tabBadge(id, stats)}</span>
                  </button>
                `,
              )
              .join("")}
          </nav>
          <div class="sidebar-note">
            Datos offline. Los links de mercado y oficiales se abren solo cuando tu haces clic.
          </div>
        </aside>
        <main class="main">
          ${renderTab(deck, stats)}
        </main>
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
    const selected = getCard(state.selectedCard || cards[0]?.id || data.cards[0].id);
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
        </div>
      </section>
      <section class="grid sidebar-grid">
        <div id="catalog-card-grid" class="card-grid">
          ${cards.map(renderCard).join("") || `<div class="empty">No hay cartas con esos filtros.</div>`}
        </div>
        <aside class="panel ${state.ui.catalogDetailMinimized ? "minimized" : ""}">
          ${state.ui.catalogDetailMinimized 
            ? `<button class="btn primary outline" data-action="toggle-catalog-detail">Expandir Detalles</button>
               ${selected ? `<h3 style="margin-top: 10px; font-size: 0.9em; text-align: center;">${escapeHtml(selected.name)}</h3>` : ""}`
            : `<div style="display: flex; justify-content: flex-end; margin-bottom: -15px; position: relative; z-index: 2;">
                 <button class="btn small outline" data-action="toggle-catalog-detail" style="padding: 4px 10px; font-size: 0.8em; cursor: pointer;">Minimizar Panel</button>
               </div>
               ${renderCardDetail(selected)}`
          }
        </aside>
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
      return matchesQuery && matchesType && matchesColor;
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

  function renderCardFrame(card, artIndex = 0) {
    const imgUrl = getCardImageUrl(card, artIndex);
    const fallbacks = getCardImageFallbacks(card, artIndex);
    if (fallbacks.length > 0) fallbacks.shift();
    const fallbacksJson = escapeAttr(JSON.stringify(fallbacks));
    const rClass = rarityClass(card.rarity);
    return `
      <div class="card-frame rarity-${rClass}" style="--card-color: ${colorMap[card.color] || colorMap.Neutral}">
        <img src="${imgUrl}" alt="${escapeHtml(card.name)}" data-fallbacks="${fallbacksJson}" onerror="handleImageError(this)" style="width: 100%; height: 100%; object-fit: cover;" />
        <div class="card-fallback-frame" style="display: none;">
          <span>${escapeHtml(card.rarity.split(" ")[0])}</span>
          <strong>${escapeHtml(card.name)}</strong>
          <span>${escapeHtml(card.number.replace(/^h/, ""))}</span>
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
    const artIndex = state.selectedArtIdx !== undefined ? state.selectedArtIdx : 0;
    const imgUrl = getCardImageUrl(card, artIndex);
    const fallbacks = getCardImageFallbacks(card, artIndex);
    if (fallbacks.length > 0) fallbacks.shift();
    const fallbacksJson = escapeAttr(JSON.stringify(fallbacks));
    
    let rClass = rarityClass(card.rarity);
    if (card.variants && card.variants[artIndex]) {
      rClass = rarityClass(card.variants[artIndex].rarity);
    }
    
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
        </div>
        <div class="grid">
          <div>
            <div class="meta-line">
              <span class="tag ${colorClass(card.color)}">${escapeHtml(card.color)}</span>
              <span class="tag">${escapeHtml(card.rarity)}</span>
              ${card.hp ? `<span class="tag">HP ${escapeHtml(card.hp)}</span>` : ""}
              ${card.life ? `<span class="tag">Life ${escapeHtml(card.life)}</span>` : ""}
              ${card.bloom ? `<span class="tag">${escapeHtml(card.bloom)}</span>` : ""}
            </div>
            <p><b>Texto/resumen:</b> ${escapeHtml(card.text)}</p>
            <p><b>Sinergia:</b> ${escapeHtml(card.synergy)}</p>
            <p><b>Tags:</b> ${(card.tags || []).map(escapeHtml).join(", ") || "Sin tags"}</p>
          </div>
          <div>
            <h3>Artes y rarezas</h3>
            <div class="source-list">
              ${(card.variants || []).map((variant) => {
                const isSelected = artIndex === Number(variant.artIndex || 0);
                return `
                  <div class="source-row" style="${isSelected ? 'border-left: 3px solid #6366f1; background: rgba(99, 102, 241, 0.1); padding-left: 8px;' : ''}">
                    <div>
                      <strong style="color: #fff; font-size: 13px;">${escapeHtml(variant.rarity)}</strong>
                      <span style="font-size: 11px; color: #a1a1aa; margin-left: 6px;">Art #${Number(variant.artIndex || 0)}</span>
                    </div>
                    <p style="font-size: 12px; margin: 4px 0 8px 0;">${escapeHtml(variant.note || "")}</p>
                    <div class="source-meta" style="display: flex; gap: 8px;">
                      <button data-action="select-art" data-art="${Number(variant.artIndex || 0)}" class="${isSelected ? 'primary' : ''}">Ver Arte</button>
                      ${card.type === "Oshi"
                        ? `<button data-action="add-card" data-zone="oshi" data-id="${escapeAttr(card.id)}" data-art="${Number(variant.artIndex || 0)}">Usar esta arte</button>`
                        : card.type === "Cheer"
                          ? `<button data-action="add-card" data-zone="cheer" data-id="${escapeAttr(card.id)}" data-art="${Number(variant.artIndex || 0)}">+ Cheer</button>`
                          : `<button data-action="add-card" data-zone="main" data-id="${escapeAttr(card.id)}" data-art="${Number(variant.artIndex || 0)}">+ Main</button>`
                      }
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
          <div>
            <h3>Mercado</h3>
            <div class="source-list">
              ${(card.market || []).map((market) => `
                <div class="source-row">
                  <h3>${escapeHtml(market.vendor)}</h3>
                  <p>${escapeHtml(market.status)}</p>
                  <div class="source-meta"><a href="${safeUrl(market.url)}" target="_blank" rel="noreferrer noopener">Abrir referencia</a></div>
                </div>
              `).join("") || `<div class="empty">Sin mercado registrado.</div>`}
            </div>
          </div>
          <div>
            <h3>Fuente</h3>
            <p>${source ? escapeHtml(source.title) : "Import/manual"} - <a href="${safeUrl(card.officialUrl)}" target="_blank" rel="noreferrer noopener">ver carta/fuente</a></p>
          </div>
        </div>
      </div>
    `;
  }

  function renderBuilder(deck, stats) {
    const exportText = state.exportText || JSON.stringify(toHoloDelta(deck), null, 2);
    return `
      <section>
        <div class="section-title">
          <div>
            <h2>Creación de mazos</h2>
            <p>Un deck de hOCG tiene 1 Oshi, main deck de 50 y cheer deck de 20.</p>
          </div>
          <div class="top-actions">
            <button data-action="duplicate-deck">Duplicar</button>
            <button class="danger" data-action="delete-deck" ${state.decks.length === 1 ? "disabled" : ""}>Eliminar</button>
          </div>
        </div>
        <div class="toolbar">
          <div class="field">
            <label for="activeDeck">Deck activo</label>
            <select id="activeDeck" data-change="active-deck">
              ${state.decks.map((item) => option(item.id, item.name, state.activeDeckId)).join("")}
            </select>
          </div>
          <div class="field grow">
            <label for="deckName">Nombre</label>
            <input id="deckName" data-input="deck-name" value="${escapeAttr(deck.name)}" />
          </div>
        </div>
      </section>

      <section class="grid sidebar-grid">
        <div class="panel">
          <h2>Lista</h2>
          ${renderWarnings(stats.warnings)}
          <div class="grid" style="margin-top: 14px">
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
        </div>
        <aside class="panel">
          <h2>Buscador Rápido (Arrastrar)</h2>
          <p style="font-size:12px; color:var(--muted); margin-bottom:8px;">Busca y arrastra cartas directamente a tu mazo.</p>
          <div class="field" style="margin-bottom: 12px;">
            <input type="text" data-input="builder-search" placeholder="Escribe para buscar..." style="min-height: 36px;" />
          </div>
          <div class="quick-card-list" id="builder-quick-cards" style="margin-bottom: 20px;">
            ${renderQuickCardItems(state.builderSearch || "")}
          </div>
          <hr />
          <h2>Notas</h2>
          <textarea data-input="deck-notes" placeholder="Plan de juego, matchup notes, proxies, compras pendientes...">${escapeHtml(deck.notes || "")}</textarea>
          <hr />
          <h2>Exportar Mazo</h2>
          <div class="toolbar">
            <button class="primary" data-action="export-json">HoloDelta JSON</button>
            <button class="primary" data-action="export-text">Texto Plano</button>
            <button data-action="download-json">Descargar JSON</button>
          </div>
          <pre class="codebox">${escapeHtml(exportText)}</pre>
          
          <h2>Importar Mazo</h2>
          <p style="font-size:12px; color:var(--muted); margin-bottom:8px;">Pega un JSON de HoloDelta o una lista de texto plano (ej. 4x hBP01-010).</p>
          <textarea data-input="import-text" placeholder='Pega aquí tu JSON HoloDelta o lista de texto' style="min-height: 100px;"></textarea>
          <div class="toolbar" style="margin-top: 10px;">
            <button class="primary" data-action="import-any">Importar Mazo</button>
            <button data-action="clear-import">Limpiar</button>
          </div>
          ${state.importMessage ? `<div class="success-box">${escapeHtml(state.importMessage)}</div>` : ""}
        </aside>
      </section>
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
        variants: [{ rarity: rarity, artIndex: 0, note: "Importada" }],
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

  function renderQuickCardItems(query = "") {
    const q = query.trim().toLowerCase();
    const filtered = data.cards.filter(c => 
      !q || [c.name, c.number, c.type, c.color].join(" ").toLowerCase().includes(q)
    ).slice(0, 24);
    
    if (filtered.length === 0) {
      return `<div class="empty" style="grid-column: 1/-1; padding: 12px; font-size:12px;">Sin resultados.</div>`;
    }
    
    return filtered.map(card => {
      const imgUrl = getCardImageUrl(card);
      const fallbacks = getCardImageFallbacks(card);
      if (fallbacks.length > 0) fallbacks.shift();
      const fallbacksJson = escapeAttr(JSON.stringify(fallbacks));
      const rClass = rarityClass(card.rarity);
      return `
        <div class="quick-card-item" draggable="true" data-id="${card.id}" title="${escapeAttr(card.name)} (${card.number})">
          <div class="quick-card-frame rarity-${rClass}" style="--card-color: ${colorMap[card.color] || '#78709e'}">
            <img src="${imgUrl}" alt="${escapeHtml(card.name)}" data-fallbacks="${fallbacksJson}" onerror="handleImageError(this)" />
            <div class="card-fallback-frame" style="display: none; padding: 4px; font-size: 8px; flex-direction: column; justify-content: center; height: 100%; text-align: center; color: #fff;">
              <strong>${escapeHtml(card.name.slice(0,8))}</strong>
              <span>${escapeHtml(card.number)}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

})();
