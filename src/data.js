window.HOCG_DATA = {
  "metadata": {
    "generatedOn": "2026-07-12",
    "appVersion": "0.9.0",
    "note": "Base de datos expandida a 265 cartas. Integra el Booster Pack 2 – Quintet Spectrum (hBP02) y corrige visualización de Cheers."
  },
  "rules": {
    "mainDeckSize": 50,
    "cheerDeckSize": 20,
    "oshiRequired": 1,
    "defaultCopyLimit": 4,
    "cheerCopyLimit": 20,
    "activeRestricted": {
      "effective": "2026-04-17",
      "cards": {
        "hBP01-030": 1
      },
      "sourceId": "official-restricted-en"
    }
  },
  "sources": [
    {
      "id": "official-card-list-en",
      "title": "Card List oficial EN",
      "type": "Oficial",
      "trust": "Alta",
      "status": "Usar como fuente primaria de cartas",
      "url": "https://en.hololive-official-cardgame.com/cardlist/",
      "notes": "Pagina oficial con filtros por set, tipo, rareza, bloom y busqueda."
    }
  ],
  "changes": [
    {
      "date": "2026-07-05",
      "title": "Expansion Masiva de Variantes, Mascotas y Fans",
      "detail": "Se agregaron variantes UR/SEC para Mumei, Kiara, Kanata, Aki, Pekora, Lui y Kobo. Se completo la linea de Kobo y se agregaron las mascotas/fans de la 116 a la 125.",
      "files": [
        "src/data.js"
      ],
      "sources": [
        "official-card-list-en"
      ]
    },
    {
      "date": "2026-07-12",
      "title": "Integracion de Booster Pack 2: Quintet Spectrum",
      "detail": "Se integraron las 115 cartas de hBP02 y se soluciono el foco de la barra de busqueda y los fallbacks de imagenes Cheer.",
      "files": [
        "src/data.js",
        "src/app.js"
      ],
      "sources": [
        "official-card-list-en"
      ]
    }
  ],
  "archetypes": [
    {
      "id": "kanata-gen4",
      "name": "Kanata Gen 4 Aggro",
      "colors": [
        "White",
        "Red"
      ],
      "focus": "Presion temprana con debuts de Gen 4 y boosts en collab.",
      "early": "High",
      "late": "Medium",
      "difficulty": "Medium",
      "consistency": "Medium",
      "keyCards": [
        "hBP01-001",
        "hBP01-010",
        "hBP01-014"
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "suisei-gen0",
      "name": "Suisei Gen 0 Sniper",
      "colors": [
        "Blue",
        "Red"
      ],
      "focus": "Dano distribuido a la retaguardia (back-stage) enemiga.",
      "early": "Medium",
      "late": "High",
      "difficulty": "Medium-High",
      "consistency": "High",
      "keyCards": [
        "hBP01-007",
        "hBP01-076",
        "hBP01-081"
      ],
      "sourceId": "official-card-list-en"
    }
  ],
  "cards": [
    {
      "id": "hY01-001",
      "number": "hY01-001",
      "name": "White Cheer",
      "type": "Cheer",
      "color": "White",
      "rarity": "C",
      "set": "Start Cheer Set",
      "release": "2025-07-11 EN",
      "tags": [
        "Cheer"
      ],
      "text": "Produce 1 Cheer blanco.",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "Common (Estándar)"
        },
        {
          "rarity": "SY",
          "artIndex": 1,
          "note": "Special Yell (Holográfica)"
        }
      ]
    },
    {
      "id": "hY02-001",
      "number": "hY02-001",
      "name": "Green Cheer",
      "type": "Cheer",
      "color": "Green",
      "rarity": "C",
      "set": "Start Cheer Set",
      "release": "2025-07-11 EN",
      "tags": [
        "Cheer"
      ],
      "text": "Produce 1 Cheer verde.",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "Common (Estándar)"
        },
        {
          "rarity": "SY",
          "artIndex": 1,
          "note": "Special Yell (Holográfica)"
        }
      ]
    },
    {
      "id": "hY03-001",
      "number": "hY03-001",
      "name": "Red Cheer",
      "type": "Cheer",
      "color": "Red",
      "rarity": "C",
      "set": "Start Cheer Set",
      "release": "2025-07-11 EN",
      "tags": [
        "Cheer"
      ],
      "text": "Produce 1 Cheer rojo.",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "Common (Estándar)"
        },
        {
          "rarity": "SY",
          "artIndex": 1,
          "note": "Special Yell (Holográfica)"
        }
      ]
    },
    {
      "id": "hY04-001",
      "number": "hY04-001",
      "name": "Blue Cheer",
      "type": "Cheer",
      "color": "Blue",
      "rarity": "C",
      "set": "Start Cheer Set",
      "release": "2025-07-11 EN",
      "tags": [
        "Cheer"
      ],
      "text": "Produce 1 Cheer azul.",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "Common (Estándar)"
        },
        {
          "rarity": "SY",
          "artIndex": 1,
          "note": "Special Yell (Holográfica)"
        }
      ]
    },
    {
      "id": "hY05-001",
      "number": "hY05-001",
      "name": "Purple Cheer",
      "type": "Cheer",
      "color": "Purple",
      "rarity": "C",
      "set": "Start Cheer Set",
      "release": "2025-07-11 EN",
      "tags": [
        "Cheer"
      ],
      "text": "Produce 1 Cheer morado.",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "Common (Estándar)"
        },
        {
          "rarity": "SY",
          "artIndex": 1,
          "note": "Special Yell (Holográfica)"
        }
      ]
    },
    {
      "id": "hY06-001",
      "number": "hY06-001",
      "name": "Colorless Cheer",
      "type": "Cheer",
      "color": "Neutral",
      "rarity": "C",
      "set": "Start Cheer Set",
      "release": "2025-07-11 EN",
      "tags": [
        "Cheer"
      ],
      "text": "Produce 1 Cheer incoloro.",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "Common (Estándar)"
        }
      ]
    },
    {
      "id": "hBP01-001",
      "number": "hBP01-001",
      "name": "Amane Kanata",
      "type": "Oshi",
      "color": "White",
      "rarity": "OSR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "JP",
        "Gen 4",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Oshi de Potencial",
      "text": "Oshi blanca. Aumenta la fuerza de Arts del centro en combates clave.",
      "synergy": "Funciona perfectamente con lineas blancas y debut/2nd Kanata.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hBP01-002",
      "number": "hBP01-002",
      "name": "Nanashi Mumei",
      "type": "Oshi",
      "color": "Yellow",
      "rarity": "OSR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "EN",
        "Promise",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Oshi de Consistencia",
      "text": "Oshi amarilla. Habilidades de robo acelerado y busqueda de holomems en deck.",
      "synergy": "Excelente con Mumei Debut y 2nd Bloom.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hBP01-003",
      "number": "hBP01-003",
      "name": "Aki Rosenthal",
      "type": "Oshi",
      "color": "Green",
      "rarity": "OSR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "JP",
        "Gen 1",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Oshi de Control y Rampa",
      "text": "Oshi verde. Permite acelerar energias Cheer verdes hacia tu stage.",
      "synergy": "Combina muy bien con Iofi y barajas de control de Cheers.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hBP01-004",
      "number": "hBP01-004",
      "name": "Usada Pekora",
      "type": "Oshi",
      "color": "Blue",
      "rarity": "OSR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "JP",
        "Gen 3",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Oshi de Tempo e Interrupcion",
      "text": "Oshi azul. Devuelve cartas enemigas a la mano o interrumpe Cheers del rival.",
      "synergy": "Excelente con la linea Pekora Sniper/Bounces.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hBP01-005",
      "number": "hBP01-005",
      "name": "Takane Lui",
      "type": "Oshi",
      "color": "Red",
      "rarity": "OSR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "JP",
        "HoloX",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Oshi de Dano Directo",
      "text": "Oshi roja. Incrementa el dano de Arts rojas a holomems cansadas.",
      "synergy": "Perfecto para barajas aggro rojas.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hBP01-006",
      "number": "hBP01-006",
      "name": "Takanashi Kiara",
      "type": "Oshi",
      "color": "Red",
      "rarity": "OSR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "EN",
        "Myth",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Recursion desde Archive",
      "text": "Oshi roja. Recupera holomems del archive y mitiga el dano a tu vida.",
      "synergy": "Combina de forma excelente con Kiara y cartas de descarte.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Firmada)"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hBP01-007",
      "number": "hBP01-007",
      "name": "Hoshimachi Suisei",
      "type": "Oshi",
      "color": "Blue",
      "rarity": "OSR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "JP",
        "Gen 0",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Oshi de Control",
      "text": "Oshi azul. Presiona la retaguardia enemiga retirando Cheers o haciendo sniper.",
      "synergy": "Perfecto para el arquetipo Suisei Sniper azul.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Firmada)"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hBP01-008",
      "number": "hBP01-008",
      "name": "Kobo Kanaeru",
      "type": "Oshi",
      "color": "Blue",
      "rarity": "OSR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "ID",
        "ID Gen 3",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Oshi de Resistencia",
      "text": "Oshi azul. Permite colocar escudos y mitigar dano a tus holomems en Stage.",
      "synergy": "Clave para barajas lentas y duraderas.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hSD01-001",
      "number": "hSD01-001",
      "name": "Tokino Sora",
      "type": "Oshi",
      "color": "White",
      "rarity": "OSR",
      "set": "Start Deck 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "JP",
        "Gen 0",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Oshi de Consistencia",
      "text": "Oshi blanca. Permite buscar recursos o curar holomems de tu escenario.",
      "synergy": "Combina muy bien con cartas de Sora de Start Deck y Booster 1.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hSD01-002",
      "number": "hSD01-002",
      "name": "AZKi",
      "type": "Oshi",
      "color": "Green",
      "rarity": "OSR",
      "set": "Start Deck 1",
      "release": "2025-07-11 EN",
      "life": 5,
      "tags": [
        "JP",
        "Gen 0",
        "Oshi"
      ],
      "bloom": "",
      "hp": "",
      "role": "Oshi de Tempo",
      "text": "Oshi verde. Aumenta el ratio de robo o acelera la preparacion de Cheers.",
      "synergy": "Ideal para mazos rapidos de AZKi.",
      "market": [
        {
          "vendor": "TCGplayer",
          "status": "Referencia",
          "url": "https://www.tcgplayer.com/"
        }
      ],
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Rare"
        }
      ],
      "sourceId": "official-card-list-en"
    },
    {
      "id": "hBP01-009",
      "number": "hBP01-009",
      "name": "Amane Kanata",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 4",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 90,
      "text": "Arts: KonKanata~ (40 damage, solo al center). Puedes tener cualquier cantidad de copias.",
      "market": []
    },
    {
      "id": "hBP01-010",
      "number": "hBP01-010",
      "name": "Amane Kanata",
      "type": "holomem",
      "color": "White",
      "rarity": "U",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "tags": [
        "JP",
        "Gen 4",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si el centro es Gen 4, el centro gana Arts +10.",
      "synergy": "Indispensable para Kanata.",
      "market": []
    },
    {
      "id": "hBP01-011",
      "number": "hBP01-011",
      "name": "Amane Kanata",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "tags": [
        "JP",
        "Gen 4",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Bloom: Roba 1 carta si tu Oshi es Kanata.",
      "synergy": "Acelera el combo.",
      "market": []
    },
    {
      "id": "hBP01-012",
      "number": "hBP01-012",
      "name": "Amane Kanata",
      "type": "holomem",
      "color": "White",
      "rarity": "U",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "tags": [
        "JP",
        "Gen 4",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Hace 50 de dano con 2 Cheers blancas.",
      "synergy": "Estadistica defensiva.",
      "market": []
    },
    {
      "id": "hBP01-013",
      "number": "hBP01-013",
      "name": "Amane Kanata",
      "type": "holomem",
      "color": "White",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 4",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Gana Arts +20 si el oponente tiene mas vida.",
      "synergy": "Remontadas ofensivas.",
      "market": []
    },
    {
      "id": "hBP01-014",
      "number": "hBP01-014",
      "name": "Amane Kanata",
      "type": "holomem",
      "color": "White",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "tags": [
        "JP",
        "Gen 4",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 200,
      "text": "Arts: Hace 90 de dano base. Collab: Castiga con dano extra a holomems con dano acumulado.",
      "synergy": "Apoyado por Oshi Kanata para lograr KOs en un solo golpe.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "Double Rare (Diseño foil base)"
        },
        {
          "rarity": "UR",
          "artIndex": 1,
          "note": "Ultra Rare (Ilustración alternativa sin bordes)"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Ilustración alternativa especial)"
        }
      ],
      "market": []
    },
    {
      "id": "hBP01-015",
      "number": "hBP01-015",
      "name": "Nanashi Mumei",
      "type": "holomem",
      "color": "Yellow",
      "rarity": "C",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "tags": [
        "EN",
        "Promise",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tu Oshi es Mumei, revela las 3 primeras cartas de tu deck y ordena 1 en mano.",
      "synergy": "Consistencia excelente para buscar soportes early.",
      "market": []
    },
    {
      "id": "hBP01-016",
      "number": "hBP01-016",
      "name": "Nanashi Mumei",
      "type": "holomem",
      "color": "Yellow",
      "rarity": "U",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "tags": [
        "EN",
        "Promise",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Arts: Hace 20 de dano.",
      "synergy": "Debut con mayor cantidad de HP.",
      "market": []
    },
    {
      "id": "hBP01-017",
      "number": "hBP01-017",
      "name": "Nanashi Mumei",
      "type": "holomem",
      "color": "Yellow",
      "rarity": "C",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "tags": [
        "EN",
        "Promise",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Coloca 1 Cheer amarillo desde el deck al entrar.",
      "synergy": "Rampa rapido.",
      "market": []
    },
    {
      "id": "hBP01-018",
      "number": "hBP01-018",
      "name": "Nanashi Mumei",
      "type": "holomem",
      "color": "Yellow",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Arts: Hace 40 dano con 2 Cheers amarillas.",
      "synergy": "Estadistica basica oficial.",
      "market": []
    },
    {
      "id": "hBP01-019",
      "number": "hBP01-019",
      "name": "Nanashi Mumei",
      "type": "holomem",
      "color": "Yellow",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Habilidad: Roba 1 carta al entrar.",
      "synergy": "Motor de robo adicional.",
      "market": []
    },
    {
      "id": "hBP01-020",
      "number": "hBP01-020",
      "name": "Nanashi Mumei",
      "type": "holomem",
      "color": "Yellow",
      "rarity": "SR",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "tags": [
        "EN",
        "Promise",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 180,
      "text": "Arts: Hace 100 de dano base. Collab: Si tienes a Kronii en stage, hace +30 de dano.",
      "synergy": "Muy fuerte en mazos hibridos de Promise.",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "Super Rare (Diseño foil base)"
        },
        {
          "rarity": "SEC",
          "artIndex": 1,
          "note": "Secret Rare (Ilustración alternativa Full Art)"
        }
      ],
      "market": []
    },
    {
      "id": "hBP01-021",
      "number": "hBP01-021",
      "name": "Tokino Sora",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tu Oshi es Sora, roba 1 carta.",
      "market": []
    },
    {
      "id": "hSD01-004",
      "number": "hSD01-004",
      "name": "Tokino Sora",
      "type": "holomem",
      "color": "White",
      "rarity": "R",
      "set": "Start Deck 1",
      "tags": [
        "JP",
        "Gen 0",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Cura 20 de dano a una de tus holomems al entrar.",
      "market": []
    },
    {
      "id": "hSD01-005",
      "number": "hSD01-005",
      "name": "Tokino Sora",
      "type": "holomem",
      "color": "White",
      "rarity": "U",
      "set": "Start Deck 1",
      "tags": [
        "JP",
        "Gen 0",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Hace 50 de dano con 2 Cheers blancas.",
      "market": []
    },
    {
      "id": "hSD01-006",
      "number": "hSD01-006",
      "name": "Tokino Sora",
      "type": "holomem",
      "color": "White",
      "rarity": "RR",
      "set": "Start Deck 1",
      "tags": [
        "JP",
        "Gen 0",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 200,
      "text": "Arts: Hace 100 de dano.",
      "market": []
    },
    {
      "id": "hBP01-022",
      "number": "hBP01-022",
      "name": "Tokino Sora",
      "type": "holomem",
      "color": "White",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "1st"
      ],
      "bloom": "1st",
      "hp": 110,
      "text": "Bloom: Roba 1 carta. Arts: Hace 40 de dano.",
      "market": []
    },
    {
      "id": "hBP01-023",
      "number": "hBP01-023",
      "name": "Tokino Sora",
      "type": "holomem",
      "color": "White",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 210,
      "text": "Collab: Roba 2 cartas. Arts: Hace 80 de dano.",
      "market": []
    },
    {
      "id": "hBP01-024",
      "number": "hBP01-024",
      "name": "Vestia Zeta",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 100,
      "text": "Arts: Hace 30 de dano. Puedes incluir cualquier cantidad de copias.",
      "market": []
    },
    {
      "id": "hBP01-025",
      "number": "hBP01-025",
      "name": "Vestia Zeta",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "1st"
      ],
      "bloom": "1st",
      "hp": 160,
      "text": "Arts 1: Hace 40 dano. Arts 2: Hace 60 dano.",
      "market": []
    },
    {
      "id": "hBP01-026",
      "number": "hBP01-026",
      "name": "Vestia Zeta",
      "type": "holomem",
      "color": "White",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "1st"
      ],
      "bloom": "1st",
      "hp": 110,
      "text": "Bloom: Busca una holomem ID Gen 3 Debut o 1st y anadela a tu mano.",
      "market": []
    },
    {
      "id": "hBP01-027",
      "number": "hBP01-027",
      "name": "Vestia Zeta",
      "type": "holomem",
      "color": "White",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "1st"
      ],
      "bloom": "1st",
      "hp": 200,
      "text": "Buzz Holomem. Gift V.7: En Collab, puedes lanzar dado para reducir dano.",
      "market": []
    },
    {
      "id": "hBP01-028",
      "number": "hBP01-028",
      "name": "IRyS",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "Singing",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 100,
      "text": "Arts: HiRyS! (30 damage). Puedes incluir cualquier cantidad de copias.",
      "market": []
    },
    {
      "id": "hBP01-029",
      "number": "hBP01-029",
      "name": "IRyS",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "Singing",
        "1st"
      ],
      "bloom": "1st",
      "hp": 160,
      "text": "Arts: Hace 50 de dano.",
      "market": []
    },
    {
      "id": "hBP01-030",
      "number": "hBP01-030",
      "name": "IRyS",
      "type": "holomem",
      "color": "White",
      "rarity": "U",
      "set": "Booster Pack 1",
      "release": "2025-07-11 EN",
      "tags": [
        "EN",
        "Promise",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Bloom: Si tu Oshi es Sora, cura 30 de vida a una holomem.",
      "market": []
    },
    {
      "id": "hBP01-031",
      "number": "hBP01-031",
      "name": "IRyS",
      "type": "holomem",
      "color": "White",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 200,
      "text": "Collab: Si tienes Cheers adicionales en mano, gana +20 dano.",
      "market": []
    },
    {
      "id": "hBP01-032",
      "number": "hBP01-032",
      "name": "Aki Rosenthal",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 1",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tu Oshi es Aki, busca un Cheer verde y ponlo en tu retaguardia.",
      "market": []
    },
    {
      "id": "hBP01-033",
      "number": "hBP01-033",
      "name": "Aki Rosenthal",
      "type": "holomem",
      "color": "Green",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 1",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Arts: Hace 20 de dano.",
      "market": []
    },
    {
      "id": "hBP01-034",
      "number": "hBP01-034",
      "name": "Aki Rosenthal",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 1",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Arts: Hace 30 de dano.",
      "market": []
    },
    {
      "id": "hBP01-035",
      "number": "hBP01-035",
      "name": "Aki Rosenthal",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 1",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Recupera 30 de vida al entrar.",
      "market": []
    },
    {
      "id": "hBP01-036",
      "number": "hBP01-036",
      "name": "Aki Rosenthal",
      "type": "holomem",
      "color": "Green",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 1",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Hace 40 dano e inflige cansancio.",
      "market": []
    },
    {
      "id": "hBP01-037",
      "number": "hBP01-037",
      "name": "Aki Rosenthal",
      "type": "holomem",
      "color": "Green",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 1",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "Arts: 80 dano. Habilidad: Lanza 1 Cheer verde verde al archive para hacer +30 dano.",
      "variants": [
        {
          "rarity": "R",
          "artIndex": 0,
          "note": "Rare (Foil estándar)"
        },
        {
          "rarity": "SEC",
          "artIndex": 1,
          "note": "Secret Rare (Ilustración alternativa Full Art)"
        }
      ],
      "market": []
    },
    {
      "id": "hBP01-038",
      "number": "hBP01-038",
      "name": "Usada Pekora",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tu Oshi es Pekora, coloca 1 Cheer azul en tu retaguardia.",
      "market": []
    },
    {
      "id": "hBP01-039",
      "number": "hBP01-039",
      "name": "Usada Pekora",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Arts: Hace 20 de dano.",
      "market": []
    },
    {
      "id": "hBP01-040",
      "number": "hBP01-040",
      "name": "Usada Pekora",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Bloom: Si tu Oshi es Pekora, regresa una Debut rival a su mano.",
      "market": []
    },
    {
      "id": "hBP01-041",
      "number": "hBP01-041",
      "name": "Usada Pekora",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Hace 50 dano.",
      "market": []
    },
    {
      "id": "hBP01-042",
      "number": "hBP01-042",
      "name": "Usada Pekora",
      "type": "holomem",
      "color": "Blue",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Al entrar, roba 1 carta si tienes soporte azul.",
      "market": []
    },
    {
      "id": "hBP01-043",
      "number": "hBP01-043",
      "name": "Usada Pekora",
      "type": "holomem",
      "color": "Blue",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "Arts: Hace 80 dano. Habilidad: Regresa cualquier holomem 1st del rival a su mano.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "Double Rare (Diseño foil base)"
        },
        {
          "rarity": "UR",
          "artIndex": 1,
          "note": "Ultra Rare (Ilustración alternativa sin bordes)"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Ilustración alternativa especial)"
        }
      ],
      "market": []
    },
    {
      "id": "hBP01-044",
      "number": "hBP01-044",
      "name": "AZKi",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tienes otra holomem Gen 0, gana Arts +10.",
      "market": []
    },
    {
      "id": "hSD01-009",
      "number": "hSD01-009",
      "name": "AZKi",
      "type": "holomem",
      "color": "Green",
      "rarity": "R",
      "set": "Start Deck 1",
      "tags": [
        "JP",
        "Gen 0",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Gana 1 Cheer del archive al entrar.",
      "market": []
    },
    {
      "id": "hSD01-010",
      "number": "hSD01-010",
      "name": "AZKi",
      "type": "holomem",
      "color": "Green",
      "rarity": "U",
      "set": "Start Deck 1",
      "tags": [
        "JP",
        "Gen 0",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Hace 50 de dano con 2 Cheers verdes.",
      "market": []
    },
    {
      "id": "hSD01-011",
      "number": "hSD01-011",
      "name": "AZKi",
      "type": "holomem",
      "color": "Green",
      "rarity": "RR",
      "set": "Start Deck 1",
      "tags": [
        "JP",
        "Gen 0",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "Arts: Hace 80 dano. Collab: Roba 1 carta.",
      "market": []
    },
    {
      "id": "hBP01-045",
      "number": "hBP01-045",
      "name": "AZKi",
      "type": "holomem",
      "color": "Green",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "Singing",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 50,
      "text": "Gift Overwrite: Con 3 o menos de Vida, puedes ignorar el nivel de Bloom y evolucionar directamente a 2nd Bloom desde tu mano.",
      "market": []
    },
    {
      "id": "hBP01-046",
      "number": "hBP01-046",
      "name": "AZKi",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "Singing",
        "1st"
      ],
      "bloom": "1st",
      "hp": 100,
      "text": "Bloom: Puedes elegir de 1 a 3 Cheers en tu stage y reasignarlos a tu holomem como desees. Arts: Hace 30 de dano.",
      "market": []
    },
    {
      "id": "hBP01-047",
      "number": "hBP01-047",
      "name": "AZKi",
      "type": "holomem",
      "color": "Green",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "Singing",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 220,
      "text": "Bloom: Recupera 40 HP. Lanza dado; si es impar, recupera hasta 3 Cheers verdes del archive. Arts: Hace 120 dano.",
      "market": []
    },
    {
      "id": "hBP01-048",
      "number": "hBP01-048",
      "name": "Kazama Iroha",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Habilidad: Gana +10 HP pasivamente mientras este en Collab.",
      "market": []
    },
    {
      "id": "hBP01-049",
      "number": "hBP01-049",
      "name": "Kazama Iroha",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "1st"
      ],
      "bloom": "1st",
      "hp": 180,
      "text": "Arts 1: Hace 30 dano. Arts 2: Hace 50 dano.",
      "market": []
    },
    {
      "id": "hBP01-050",
      "number": "hBP01-050",
      "name": "Kazama Iroha",
      "type": "holomem",
      "color": "Green",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "1st"
      ],
      "bloom": "1st",
      "hp": 140,
      "text": "Habilidad [Bodyguard]: Obliga al oponente a dirigir sus ataques hacia ella.",
      "market": []
    },
    {
      "id": "hBP01-051",
      "number": "hBP01-051",
      "name": "Kazama Iroha",
      "type": "holomem",
      "color": "Green",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "1st"
      ],
      "bloom": "1st",
      "hp": 250,
      "text": "Buzz Holomem. Arts: Hace 50 de dano. Gana +20 por cada Cheer adjunta (max 5).",
      "market": []
    },
    {
      "id": "hBP01-052",
      "number": "hBP01-052",
      "name": "Airani Iofifteen",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 1",
        "Painting",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Arts: Hace 10 dano. Puedes mover 1 Cheer de tu stage a tu holomem ID. Puedes tener copias ilimitadas.",
      "market": []
    },
    {
      "id": "hBP01-053",
      "number": "hBP01-053",
      "name": "Airani Iofifteen",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 1",
        "Painting",
        "1st"
      ],
      "bloom": "1st",
      "hp": 170,
      "text": "Arts: Hace 50 dano.",
      "market": []
    },
    {
      "id": "hBP01-054",
      "number": "hBP01-054",
      "name": "Airani Iofifteen",
      "type": "holomem",
      "color": "Green",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 1",
        "Painting",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Bloom: Envía la primera carta de tu Cheer deck a tu holomem con tag #ID (excepto Iofi).",
      "market": []
    },
    {
      "id": "hBP01-055",
      "number": "hBP01-055",
      "name": "Airani Iofifteen",
      "type": "holomem",
      "color": "Green",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 1",
        "Painting",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 180,
      "text": "Collab: Envía 1 Cheer de tu archive a entre 1 a 3 holomems con tag #ID.",
      "market": []
    },
    {
      "id": "hBP01-056",
      "number": "hBP01-056",
      "name": "Takane Lui",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Arts: Hace 30 de dano. Puedes incluir cualquier cantidad de copias.",
      "market": []
    },
    {
      "id": "hBP01-057",
      "number": "hBP01-057",
      "name": "Takane Lui",
      "type": "holomem",
      "color": "Red",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Collab: Hace 10 de Special Damage al collab oponente.",
      "market": []
    },
    {
      "id": "hBP01-058",
      "number": "hBP01-058",
      "name": "Takane Lui",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Arts: Hace 30 de dano.",
      "market": []
    },
    {
      "id": "hBP01-059",
      "number": "hBP01-059",
      "name": "Takane Lui",
      "type": "holomem",
      "color": "Red",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Collab: Si tienes un PC en juego, roba 1 carta.",
      "market": []
    },
    {
      "id": "hBP01-060",
      "number": "hBP01-060",
      "name": "Takane Lui",
      "type": "holomem",
      "color": "Red",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 200,
      "text": "Arts: Hace 90 dano. Habilidad: Lanza 1 Cheer rojo al archive para retirar 1 soporte.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "Double Rare (Diseño foil base)"
        },
        {
          "rarity": "UR",
          "artIndex": 1,
          "note": "Ultra Rare (Ilustración alternativa sin bordes)"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Ilustración alternativa especial)"
        }
      ],
      "market": []
    },
    {
      "id": "hBP01-061",
      "number": "hBP01-061",
      "name": "Takane Lui",
      "type": "holomem",
      "color": "Red",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "HoloX",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "Arts: Hace 80 dano. Roba 1 carta al entrar.",
      "market": []
    },
    {
      "id": "hBP01-062",
      "number": "hBP01-062",
      "name": "Takanashi Kiara",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Myth",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tu Oshi es Kiara, roba 1 carta.",
      "market": []
    },
    {
      "id": "hBP01-063",
      "number": "hBP01-063",
      "name": "Takanashi Kiara",
      "type": "holomem",
      "color": "Red",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Myth",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Arts: Hace 20 de dano.",
      "market": []
    },
    {
      "id": "hBP01-064",
      "number": "hBP01-064",
      "name": "Takanashi Kiara",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Myth",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Gana +20 Arts si el centro tiene item.",
      "market": []
    },
    {
      "id": "hBP01-065",
      "number": "hBP01-065",
      "name": "Takanashi Kiara",
      "type": "holomem",
      "color": "Red",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Myth",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Hace 50 de dano.",
      "market": []
    },
    {
      "id": "hBP01-066",
      "number": "hBP01-066",
      "name": "Takanashi Kiara",
      "type": "holomem",
      "color": "Red",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Myth",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Al entrar, inflige 10 de dano a la retaguardia.",
      "market": []
    },
    {
      "id": "hBP01-067",
      "number": "hBP01-067",
      "name": "Takanashi Kiara",
      "type": "holomem",
      "color": "Red",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Myth",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 200,
      "text": "Arts: Hace 90 dano. Habilidad: Si Kiara es K.O., revive.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "Double Rare (Diseño foil base)"
        },
        {
          "rarity": "UR",
          "artIndex": 1,
          "note": "Ultra Rare (Ilustración alternativa sin bordes)"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Ilustración alternativa especial)"
        }
      ],
      "market": []
    },
    {
      "id": "hBP01-068",
      "number": "hBP01-068",
      "name": "Omaru Polka",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 5",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tu Oshi es Lui, roba 1 carta.",
      "market": []
    },
    {
      "id": "hBP01-069",
      "number": "hBP01-069",
      "name": "Omaru Polka",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 5",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Busca un PC o microfono en el Deck.",
      "market": []
    },
    {
      "id": "hBP01-070",
      "number": "hBP01-070",
      "name": "Omaru Polka",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 5",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Arts: Hace 40 de dano.",
      "market": []
    },
    {
      "id": "hBP01-071",
      "number": "hBP01-071",
      "name": "Omaru Polka",
      "type": "holomem",
      "color": "Red",
      "rarity": "UR",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 5",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Habilidad: Roba 1 carta si tu Oshi es roja. Arts: Hace 50 de daño.",
      "variants": [
        {
          "rarity": "UR",
          "artIndex": 0,
          "note": "Ultra Rare (Diseño holográfico estándar)"
        },
        {
          "rarity": "SEC",
          "artIndex": 1,
          "note": "Secret Rare / Parallel (Ilustración alternativa Full Art)"
        }
      ],
      "market": []
    },
    {
      "id": "hBP01-072",
      "number": "hBP01-072",
      "name": "Hakos Baelz",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tienes un PC en juego, gana +10 de ataque.",
      "market": []
    },
    {
      "id": "hBP01-073",
      "number": "hBP01-073",
      "name": "Hakos Baelz",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 80,
      "text": "Arts: WAZZUP!! (20 damage). Lanza dado para dano extra.",
      "market": []
    },
    {
      "id": "hBP01-074",
      "number": "hBP01-074",
      "name": "Hakos Baelz",
      "type": "holomem",
      "color": "Red",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Hace 50 dano.",
      "market": []
    },
    {
      "id": "hBP01-075",
      "number": "hBP01-075",
      "name": "Hakos Baelz",
      "type": "holomem",
      "color": "Red",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 180,
      "text": "Collab: Ambos jugadores barajan su mano en el deck y roban 4.",
      "market": []
    },
    {
      "id": "hBP01-076",
      "number": "hBP01-076",
      "name": "Hoshimachi Suisei",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Arts: Hace 20 de dano.",
      "market": []
    },
    {
      "id": "hBP01-077",
      "number": "hBP01-077",
      "name": "Hoshimachi Suisei",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "Singing",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Collab: Si tu Oshi es Suisei, puedes descartar 1 Cheer azul de ella para robar 2 cartas. Arts: Hace 30 de dano.",
      "market": []
    },
    {
      "id": "hBP01-078",
      "number": "hBP01-078",
      "name": "Hoshimachi Suisei",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tu Oshi es Suisei, inflige 10 de dano a la retaguardia.",
      "market": []
    },
    {
      "id": "hBP01-079",
      "number": "hBP01-079",
      "name": "Hoshimachi Suisei",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Coloca 1 Cheer azul en esta holomem desde tu Deck.",
      "market": []
    },
    {
      "id": "hBP01-080",
      "number": "hBP01-080",
      "name": "Hoshimachi Suisei",
      "type": "holomem",
      "color": "Blue",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Hace 50 de dano.",
      "market": []
    },
    {
      "id": "hBP01-081",
      "number": "hBP01-081",
      "name": "Hoshimachi Suisei",
      "type": "holomem",
      "color": "Blue",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 0",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "Arts: Hace 80 de dano a cualquier holomem enemiga ( sniper).",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "Double Rare (Diseño foil base)"
        },
        {
          "rarity": "UR",
          "artIndex": 1,
          "note": "Ultra Rare (Ilustración alternativa sin bordes)"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Ilustración alternativa exclusiva Full Art)"
        }
      ],
      "market": []
    },
    {
      "id": "hBP01-082",
      "number": "hBP01-082",
      "name": "Kobo Kanaeru",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 100,
      "text": "Debut Holomem. Habilidad: Boko Boko Boko Bo. Puedes incluir cualquier cantidad de esta carta en tu deck.",
      "market": []
    },
    {
      "id": "hBP01-083",
      "number": "hBP01-083",
      "name": "Kobo Kanaeru",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Collab: Si tu centro es ID, lanza dado. Si sale 3+, roba 1 Cheer del Cheer deck.",
      "market": []
    },
    {
      "id": "hBP01-084",
      "number": "hBP01-084",
      "name": "Kobo Kanaeru",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "1st"
      ],
      "bloom": "1st",
      "hp": 180,
      "text": "1st Bloom. Arts: Turning into a Cat~ (50 damage). Habilidad defensiva masiva.",
      "market": []
    },
    {
      "id": "hBP01-085",
      "number": "hBP01-085",
      "name": "Kobo Kanaeru",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "1st Bloom. Arts: Raindrops (50 damage). Hace 10 de Special Damage a 3 holomems en la retaguardia enemiga.",
      "market": []
    },
    {
      "id": "hBP01-086",
      "number": "hBP01-086",
      "name": "Kobo Kanaeru",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "1st"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "1st Bloom. Collab: El oponente debe pagar 1 Cheer extra para retirar o rotar.",
      "market": []
    },
    {
      "id": "hBP01-087",
      "number": "hBP01-087",
      "name": "Kobo Kanaeru",
      "type": "holomem",
      "color": "Blue",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 3",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 200,
      "text": "2nd Bloom. Arts: Hace 90 de daño. Gana 20 de escudo al principio de tu turno.",
      "variants": [
        {
          "rarity": "R",
          "artIndex": 0,
          "note": "Rare (Foil estándar)"
        },
        {
          "rarity": "SEC",
          "artIndex": 1,
          "note": "Secret Rare (Ilustración alternativa Full Art)"
        }
      ],
      "market": []
    },
    {
      "id": "hBP01-088",
      "number": "hBP01-088",
      "name": "Moona Hoshinova",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 1",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Collab: Si tu Oshi es Kobo, roba 1 carta.",
      "market": []
    },
    {
      "id": "hBP01-089",
      "number": "hBP01-089",
      "name": "Moona Hoshinova",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 1",
        "Singing",
        "1st"
      ],
      "bloom": "1st",
      "hp": 140,
      "text": "Arts: OtsuMoona (60 damage).",
      "market": []
    },
    {
      "id": "hBP01-090",
      "number": "hBP01-090",
      "name": "Moona Hoshinova",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 1",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Arts: Hace 40 dano. Collab: Si tienes un PC en juego, hace +20 de dano.",
      "market": []
    },
    {
      "id": "hBP01-091",
      "number": "hBP01-091",
      "name": "Moona Hoshinova",
      "type": "holomem",
      "color": "Blue",
      "rarity": "RR",
      "set": "Booster Pack 1",
      "tags": [
        "ID",
        "ID Gen 1",
        "2nd"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "Arts: Hace 80 dano. Habilidad: Roba 2 cartas al entrar.",
      "market": []
    },
    {
      "id": "hBP01-092",
      "number": "hBP01-092",
      "name": "Ouro Kronii",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Arts: Hace 20 de dano.",
      "market": []
    },
    {
      "id": "hBP01-093",
      "number": "hBP01-093",
      "name": "Ouro Kronii",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "1st"
      ],
      "bloom": "1st",
      "hp": 160,
      "text": "Arts 1: KroYasumi~ (40 damage). Arts 2: Good Night, KroTime (60 damage).",
      "market": []
    },
    {
      "id": "hBP01-094",
      "number": "hBP01-094",
      "name": "Ouro Kronii",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Bloom: Revela 1 Cheer del Cheer deck con el mismo color de tu holomem Promise y reasígnalo. Arts: Hace 40 dano.",
      "market": []
    },
    {
      "id": "hBP01-095",
      "number": "hBP01-095",
      "name": "Ouro Kronii",
      "type": "holomem",
      "color": "Blue",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Promise",
        "1st"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Habilidad: Gana Arts +20 si tienes otra Promise en Stage.",
      "market": []
    },
    {
      "id": "hBP01-096",
      "number": "hBP01-096",
      "name": "Usada Pekora",
      "type": "holomem",
      "color": "Colorless",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "Spot"
      ],
      "bloom": "Spot",
      "hp": 80,
      "text": "Collab: Puedes lanzar un dado; si es par, busca un Buzz holomem en el deck y añadelo a tu mano. Arts: Hace 10 dano.",
      "market": []
    },
    {
      "id": "hBP01-097",
      "number": "hBP01-097",
      "name": "Shiranui Flare",
      "type": "holomem",
      "color": "Colorless",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "Spot"
      ],
      "bloom": "Spot",
      "hp": 80,
      "text": "Collab: Intercambia tu center holomem con 1 back holomem que no este descansando. Arts: Hace 20 dano.",
      "market": []
    },
    {
      "id": "hBP01-098",
      "number": "hBP01-098",
      "name": "Shirogane Noel",
      "type": "holomem",
      "color": "Colorless",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "Spot"
      ],
      "bloom": "Spot",
      "hp": 90,
      "text": "Collab: Puedes enviar 1 Cheer de tu archive a tu holomem. Arts: Hace 20 dano.",
      "market": []
    },
    {
      "id": "hBP01-099",
      "number": "hBP01-099",
      "name": "Houshou Marine",
      "type": "holomem",
      "color": "Red",
      "rarity": "R",
      "set": "Booster Pack 1",
      "tags": [
        "JP",
        "Gen 3",
        "Spot"
      ],
      "bloom": "Spot",
      "hp": 120,
      "text": "Spot Holomem. Habilidad: Al entrar, hace 30 de dano a una Debut enemiga.",
      "market": []
    },
    {
      "id": "hBP01-100",
      "number": "hBP01-100",
      "name": "Mori Calliope",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Myth",
        "Spot"
      ],
      "bloom": "Spot",
      "hp": 130,
      "text": "Spot Holomem. Arts: Hace 50 dano base.",
      "market": []
    },
    {
      "id": "hBP01-101",
      "number": "hBP01-101",
      "name": "Watson Amelia",
      "type": "holomem",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "EN",
        "Myth",
        "Spot"
      ],
      "bloom": "Spot",
      "hp": 120,
      "text": "Spot Holomem. Habilidad: Lanza 1 dado al entrar. Si sale par, roba 1 carta.",
      "market": []
    },
    {
      "id": "hSD01-012",
      "number": "hSD01-012",
      "name": "Airani Iofifteen",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Start Deck 1",
      "tags": [
        "ID",
        "ID Gen 1",
        "Debut"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Collab: Permite mover 1 Cheer del archive al center.",
      "market": []
    },
    {
      "id": "hSD01-016",
      "number": "hSD01-016",
      "name": "Harusaki Nodoka",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Start Decks",
      "tags": [
        "Staff",
        "LIMITED",
        "Draw"
      ],
      "bloom": "",
      "hp": "",
      "text": "Staff LIMITED. Roba 3 cartas de tu deck.",
      "market": []
    },
    {
      "id": "hBP01-102",
      "number": "hBP01-102",
      "name": "Idol Microphone",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Item",
        "Search"
      ],
      "text": "Item. Revela las 3 primeras cartas de tu deck y coloca 1 holomem en tu mano.",
      "market": []
    },
    {
      "id": "hBP01-103",
      "number": "hBP01-103",
      "name": "Gaming PC",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Item",
        "LIMITED"
      ],
      "text": "Item LIMITED. Roba 2 cartas si tu centro es ID (Kobo/Moona).",
      "market": []
    },
    {
      "id": "hBP01-104",
      "number": "hBP01-104",
      "name": "Normal PC",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Item",
        "Search"
      ],
      "text": "Item. Busca una holomem Debut en tu deck y ponla en tu escenario. (Aparece Ceres Fauna en el arte).",
      "market": []
    },
    {
      "id": "hBP01-105",
      "number": "hBP01-105",
      "name": "Penlight",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Item",
        "LIMITED",
        "Ramp"
      ],
      "text": "Item LIMITED. Descarta 1 carta de tu mano para colocar 1 Cheer.",
      "market": []
    },
    {
      "id": "hBP01-106",
      "number": "hBP01-106",
      "name": "I leave the rest to you!",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Event",
        "BatonPass"
      ],
      "text": "Event. Retira tu centro activo sin costo de Baton Pass.",
      "market": []
    },
    {
      "id": "hBP01-107",
      "number": "hBP01-107",
      "name": "Encore",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Event",
        "Recover"
      ],
      "text": "Event. Recupera una holomem Debut de tu archive a tu mano.",
      "market": []
    },
    {
      "id": "hBP01-108",
      "number": "hBP01-108",
      "name": "So, That Makes You My Enemy",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Event",
        "Control"
      ],
      "text": "Event. Obliga al oponente a cambiar su holomem activa del centro. (Basado en el encuentro de Sora y Suisei en Minecraft, aparecen ambas en el arte).",
      "market": []
    },
    {
      "id": "hBP01-109",
      "number": "hBP01-109",
      "name": "Tale of the Moon and the Rabbit",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Event",
        "LIMITED"
      ],
      "text": "Event LIMITED. Si tienes a Pekora y Moona en juego, roba 3 cartas.",
      "market": []
    },
    {
      "id": "hBP01-110",
      "number": "hBP01-110",
      "name": "I'll smack you with a blunt weapon!",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Event",
        "Aggro"
      ],
      "text": "Event. Tu holomem activa gana Arts +20 durante este turno. (Meme oficial de Suisei con su hacha/micrófono, aparece Suisei en el arte).",
      "market": []
    },
    {
      "id": "hBP01-111",
      "number": "hBP01-111",
      "name": "hololive Indonesia Gen 3",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Event",
        "LIMITED"
      ],
      "text": "Event LIMITED. Si tienes a Kobo en juego, busca en tu deck cualquier item.",
      "market": []
    },
    {
      "id": "hBP01-112",
      "number": "hBP01-112",
      "name": "Exciting Prank Time",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Event",
        "Disruption"
      ],
      "text": "Event. Mira la mano del oponente y hazle descartar 1 soporte.",
      "market": []
    },
    {
      "id": "hBP01-113",
      "number": "hBP01-113",
      "name": "Promise",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Event",
        "LIMITED",
        "Search"
      ],
      "text": "Event LIMITED. Si tienes 6 o menos cartas, revela el top 4 de tu deck y añade holomems Promise a la mano. (Aparece Mumei y Baelz en el arte).",
      "market": []
    },
    {
      "id": "hBP01-114",
      "number": "hBP01-114",
      "name": "Stone Axe",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Tool"
      ],
      "text": "Tool. Herramienta de combate. (Hacha icónica de Suisei, solo se permite 1 herramienta por holomem).",
      "market": []
    },
    {
      "id": "hBP01-115",
      "number": "hBP01-115",
      "name": "Hoshimachi Suisei's Microphone",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 1",
      "tags": [
        "Tool"
      ],
      "text": "Tool. Micrófono oficial de Suisei. Otorga mejoras de Arts a holomems musicales.",
      "market": []
    },
    {
      "id": "hBP01-116",
      "number": "hBP01-116",
      "name": "Upao",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Mascot"
      ],
      "text": "Mascot. Solo se puede equipar 1 mascota por holomem. Si se equipa a Amane Kanata, gana Arts +10 y permite infligir 20 de daño especial cuando recibe daño.",
      "market": []
    },
    {
      "id": "hBP01-117",
      "number": "hBP01-117",
      "name": "Friend",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Mascot"
      ],
      "text": "Mascot. Solo se puede equipar 1 mascota por holomem. Si se equipa a Nanashi Mumei, reduce el daño recibido en 30 al descartarse.",
      "market": []
    },
    {
      "id": "hBP01-118",
      "number": "hBP01-118",
      "name": "Ankimo",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Mascot"
      ],
      "text": "Mascot. Solo se puede equipar 1 mascota por holomem. Si se equipa a Tokino Sora, Ankimo se trata como un Cheer blanco pasivo en el Stage.",
      "market": []
    },
    {
      "id": "hBP01-119",
      "number": "hBP01-119",
      "name": "Jobs",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Mascot"
      ],
      "text": "Mascot. Solo se puede equipar 1 mascota por holomem. Si se equipa a Aki Rosenthal, cura 10 HP al inicio de tu turno.",
      "market": []
    },
    {
      "id": "hBP01-120",
      "number": "hBP01-120",
      "name": "Ganmo",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Mascot"
      ],
      "text": "Mascot. Solo se puede equipar 1 mascota por holomem. Si se equipa a Takane Lui, otorga bonificaciones adicionales de daño especial en Collab.",
      "market": []
    },
    {
      "id": "hBP01-121",
      "number": "hBP01-121",
      "name": "Kotori",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Mascot"
      ],
      "text": "Mascot. Solo se puede equipar 1 mascota por holomem. La holomem equipada en Center/Collab recibe -10 de daño. Si se equipa a Kiara, robas 1 carta al hacer Bloom.",
      "market": []
    },
    {
      "id": "hBP01-122",
      "number": "hBP01-122",
      "name": "Rose Knights",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Fan"
      ],
      "text": "Fan. Solo se puede equipar a Aki Rosenthal. Durante el turno del rival, si la holomem equipada es debilitada (downed), puedes enviar la carta superior de tu Cheer deck al archive.",
      "market": []
    },
    {
      "id": "hBP01-123",
      "number": "hBP01-123",
      "name": "Wild Rabbit Alliance (Nousagi)",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Fan"
      ],
      "text": "Fan. Solo se puede equipar a Usada Pekora. Cuando la holomem equipada lanza un dado para una habilidad, puedes mandar este fan al archive para relanzar el dado.",
      "market": []
    },
    {
      "id": "hBP01-124",
      "number": "hBP01-124",
      "name": "Pioneers",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Fan"
      ],
      "text": "Fan. Solo se puede equipar a AZKi. Durante el turno de tu rival, si la holomem equipada es debilitada, reasigna 1 de sus Cheers a otra de tus holomems.",
      "market": []
    },
    {
      "id": "hBP01-125",
      "number": "hBP01-125",
      "name": "KFP",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Fan"
      ],
      "text": "Fan. Solo se puede equipar a Takanashi Kiara. Cuando equipas este fan desde la mano, puedes descartar 1 carta para robar 1.",
      "market": []
    },
    {
      "id": "hBP01-126",
      "number": "hBP01-126",
      "name": "Troupe Member (Zain)",
      "type": "Support",
      "color": "Neutral",
      "rarity": "C",
      "set": "Booster Pack 1",
      "tags": [
        "Fan"
      ],
      "text": "Fan (Mascota). Solo se puede equipar a Omaru Polka. Convierte el daño de Arts de la holomem en tipo rojo, a costa de recibir +10 de daño.",
      "market": []
    },
    {
      "id": "hBP05-080",
      "number": "hBP05-080",
      "name": "SorAZ Celebration",
      "type": "Support",
      "color": "Neutral",
      "rarity": "U",
      "set": "Booster Pack 5",
      "tags": [
        "Event",
        "LIMITED",
        "Search"
      ],
      "text": "Event LIMITED. Busca en tu deck cualquier carta.",
      "market": []
    },
    {
      "id": "hSD02-009",
      "number": "hSD02-009",
      "name": "Nakiri Ayame",
      "type": "holomem",
      "color": "Red",
      "rarity": "SR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2",
        "Shooter"
      ],
      "bloom": "2nd",
      "hp": 180,
      "text": "Arts: AyaFubuMi's \"Aya\" 60",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hSD03-009",
      "number": "hSD03-009",
      "name": "Nekomata Okayu",
      "type": "holomem",
      "color": "Blue",
      "rarity": "SR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "GAMERS",
        "Kemomimi"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hSD04-009",
      "number": "hSD04-009",
      "name": "Yuzuki Choco",
      "type": "holomem",
      "color": "Purple",
      "rarity": "SR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2",
        "Cooking"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-001",
      "number": "hBP02-001",
      "name": "Shirakami Fubuki",
      "type": "Oshi",
      "color": "White",
      "rarity": "OSR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "text": "Oshi Skill: [holo Power：-2] Mascot Creation [1/Turn]Reveal 1 mascot from your deck, and add it to hand. Then, shuffle the deck. / SP Oshi Skill: [holo Power：-2] FBKINGDOM [1/Game]You may roll a die once for every 2 mascots on your stage if your white holomem downed your opponent's holomem:If an odd number appears once or more, your opponent gets life-1.",
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Super Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare (Alt Art)"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Alt Art/Signed)"
        }
      ],
      "market": [],
      "life": 5
    },
    {
      "id": "hBP02-002",
      "number": "hBP02-002",
      "name": "Pavolia Reine",
      "type": "Oshi",
      "color": "Green",
      "rarity": "OSR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "text": "Oshi Skill: [holo Power：-2] HALU [1/Turn]By archiving 1 green cheer from your holomem, reveal 1 cheer from your cheer deck, and send it to your holomem. Then, shuffle the cheer deck. / SP Oshi Skill: [holo Power：-2] Vibrant Banquet [1/Game]During this turn, all of your holomem on stage with #ID Gen 2 get Arts+20 for each of that holomem's cheer colors.",
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Super Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare (Alt Art)"
        }
      ],
      "market": [],
      "life": 5
    },
    {
      "id": "hBP02-003",
      "number": "hBP02-003",
      "name": "Houshou Marine",
      "type": "Oshi",
      "color": "Red",
      "rarity": "OSR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "text": "Oshi Skill: [holo Power：-3] Ahoy! [1/Turn]Bloom 1 of your holomem with #Gen 3 that bloomed this turn once more using a holomem from your hand. / SP Oshi Skill: [holo Power：-2] Set Sail~! [1/Game]Deal 50 special damage for each holomem stacked to your 〈Houshou Marine〉 center holomem to your opponent's center holomem or collab holomem.",
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Super Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare (Alt Art)"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Alt Art/Signed)"
        }
      ],
      "market": [],
      "life": 5
    },
    {
      "id": "hBP02-004",
      "number": "hBP02-004",
      "name": "Sakamata Chloe",
      "type": "Oshi",
      "color": "Blue",
      "rarity": "OSR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "text": "Oshi Skill: [holo Power：-1] Poe Poe Poe~ [1/Turn]Usable if your center holomem is 〈Sakamata Chloe〉:Look at the top 3 cards of your deck. Archive all of those cards, or return them to the top of the deck in any order. / SP Oshi Skill: [holo Power：-3] Life Reset Button [1/Game]Count the number of cards in your hand, return [all of your hand cards and all of your archived holomem] to deck and shuffle it. Then, draw 1 card for each card returned from hand to deck.",
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Super Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare (Alt Art)"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "Secret Rare (Alt Art/Signed)"
        }
      ],
      "market": [],
      "life": 5
    },
    {
      "id": "hBP02-005",
      "number": "hBP02-005",
      "name": "Murasaki Shion",
      "type": "Oshi",
      "color": "Purple",
      "rarity": "OSR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "text": "Oshi Skill: [holo Power：-1] Heeeyyyyy [1/Turn]Usable when your 〈Murasaki Shion〉's ability rolled a die:Reroll the die once. / SP Oshi Skill: [holo Power：-2] Shion's Amazing Magic [1/Game]Usable when your purple center holomem used Arts:Deal 50 special damage to your opponent's center holomem for each of your opponent's center holomem's cheers.",
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Super Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare (Alt Art)"
        }
      ],
      "market": [],
      "life": 5
    },
    {
      "id": "hBP02-006",
      "number": "hBP02-006",
      "name": "Kureiji Ollie",
      "type": "Oshi",
      "color": "Purple",
      "rarity": "OSR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "text": "Oshi Skill: [holo Power：-2] Zombie Tactics [1/Turn]Bloom 1 of your holomem with #ID Gen 2 using a holomem from your archive. / SP Oshi Skill: [holo Power：-2] Ollie Revives [1/Game]Draw 4 cards, and archive 2 cards from hand. You may bloom 1 of your holomem using a holomem from your archive.",
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Super Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare (Alt Art)"
        }
      ],
      "market": [],
      "life": 5
    },
    {
      "id": "hBP02-007",
      "number": "hBP02-007",
      "name": "Mori Calliope",
      "type": "Oshi",
      "color": "Purple",
      "rarity": "OSR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "text": "Oshi Skill: [holo Power：-2] Sampling [1/Turn]By archiving 2 cards from your hand, return 2 holomem with #EN from archive to hand. / SP Oshi Skill: [holo Power：-2] Reaper's Rap [1/Game]Usable if your center holomem is 〈Mori Calliope〉:During this turn, after 1 of your 〈Mori Calliope〉 used Arts, use the same Arts once more.",
      "variants": [
        {
          "rarity": "OSR",
          "artIndex": 0,
          "note": "Oshi Super Rare"
        },
        {
          "rarity": "OUR",
          "artIndex": 1,
          "note": "Oshi Ultra Rare (Alt Art)"
        }
      ],
      "market": [],
      "life": 5
    },
    {
      "id": "hBP02-008",
      "number": "hBP02-008",
      "name": "Shirakami Fubuki",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+1",
        "GAMERS",
        "Kemomimi",
        "Painting"
      ],
      "bloom": "Debut",
      "hp": 100,
      "text": "Arts: Kon-Kon Kitsune! 30 / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-009",
      "number": "hBP02-009",
      "name": "Shirakami Fubuki",
      "type": "holomem",
      "color": "White",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+1",
        "GAMERS",
        "Kemomimi",
        "Painting"
      ],
      "bloom": "Debut",
      "hp": 80,
      "text": "Arts: Otsukon 20",
      "market": []
    },
    {
      "id": "hBP02-010",
      "number": "hBP02-010",
      "name": "Shirakami Fubuki",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+1",
        "GAMERS",
        "Kemomimi",
        "Painting"
      ],
      "bloom": "1st",
      "hp": 150,
      "text": "Arts: Osmanthus Flower Fubuki 40",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-011",
      "number": "hBP02-011",
      "name": "Shirakami Fubuki",
      "type": "holomem",
      "color": "White",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+1",
        "GAMERS",
        "Kemomimi",
        "Painting"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Arts: Nope, No Can Do! 40",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-012",
      "number": "hBP02-012",
      "name": "Shirakami Fubuki",
      "type": "holomem",
      "color": "White",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+1",
        "GAMERS",
        "Kemomimi",
        "Painting"
      ],
      "bloom": "1st",
      "hp": 100,
      "text": "Arts: Lend me your strength, okay? 50+ During this turn, your [center holomem and collab holomem] with mascot attached get Arts+20.",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-013",
      "number": "hBP02-013",
      "name": "Shirakami Fubuki",
      "type": "holomem",
      "color": "White",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+1",
        "GAMERS",
        "Kemomimi",
        "Painting"
      ],
      "bloom": "2nd",
      "hp": 180,
      "text": "Arts: Mascots Feast 80+ This Arts gets +20 for each mascot on your stage.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-014",
      "number": "hBP02-014",
      "name": "Shirogane Noel",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Alcohol"
      ],
      "bloom": "Debut",
      "hp": 130,
      "text": "Arts: Kon-Muscle~! 20 / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-015",
      "number": "hBP02-015",
      "name": "Shirogane Noel",
      "type": "holomem",
      "color": "White",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Alcohol"
      ],
      "bloom": "1st",
      "hp": 180,
      "text": "Arts: Oha-Muscle~! 30",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-016",
      "number": "hBP02-016",
      "name": "Shirogane Noel",
      "type": "holomem",
      "color": "White",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Alcohol"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Burn this Sight into Your Eyes♡ 30",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-017",
      "number": "hBP02-017",
      "name": "Shirogane Noel",
      "type": "Buzz holomem",
      "color": "White",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Alcohol"
      ],
      "bloom": "1st",
      "hp": 260,
      "text": "Arts: Soft & Fluffy Musclehead Lady Knight 50 / Extra: If this holomem is downed, you get life-2",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-018",
      "number": "hBP02-018",
      "name": "Pavolia Reine",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Bird",
        "Painting"
      ],
      "bloom": "Debut",
      "hp": 100,
      "text": "Arts: Perhatian! 30 / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-019",
      "number": "hBP02-019",
      "name": "Pavolia Reine",
      "type": "holomem",
      "color": "Green",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Bird",
        "Painting"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Arts: Very Easy! 20",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-020",
      "number": "hBP02-020",
      "name": "Pavolia Reine",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Bird",
        "Painting"
      ],
      "bloom": "1st",
      "hp": 160,
      "text": "Arts: Royal Halu Sleepover 50",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-021",
      "number": "hBP02-021",
      "name": "Pavolia Reine",
      "type": "holomem",
      "color": "Green",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Bird",
        "Painting"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Arts: Keep Your Eyes on Me, Okay? I Love You! 20 You may send 1 cheer from your archive to your holomem.",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-022",
      "number": "hBP02-022",
      "name": "Pavolia Reine",
      "type": "holomem",
      "color": "Green",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Bird",
        "Painting"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Spicy Night 40+ If your stage has 2 or more cheer colors, this Arts gets +20.",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-023",
      "number": "hBP02-023",
      "name": "Pavolia Reine",
      "type": "holomem",
      "color": "Green",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Bird",
        "Painting"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "Arts: Peacock Dance 100+ This Arts gets +20 for every cheer color on your stage.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-024",
      "number": "hBP02-024",
      "name": "Ookami Mio",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "GAMERS",
        "Kemomimi",
        "Cooking"
      ],
      "bloom": "Debut",
      "hp": 90,
      "text": "Arts: Hey hey, it's me~ Ookami Mio~ 10 You may reattach 1 cheer from your stage to your holomem with #JP. / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-025",
      "number": "hBP02-025",
      "name": "Ookami Mio",
      "type": "holomem",
      "color": "Green",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "GAMERS",
        "Kemomimi",
        "Cooking"
      ],
      "bloom": "1st",
      "hp": 160,
      "text": "Arts: Oha-Miooon 30",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-026",
      "number": "hBP02-026",
      "name": "Ookami Mio",
      "type": "holomem",
      "color": "Green",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "GAMERS",
        "Kemomimi",
        "Cooking"
      ],
      "bloom": "1st",
      "hp": 100,
      "text": "Arts: Please Watch Over Me This Year too! 20",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-027",
      "number": "hBP02-027",
      "name": "Ookami Mio",
      "type": "Buzz holomem",
      "color": "Green",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "GAMERS",
        "Kemomimi",
        "Cooking"
      ],
      "bloom": "1st",
      "hp": 240,
      "text": "Arts: Tarot's Guidance 60+ You may archive the top card of your deck:If the archived card is a holomem, this Arts gets +20. If it is a support card, this Arts gets +50. / Extra: If this holomem is downed, you get life-2",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-028",
      "number": "hBP02-028",
      "name": "Houshou Marine",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Painting",
        "Sea"
      ],
      "bloom": "Debut",
      "hp": 100,
      "text": "Arts: I'm Houshou Marine, Captain of the Houshou Pirates! 30 / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-029",
      "number": "hBP02-029",
      "name": "Houshou Marine",
      "type": "holomem",
      "color": "Red",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Painting",
        "Sea",
        "Alcohol"
      ],
      "bloom": "Debut",
      "hp": 70,
      "text": "Arts: It's \"Captain\" Marine, Got it!? 30",
      "market": []
    },
    {
      "id": "hBP02-030",
      "number": "hBP02-030",
      "name": "Houshou Marine",
      "type": "holomem",
      "color": "Red",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Painting",
        "Sea"
      ],
      "bloom": "1st",
      "hp": 160,
      "text": "Arts: What's the Captain Gonna Do to Me? 40",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-031",
      "number": "hBP02-031",
      "name": "Houshou Marine",
      "type": "holomem",
      "color": "Red",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Painting",
        "Sea"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Let's Set Sail Together! (Wholesome) 30",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-032",
      "number": "hBP02-032",
      "name": "Houshou Marine",
      "type": "holomem",
      "color": "Red",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Painting",
        "Sea"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Keep 'Er Steady! 50",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-033",
      "number": "hBP02-033",
      "name": "Houshou Marine",
      "type": "holomem",
      "color": "Red",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+3",
        "Painting",
        "Sea"
      ],
      "bloom": "2nd",
      "hp": 200,
      "text": "Arts: You Guys~? Isn't Your Captain Cute? 80+ This Arts gets +20 for each holomem stacked to this holomem.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-034",
      "number": "hBP02-034",
      "name": "Nakiri Ayame",
      "type": "Buzz holomem",
      "color": "Red",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2",
        "Shooter"
      ],
      "bloom": "1st",
      "hp": 250,
      "text": "Arts: I laugh 50 / Extra: If this holomem is downed, you get life-2",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-035",
      "number": "hBP02-035",
      "name": "Sakamata Chloe",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "holoX",
        "Sea"
      ],
      "bloom": "Debut",
      "hp": 110,
      "text": "Arts: Chomp, Chomp, Chooomp! 30 / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-036",
      "number": "hBP02-036",
      "name": "Sakamata Chloe",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "holoX",
        "Sea"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Arts: A Reality Worth Spitting Out! 20",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-037",
      "number": "hBP02-037",
      "name": "Sakamata Chloe",
      "type": "holomem",
      "color": "Blue",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "holoX",
        "Sea"
      ],
      "bloom": "1st",
      "hp": 160,
      "text": "Arts: Having the Beach to Ourselves 60",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-038",
      "number": "hBP02-038",
      "name": "Sakamata Chloe",
      "type": "holomem",
      "color": "Blue",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "holoX",
        "Sea"
      ],
      "bloom": "1st",
      "hp": 110,
      "text": "Arts: (This is the Part Where You Cheer) 30",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-039",
      "number": "hBP02-039",
      "name": "Sakamata Chloe",
      "type": "holomem",
      "color": "Blue",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "holoX",
        "Sea"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: holoX-lot 20+ You may reveal the top 3 cards of your deck:This Arts gets +20 for each holomem revealed. Then, archive the revealed cards.",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-040",
      "number": "hBP02-040",
      "name": "Sakamata Chloe",
      "type": "holomem",
      "color": "Blue",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "holoX",
        "Sea"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "Arts: holoX-lot 100+ You may reveal the top 3 cards of your deck:This Arts gets +20 for each holomem revealed. Then, archive the revealed cards.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-041",
      "number": "hBP02-041",
      "name": "Nekomata Okayu",
      "type": "Buzz holomem",
      "color": "Blue",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "GAMERS",
        "Kemomimi",
        "Singing"
      ],
      "bloom": "1st",
      "hp": 230,
      "text": "Arts: Poison Cat 50 You may archive 1 blue cheer from this holomem:Deal 20 special damage to your opponent's center holomem and 1 of their back holomem. / Extra: If this holomem is downed, you get life-2",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-042",
      "number": "hBP02-042",
      "name": "Murasaki Shion",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2"
      ],
      "bloom": "Debut",
      "hp": 130,
      "text": "Arts: Hey There~ 20 / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-043",
      "number": "hBP02-043",
      "name": "Murasaki Shion",
      "type": "holomem",
      "color": "Purple",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2"
      ],
      "bloom": "Debut",
      "hp": 50,
      "text": "Arts: Let's Go Together 30",
      "market": []
    },
    {
      "id": "hBP02-044",
      "number": "hBP02-044",
      "name": "Murasaki Shion",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2",
        "Kemomimi"
      ],
      "bloom": "1st",
      "hp": 170,
      "text": "Arts: So Embarrassing 30",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-045",
      "number": "hBP02-045",
      "name": "Murasaki Shion",
      "type": "holomem",
      "color": "Purple",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: I'm Super Duper Happy!! 40",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-046",
      "number": "hBP02-046",
      "name": "Murasaki Shion",
      "type": "holomem",
      "color": "Purple",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Change the Cheer 30 You may roll a die once:If it is 5 or greater, reattach 1 of your opponent's cheers from stage to your opponent's holomem.",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-047",
      "number": "hBP02-047",
      "name": "Murasaki Shion",
      "type": "holomem",
      "color": "Purple",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2"
      ],
      "bloom": "2nd",
      "hp": 200,
      "text": "Arts: Violet Magic 80 Deal 20 special damage for each of your opponent's center holomem's cheers to your opponent's center holomem and collab holomem.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-048",
      "number": "hBP02-048",
      "name": "Kureiji Ollie",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Language"
      ],
      "bloom": "Debut",
      "hp": 120,
      "text": "Arts: Zombanwa! 20 / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-049",
      "number": "hBP02-049",
      "name": "Kureiji Ollie",
      "type": "holomem",
      "color": "Purple",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Language"
      ],
      "bloom": "Debut",
      "hp": 60,
      "text": "Arts: Otsu-Kureiji! 20",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-050",
      "number": "hBP02-050",
      "name": "Kureiji Ollie",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Language"
      ],
      "bloom": "1st",
      "hp": 160,
      "text": "Arts: The Junior Who Adores You 20",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-051",
      "number": "hBP02-051",
      "name": "Kureiji Ollie",
      "type": "holomem",
      "color": "Purple",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Language"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Screaming My Lungs Out for My Oshi!! 20",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-052",
      "number": "hBP02-052",
      "name": "Kureiji Ollie",
      "type": "holomem",
      "color": "Purple",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Language"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Arts: In the Name of Justice, I Shall 40+ If a non-purple cheer is attached to this holomem, this Arts gets +20.",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-053",
      "number": "hBP02-053",
      "name": "Kureiji Ollie",
      "type": "holomem",
      "color": "Purple",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "ID",
        "ID+Gen+2",
        "Language"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "Arts: Calculated Strategy 100+ If you have 2 or more 2nd holomem with #ID Gen 2 on your stage, this Arts gets +40.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-054",
      "number": "hBP02-054",
      "name": "Mori Calliope",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Singing"
      ],
      "bloom": "Debut",
      "hp": 90,
      "text": "Arts: First Disciple of the Grim Reaper 30+ If your archive has holomem, this Arts gets +10. / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-055",
      "number": "hBP02-055",
      "name": "Mori Calliope",
      "type": "holomem",
      "color": "Purple",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Singing"
      ],
      "bloom": "Debut",
      "hp": 80,
      "text": "Arts: My Stage 20",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-056",
      "number": "hBP02-056",
      "name": "Mori Calliope",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Singing"
      ],
      "bloom": "1st",
      "hp": 110,
      "text": "Arts: \"Cash-Money\" 50",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-057",
      "number": "hBP02-057",
      "name": "Mori Calliope",
      "type": "holomem",
      "color": "Purple",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Singing"
      ],
      "bloom": "1st",
      "hp": 130,
      "text": "Arts: Hypin' It Up Together! 50",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-058",
      "number": "hBP02-058",
      "name": "Mori Calliope",
      "type": "holomem",
      "color": "Purple",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Singing"
      ],
      "bloom": "1st",
      "hp": 140,
      "text": "Arts: Dead Beat 30+ If a tool or mascot is attached to this holomem, this Arts gets +30.",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-059",
      "number": "hBP02-059",
      "name": "Mori Calliope",
      "type": "holomem",
      "color": "Purple",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Singing"
      ],
      "bloom": "2nd",
      "hp": 200,
      "text": "Arts: Featuring Myth 80+ If you have 4 or more holomem with #Myth in your archive, this Arts gets +40. Then, if you have 8 or more, this Arts gets +40.",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-060",
      "number": "hBP02-060",
      "name": "Yuzuki Choco",
      "type": "Buzz holomem",
      "color": "Purple",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2",
        "Cooking"
      ],
      "bloom": "1st",
      "hp": 240,
      "text": "Arts: Uncontainable Charm 80 / Extra: If this holomem is downed, you get life-2",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-061",
      "number": "hBP02-061",
      "name": "Ninomae Ina'nis",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Painting",
        "Sea"
      ],
      "bloom": "Debut",
      "hp": 140,
      "text": "Arts: WAH! 10 / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-062",
      "number": "hBP02-062",
      "name": "Ninomae Ina'nis",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Painting",
        "Sea"
      ],
      "bloom": "1st",
      "hp": 180,
      "text": "Arts: Takogram With You 60",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-063",
      "number": "hBP02-063",
      "name": "Ninomae Ina'nis",
      "type": "holomem",
      "color": "Purple",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Painting",
        "Sea"
      ],
      "bloom": "1st",
      "hp": 140,
      "text": "Arts: Let's have the Time of Our Lives! 30",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-064",
      "number": "hBP02-064",
      "name": "Ninomae Ina'nis",
      "type": "Buzz holomem",
      "color": "Purple",
      "rarity": "RR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Myth",
        "Painting",
        "Sea"
      ],
      "bloom": "1st",
      "hp": 250,
      "text": "Arts: Archaic Smile 60+ If you have 5 or more holomem with #Myth in your archive, you may reattach 1 cheer from this holomem to your other holomem. Then, if you have 10 or more, this Arts gets +50. / Extra: If this holomem is downed, you get life-2",
      "variants": [
        {
          "rarity": "RR",
          "artIndex": 0,
          "note": "RR Rarity"
        },
        {
          "rarity": "SR",
          "artIndex": 1,
          "note": "SR Rarity"
        },
        {
          "rarity": "UR",
          "artIndex": 2,
          "note": "UR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-065",
      "number": "hBP02-065",
      "name": "Nerissa Ravencroft",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Advent",
        "Singing",
        "Bird"
      ],
      "bloom": "Debut",
      "hp": 90,
      "text": "Arts: Hiya darlings! 30+ If a red cheer is attached to this holomem, this Arts gets +10. / Extra: You may include any number of this holomem in the deck",
      "market": []
    },
    {
      "id": "hBP02-066",
      "number": "hBP02-066",
      "name": "Nerissa Ravencroft",
      "type": "holomem",
      "color": "Purple",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Advent",
        "Singing",
        "Bird"
      ],
      "bloom": "1st",
      "hp": 150,
      "text": "Arts: That Has a Nice Ring to It 30",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-067",
      "number": "hBP02-067",
      "name": "Nerissa Ravencroft",
      "type": "holomem",
      "color": "Purple",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Advent",
        "Singing",
        "Bird"
      ],
      "bloom": "1st",
      "hp": 120,
      "text": "Arts: Tea Over Coffee 20",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-068",
      "number": "hBP02-068",
      "name": "Nerissa Ravencroft",
      "type": "holomem",
      "color": "Purple",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "EN",
        "Advent",
        "Singing",
        "Bird"
      ],
      "bloom": "2nd",
      "hp": 210,
      "text": "Arts: My Affections in a Song 80",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-069",
      "number": "hBP02-069",
      "name": "Magical Girl Miko",
      "type": "holomem",
      "color": "◇",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "holoWitches",
        "Gen+0",
        "Magic"
      ],
      "bloom": "Spot",
      "hp": 60,
      "text": "Arts: The Shrine Maiden's holo! 20 / Extra: This holomem cannot bloom",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-070",
      "number": "hBP02-070",
      "name": "Magical Girl Kanata",
      "type": "holomem",
      "color": "◇",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "holoWitches",
        "Gen+4",
        "Magic"
      ],
      "bloom": "Spot",
      "hp": 60,
      "text": "Arts: The Angel's holo! 20 / Extra: This holomem cannot bloom",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-071",
      "number": "hBP02-071",
      "name": "Magical Girl Luna",
      "type": "holomem",
      "color": "◇",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "holoWitches",
        "Gen+4",
        "Magic"
      ],
      "bloom": "Spot",
      "hp": 60,
      "text": "Arts: The Princess' holo! 20 / Extra: This holomem cannot bloom",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-072",
      "number": "hBP02-072",
      "name": "Magical Girl Shion",
      "type": "holomem",
      "color": "◇",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "holoWitches",
        "Gen+2",
        "Magic"
      ],
      "bloom": "Spot",
      "hp": 70,
      "text": "Arts: The Witch's holo! 20 / Extra: This holomem cannot bloom",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-073",
      "number": "hBP02-073",
      "name": "Magical Girl Marine",
      "type": "holomem",
      "color": "◇",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "holoWitches",
        "Gen+3",
        "Magic"
      ],
      "bloom": "Spot",
      "hp": 70,
      "text": "Arts: The Pirate's holo! 20 / Extra: This holomem cannot bloom",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-074",
      "number": "hBP02-074",
      "name": "Magical Girl Chloe",
      "type": "holomem",
      "color": "◇",
      "rarity": "R",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "holoWitches",
        "holoX",
        "Magic"
      ],
      "bloom": "Spot",
      "hp": 70,
      "text": "Arts: The Orca's holo! 20 / Extra: This holomem cannot bloom",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        },
        {
          "rarity": "R",
          "artIndex": 1,
          "note": "R Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-075",
      "number": "hBP02-075",
      "name": "Idol's Autograph Pen",
      "type": "Support・Item・LIMITED",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-076",
      "number": "hBP02-076",
      "name": "Custom PC",
      "type": "Support・Item",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-077",
      "number": "hBP02-077",
      "name": "Retro PC",
      "type": "Support・Item・LIMITED",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-078",
      "number": "hBP02-078",
      "name": "Kanata Construction",
      "type": "Support・Event・LIMITED",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-079",
      "number": "hBP02-079",
      "name": "Explosion Magic",
      "type": "Support・Event",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "Magic"
      ],
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-080",
      "number": "hBP02-080",
      "name": "holoX",
      "type": "Support・Event・LIMITED",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-081",
      "number": "hBP02-081",
      "name": "hololive Indonesia Gen 2",
      "type": "Support・Event・LIMITED",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-082",
      "number": "hBP02-082",
      "name": "hololive GAMERS",
      "type": "Support・Event・LIMITED",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-083",
      "number": "hBP02-083",
      "name": "Magic Dresser",
      "type": "Support・Event",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "Magic"
      ],
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-084",
      "number": "hBP02-084",
      "name": "Mikkorone 24",
      "type": "Support・Event・LIMITED",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        },
        {
          "rarity": "SEC",
          "artIndex": 2,
          "note": "SEC Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-085",
      "number": "hBP02-085",
      "name": "HOLOLIVE FANTASY",
      "type": "Support・Event・LIMITED",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-086",
      "number": "hBP02-086",
      "name": "holoSparkling",
      "type": "Support・Tool",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-087",
      "number": "hBP02-087",
      "name": "Murasaki Shion’s Magic Wand",
      "type": "Support・Tool",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "Magic"
      ],
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-088",
      "number": "hBP02-088",
      "name": "Mori Calliope's Scythe",
      "type": "Support・Tool",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-089",
      "number": "hBP02-089",
      "name": "Oruyanke",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "Shirakami's+Character"
      ],
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-090",
      "number": "hBP02-090",
      "name": "Nejimakitsune",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "Shirakami's+Character"
      ],
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-091",
      "number": "hBP02-091",
      "name": "Fubu-chun",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "Shirakami's+Character"
      ],
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-092",
      "number": "hBP02-092",
      "name": "Fubzilla",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "U",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "Shirakami's+Character"
      ],
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "U",
          "artIndex": 0,
          "note": "U Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-093",
      "number": "hBP02-093",
      "name": "Miteiru",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "Shirakami's+Character"
      ],
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-094",
      "number": "hBP02-094",
      "name": "Tatang",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-095",
      "number": "hBP02-095",
      "name": "Dokuro-kun",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-096",
      "number": "hBP02-096",
      "name": "inu",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-097",
      "number": "hBP02-097",
      "name": "UDIN",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-098",
      "number": "hBP02-098",
      "name": "Death-sensei",
      "type": "Support・Mascot",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-099",
      "number": "hBP02-099",
      "name": "Sukonbu",
      "type": "Support・Fan",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "Shirakami's+Character"
      ],
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-100",
      "number": "hBP02-100",
      "name": "Knight's Order of Shirogane",
      "type": "Support・Fan",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-101",
      "number": "hBP02-101",
      "name": "Mio-fam",
      "type": "Support・Fan",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hBP02-102",
      "number": "hBP02-102",
      "name": "Shiokko",
      "type": "Support・Fan",
      "color": "",
      "rarity": "C",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "bloom": "",
      "hp": "",
      "text": "",
      "variants": [
        {
          "rarity": "C",
          "artIndex": 0,
          "note": "C Rarity"
        },
        {
          "rarity": "S",
          "artIndex": 1,
          "note": "S Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hSD02-009",
      "number": "hSD02-009",
      "name": "Nakiri Ayame",
      "type": "holomem",
      "color": "Red",
      "rarity": "SR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2",
        "Shooter"
      ],
      "bloom": "2nd",
      "hp": 180,
      "text": "Arts: AyaFubuMi's \"Aya\" 60",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hSD03-009",
      "number": "hSD03-009",
      "name": "Nekomata Okayu",
      "type": "holomem",
      "color": "Blue",
      "rarity": "SR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "GAMERS",
        "Kemomimi"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        }
      ],
      "market": []
    },
    {
      "id": "hSD04-009",
      "number": "hSD04-009",
      "name": "Yuzuki Choco",
      "type": "holomem",
      "color": "Purple",
      "rarity": "SR",
      "set": "Booster Pack 2",
      "release": "2025-10-17 EN",
      "tags": [
        "JP",
        "Gen+2",
        "Cooking"
      ],
      "bloom": "2nd",
      "hp": 190,
      "text": "",
      "variants": [
        {
          "rarity": "SR",
          "artIndex": 0,
          "note": "SR Rarity"
        }
      ],
      "market": []
    }
,
{
    "id": "hBP03-001",
    "number": "hBP03-001",
    "name": "Himemori Luna",
    "type": "Oshi",
    "color": "White",
    "rarity": "OSR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] I Know How to Use a Computew! [1/Turn]Reveal 1 item with \"PC\" in its card name from your deck, and add it to hand. Then, shuffle the deck. / SP Oshi Skill: [holo Power：-2] Lu-knights, Assemble [1/Game]Usable if your center holomem is 〈Himemori Luna〉:Reveal 1~4 〈Lu-knights〉 from your deck, and attach them divided as you choose to your holomem. Then, shuffle the deck.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP03-002",
    "number": "hBP03-002",
    "name": "Shishiro Botan",
    "type": "Oshi",
    "color": "Green",
    "rarity": "OSR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] poi [1/Turn]Send 1 cheer from your archive to your back holomem 〈Shishiro Botan〉. / SP Oshi Skill: [holo Power：-2] Sniping [1/Game]Usable if your center holomem is green:Deal 100 special damage to your opponent's center holomem other than Debut.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      },
      {
        "rarity": "SEC",
        "artIndex": 2,
        "note": "Secret Rare (Alt Art/Signed)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP03-003",
    "number": "hBP03-003",
    "name": "Sakura Miko",
    "type": "Oshi",
    "color": "Red",
    "rarity": "OSR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] Are 35P Making a Comeback?! [1/Turn]You may roll a die once:If it is 1, 2, 4 or 6, return 1 〈35P〉 from your archive to hand. If it is 3 or 5, return 2 〈35P〉 from your archive to hand. / SP Oshi Skill: [holo Power：-2] The Strength to not Give Up [1/Game]Usable if your center holomem is red:Choose any number of cards from your hand and return them to the bottom of the deck in any order. Then, draw cards until your hand has 5 cards.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      },
      {
        "rarity": "SEC",
        "artIndex": 2,
        "note": "Secret Rare (Alt Art/Signed)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP03-004",
    "number": "hBP03-004",
    "name": "FUWAMOCO",
    "type": "Oshi",
    "color": "Blue",
    "rarity": "OSR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-3] Moco-chan! [1/Turn]Send the top card of your cheer deck to your 1st holomem 〈Mococo Abyssgard〉. / SP Oshi Skill: [holo Power：-2] BAU BAU! [1/Game]Choose 1 of your holomem with #Advent. During this turn, you may also target your opponent's back holomem with the chosen holomem's Arts.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP03-005",
    "number": "hBP03-005",
    "name": "Tokoyami Towa",
    "type": "Oshi",
    "color": "Purple",
    "rarity": "OSR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] Devil's Voice [1/Turn]During this turn, your [center holomem and collab holomem] with #Singing get Arts+20. / SP Oshi Skill: [holo Power：-2] Diabolical Deeds [1/Game]During your opponent's turn, usable when your 〈Tokoyami Towa〉 is downed:Return 2 cheers each from your opponent's center holomem and collab holomem to the bottom of the cheer deck in any order.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      },
      {
        "rarity": "SEC",
        "artIndex": 2,
        "note": "Secret Rare (Alt Art/Signed)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP03-006",
    "number": "hBP03-006",
    "name": "Inugami Korone",
    "type": "Oshi",
    "color": "Yellow",
    "rarity": "OSR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] Infinite Stamina [1/Turn]Set 1 of your resting 〈Inugami Korone〉 to active. / SP Oshi Skill: [holo Power：-3] Wow Wow Wow Wow [1/Game]Usable when your yellow holomem is downed:Reattach 1 of that holomem's cheers to your other holomem, and return 1 card from among the stacked holomem including that downed holomem to hand.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP03-007",
    "number": "hBP03-007",
    "name": "Tsunomaki Watame",
    "type": "Oshi",
    "color": "Yellow",
    "rarity": "OSR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] Welcome to the Member Sheep! [1/Turn]Reveal 1 fan from your deck, and add it to hand. Then, shuffle the deck. / SP Oshi Skill: [holo Power：-2] Watame isn't at fault, right? [1/Game]Send the top 2 cards of your cheer deck to 1 of your 〈Tsunomaki Watame〉.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      },
      {
        "rarity": "SEC",
        "artIndex": 2,
        "note": "Secret Rare (Alt Art/Signed)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP03-008",
    "number": "hBP03-008",
    "name": "Ayunda Risu",
    "type": "Oshi",
    "color": "Yellow",
    "rarity": "OSR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] hololive ID Family [1/Turn]Usable when your holomem with #ID Gen 1 is downed:Draw 1 card. / SP Oshi Skill: [holo Power：-2] Ganbari Risu~! [1/Game]During this turn, all 〈Ayunda Risu〉 on your stage get Arts+50.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP03-009",
    "number": "hBP03-009",
    "name": "Himemori Luna",
    "type": "holomem",
    "color": "White",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Baby"
    ],
    "bloom": "Debut",
    "hp": 90,
    "text": "Arts: Are you there, Everyone? 10 If you do not have a holomem with 〈Lu-knights〉 attached, reveal 1 〈Lu-knights〉 from your deck, and attach it to your holomem. Then, shuffle the deck. / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-010",
    "number": "hBP03-010",
    "name": "Himemori Luna",
    "type": "holomem",
    "color": "White",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Baby"
    ],
    "bloom": "Debut",
    "hp": 80,
    "text": "Arts: Do you Want Candy? 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-011",
    "number": "hBP03-011",
    "name": "Himemori Luna",
    "type": "holomem",
    "color": "White",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Baby"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Otsu-Luna 40",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-012",
    "number": "hBP03-012",
    "name": "Himemori Luna",
    "type": "holomem",
    "color": "White",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Baby"
    ],
    "bloom": "1st",
    "hp": 120,
    "text": "Arts: It's a Promise! 40",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-013",
    "number": "hBP03-013",
    "name": "Himemori Luna",
    "type": "holomem",
    "color": "White",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Baby"
    ],
    "bloom": "1st",
    "hp": 110,
    "text": "Arts: Moon Galaxy 20 You may attach 1 〈Lu-knights〉 from your archive to your 〈Himemori Luna〉.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-014",
    "number": "hBP03-014",
    "name": "Himemori Luna",
    "type": "holomem",
    "color": "White",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Baby"
    ],
    "bloom": "2nd",
    "hp": 180,
    "text": "Arts: Good Work Today 100+ If 〈Lu-knights〉 is attached to this holomen, this Arts gets +50.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-015",
    "number": "hBP03-015",
    "name": "Todoroki Hajime",
    "type": "holomem",
    "color": "White",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Baby"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: This is the Power of this Badass 110+ If you have 4 or more back holomem with #ReGLOSS, this holomem gets Arts+40.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-016",
    "number": "hBP03-016",
    "name": "Shishiro Botan",
    "type": "holomem",
    "color": "Green",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Kemomimi",
      "Shooter"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: La-lion♪ 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-017",
    "number": "hBP03-017",
    "name": "Shishiro Botan",
    "type": "holomem",
    "color": "Green",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Kemomimi",
      "Shooter"
    ],
    "bloom": "Debut",
    "hp": 80,
    "text": "Arts: Bo. 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-018",
    "number": "hBP03-018",
    "name": "Shishiro Botan",
    "type": "holomem",
    "color": "Green",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Kemomimi",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: If Botan became an Idol… 40",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-019",
    "number": "hBP03-019",
    "name": "Shishiro Botan",
    "type": "holomem",
    "color": "Green",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Kemomimi",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Slurp 30 Reveal 1 〈Tsunomaki Watame〉 from your hand, and you may return it to the bottom of the deck:Restore 20 HP to this holomem.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-020",
    "number": "hBP03-020",
    "name": "Shishiro Botan",
    "type": "holomem",
    "color": "Green",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Kemomimi",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 110,
    "text": "Arts: Arrived in a Shopping Cart 50",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-021",
    "number": "hBP03-021",
    "name": "Shishiro Botan",
    "type": "holomem",
    "color": "Green",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Kemomimi",
      "Shooter"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: God-Tier Aim 110 If your Oshi holomem is 〈Shishiro Botan〉, you may archive 1 cheer from your back holomem:Deal 40 special damage to your opponent's center holomem or collab holomem.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-022",
    "number": "hBP03-022",
    "name": "Aki Rosenthal",
    "type": "Buzz holomem",
    "color": "Green",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+1",
      "Half-Elf",
      "Alcohol"
    ],
    "bloom": "1st",
    "hp": 250,
    "text": "Arts: Passionate Belly Dancer 50 If your Oshi holomem is 〈Aki Rosenthal〉, restore 10 HP to all of your holomem with a tool attached. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-023",
    "number": "hBP03-023",
    "name": "Usada Pekora",
    "type": "Buzz holomem",
    "color": "Green",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+3",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 230,
    "text": "Arts: Time to Play Cards Peko 80+ If a die was rolled once or more by the ability of your 〈Usada Pekora〉 this turn, this Arts gets +40. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-024",
    "number": "hBP03-024",
    "name": "Kazama Iroha",
    "type": "holomem",
    "color": "Green",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "holoX"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Kazama Attacc 100+ If 2 or more non-green cheers are attached to this holomem, this Arts gets +50.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-025",
    "number": "hBP03-025",
    "name": "Sakura Miko",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Baby"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Nya-hello~ 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-026",
    "number": "hBP03-026",
    "name": "Sakura Miko",
    "type": "holomem",
    "color": "Red",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Baby"
    ],
    "bloom": "Debut",
    "hp": 80,
    "text": "Arts: Cherry Blossom Season 30",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-027",
    "number": "hBP03-027",
    "name": "Sakura Miko",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Baby"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Elite Swimsuit 40",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-028",
    "number": "hBP03-028",
    "name": "Sakura Miko",
    "type": "holomem",
    "color": "Red",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Baby"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Give me your Support 30",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-029",
    "number": "hBP03-029",
    "name": "Sakura Miko",
    "type": "holomem",
    "color": "Red",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Baby"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Commemorative Photo with 35P 30+ If 〈35P〉 is attached to this holomem, this Arts gets +30.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-030",
    "number": "hBP03-030",
    "name": "Sakura Miko",
    "type": "holomem",
    "color": "Red",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Baby"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Elite Shrine Maiden 120+ This Arts gets +20 for each 〈35P〉 attached to this holomem.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-031",
    "number": "hBP03-031",
    "name": "Akai Haato",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+1",
      "Cooking"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Good Morning-Rouge! 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-032",
    "number": "hBP03-032",
    "name": "Akai Haato",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+1",
      "Cooking"
    ],
    "bloom": "1st",
    "hp": 170,
    "text": "Arts: Good Job-Rouge! 60",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-033",
    "number": "hBP03-033",
    "name": "Akai Haato",
    "type": "holomem",
    "color": "Red",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+1",
      "Cooking"
    ],
    "bloom": "1st",
    "hp": 120,
    "text": "Arts: Haachama-chama~! 40",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-034",
    "number": "hBP03-034",
    "name": "Akai Haato",
    "type": "Buzz holomem",
    "color": "Red",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+1",
      "Cooking"
    ],
    "bloom": "1st",
    "hp": 240,
    "text": "Arts: Red or Rouge 40+ You may roll a die once:If it is odd, deal 20 special damage to your opponent's center holomem and collab holomem. If it is even, this Arts gets +40. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-035",
    "number": "hBP03-035",
    "name": "Takane Lui",
    "type": "Buzz holomem",
    "color": "Red",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "holoX",
      "Bird",
      "Alcohol"
    ],
    "bloom": "1st",
    "hp": 240,
    "text": "Arts: challenger 50 If your Oshi holomem is 〈Takane Lui〉, you may archive 2 cards from your hand:Draw 3 cards. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-036",
    "number": "hBP03-036",
    "name": "Takanashi Kiara",
    "type": "holomem",
    "color": "Red",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "EN",
      "Myth",
      "Bird"
    ],
    "bloom": "1st",
    "hp": 140,
    "text": "Arts: Wings of Steel 50",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-037",
    "number": "hBP03-037",
    "name": "Mococo Abyssgard",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "EN",
      "Advent",
      "Kemomimi"
    ],
    "bloom": "Debut",
    "hp": 80,
    "text": "Arts: I'm not Fuwawa, I'm Mococo 20 If your center holomem is 〈Fuwawa Abyssgard〉, this Arts requires -1 colorless. / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-038",
    "number": "hBP03-038",
    "name": "Mococo Abyssgard",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "EN",
      "Advent",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Donut Cooking with Mococo 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-039",
    "number": "hBP03-039",
    "name": "Mococo Abyssgard",
    "type": "Buzz holomem",
    "color": "Red",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "EN",
      "Advent",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 240,
    "text": "Arts: The Fuzzy One 50+ [Collab Position Only]If your center holomem is 〈Fuwawa Abyssgard〉, this Arts gets +30. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-040",
    "number": "hBP03-040",
    "name": "Fuwawa Abyssgard",
    "type": "holomem",
    "color": "Blue",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "EN",
      "Advent",
      "Kemomimi"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: I'm not a Chihuahua, I'm Fuwawa 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-041",
    "number": "hBP03-041",
    "name": "Fuwawa Abyssgard",
    "type": "holomem",
    "color": "Blue",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "EN",
      "Advent",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: The Moodmaker of the Demonic Guard Dogs 40",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-042",
    "number": "hBP03-042",
    "name": "Fuwawa Abyssgard",
    "type": "holomem",
    "color": "Blue",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "EN",
      "Advent",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 140,
    "text": "Arts: Strolling in the Forest with Fuwawa 50",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-043",
    "number": "hBP03-043",
    "name": "Fuwawa Abyssgard",
    "type": "holomem",
    "color": "Blue",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "EN",
      "Advent",
      "Kemomimi"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: I Love Donuts 60",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-044",
    "number": "hBP03-044",
    "name": "Hoshimachi Suisei",
    "type": "holomem",
    "color": "Blue",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Virtual Ghost 40 If your Oshi holomem is 〈Hoshimachi Suisei〉, you may reattach 1 blue cheer from this holomem to your back holomem 〈Hoshimachi Suisei〉.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-045",
    "number": "hBP03-045",
    "name": "Kobo Kanaeru",
    "type": "Buzz holomem",
    "color": "Blue",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "ID",
      "ID+Gen+3"
    ],
    "bloom": "1st",
    "hp": 230,
    "text": "Arts: Full of energy! 40+ This Arts gets +10 for each of your opponent's back holomem with reduced HP. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-046",
    "number": "hBP03-046",
    "name": "Hiodoshi Ao",
    "type": "holomem",
    "color": "Blue",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Painting"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Did you Mistake me for some Cutesy Girl? 10 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-047",
    "number": "hBP03-047",
    "name": "Hiodoshi Ao",
    "type": "holomem",
    "color": "Blue",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Painting"
    ],
    "bloom": "1st",
    "hp": 170,
    "text": "Arts: After the Afternoon Tea Date… 60",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-048",
    "number": "hBP03-048",
    "name": "Hiodoshi Ao",
    "type": "holomem",
    "color": "Blue",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Painting"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: I'm pretty Cool, right? 30",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-049",
    "number": "hBP03-049",
    "name": "Hiodoshi Ao",
    "type": "Buzz holomem",
    "color": "Blue",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Painting"
    ],
    "bloom": "1st",
    "hp": 230,
    "text": "Arts: Leave it to the Handsome One! 50 Deal 10 special damage for each of your back holomem with #ReGLOSS and with different card names to your opponent's center holomem or 1 of their back holomem. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-050",
    "number": "hBP03-050",
    "name": "FUWAMOCO",
    "type": "holomem",
    "color": "青赤",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "EN",
      "Advent",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Twin Demonic Guard Dogs 40 Reveal 1 [red cheer or blue cheer] from your cheer deck, and send it to your holomem with #Advent. Then, shuffle the cheer deck. / Extra: This holomem is also regarded as 〈Fuwawa Abyssgard〉〈Mococo Abyssgard〉",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-051",
    "number": "hBP03-051",
    "name": "Tokoyami Towa",
    "type": "holomem",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing",
      "Shooter"
    ],
    "bloom": "Debut",
    "hp": 110,
    "text": "Arts: Suppies! 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-052",
    "number": "hBP03-052",
    "name": "Tokoyami Towa",
    "type": "holomem",
    "color": "Purple",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing",
      "Shooter"
    ],
    "bloom": "Debut",
    "hp": 80,
    "text": "Arts: So that's how it is, huh 20 Deal 10 special damage to your opponent's center holomem. If your Oshi holomem is 〈Tokoyami Towa〉, you may archive 1 tool attached to your opponent's [center holomem or collab holomem].",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-053",
    "number": "hBP03-053",
    "name": "Tokoyami Towa",
    "type": "holomem",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 170,
    "text": "Arts: Toodlies! 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-054",
    "number": "hBP03-054",
    "name": "Tokoyami Towa",
    "type": "holomem",
    "color": "Purple",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 140,
    "text": "Arts: I'm gonna make a huge explosion! 30 You may archive 4 purple cheer from this holomem:Return 1 cheer from your opponent's stage to the bottom of the cheer deck.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-055",
    "number": "hBP03-055",
    "name": "Tokoyami Towa",
    "type": "holomem",
    "color": "Purple",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: You can have a Home Date with Towa 40",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-056",
    "number": "hBP03-056",
    "name": "Tokoyami Towa",
    "type": "holomem",
    "color": "Purple",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing",
      "Shooter"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: Breaking Out of the Stereotypes 30 Deal 30 special damage to your opponent's center holomem or collab holomem.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-057",
    "number": "hBP03-057",
    "name": "Robocosan",
    "type": "holomem",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Shooter"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Hellobo! 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-058",
    "number": "hBP03-058",
    "name": "Robocosan",
    "type": "holomem",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 170,
    "text": "Arts: Otsu-Robo 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-059",
    "number": "hBP03-059",
    "name": "Robocosan",
    "type": "holomem",
    "color": "Purple",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Give me a Smile 40",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-060",
    "number": "hBP03-060",
    "name": "Robocosan",
    "type": "holomem",
    "color": "Purple",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+0",
      "Shooter"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Self-Proclaimed 【high-spec】 70+ If your opponent's stage has 7 or more cheers, this Arts gets +70.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-061",
    "number": "hBP03-061",
    "name": "Inugami Korone",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "GAMERS",
      "Kemomimi"
    ],
    "bloom": "Debut",
    "hp": 120,
    "text": "Arts: Ello! 20 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-062",
    "number": "hBP03-062",
    "name": "Inugami Korone",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "GAMERS",
      "Kemomimi"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: This is what you ordered, y'know 30",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-063",
    "number": "hBP03-063",
    "name": "Inugami Korone",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "GAMERS",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 200,
    "text": "Arts: Otsu-Koron 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-064",
    "number": "hBP03-064",
    "name": "Inugami Korone",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "GAMERS",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: BrRRAAAAAAAAH!!!!!!!!!!!!!! 40+ This Arts gets +10 for each life reduced from your initial life.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-065",
    "number": "hBP03-065",
    "name": "Inugami Korone",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "GAMERS",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Here ya go~ 30 Send the top card of your cheer deck to your holomem with #GAMERS.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-066",
    "number": "hBP03-066",
    "name": "Inugami Korone",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "GAMERS",
      "Kemomimi"
    ],
    "bloom": "2nd",
    "hp": 210,
    "text": "Arts: The Biggest Disaster 120+ If the target of this Arts is your opponent's 2nd holomem, you may archive 1 1st holomem stacked to this holomem:This Arts gets +50.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-067",
    "number": "hBP03-067",
    "name": "Tsunomaki Watame",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "Debut",
    "hp": 110,
    "text": "Arts: Hoof, hoof, helloof! 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-068",
    "number": "hBP03-068",
    "name": "Tsunomaki Watame",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "Debut",
    "hp": 90,
    "text": "Arts: Watame's Song 20 If you have a holomem with 〈Watamates〉 attached, you may send 1 cheer from your archive to your yellow holomem.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-069",
    "number": "hBP03-069",
    "name": "Tsunomaki Watame",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 190,
    "text": "Arts: A Healing Moment 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-070",
    "number": "hBP03-070",
    "name": "Tsunomaki Watame",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Watch until the end, Watamates! 30 Send the top card of your cheer deck to your back holomem 〈Tsunomaki Watame〉.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-071",
    "number": "hBP03-071",
    "name": "Tsunomaki Watame",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: Tsunomaki Rock Paper Scissors 50 You may play rock-paper-scissors with your opponent until there's a winner:If you won, during this turn, this holomem gets Red Critical+30.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-072",
    "number": "hBP03-072",
    "name": "Tsunomaki Watame",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Watame Night Fever!! 80+ [Center Position Only]If 6 or more cheers are attached to this holomem, during this turn, this holomem and your collab holomem get Arts+100.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-073",
    "number": "hBP03-073",
    "name": "Ayunda Risu",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "ID",
      "ID+Gen+1",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "Debut",
    "hp": 110,
    "text": "Arts: Kon-Risu 20 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-074",
    "number": "hBP03-074",
    "name": "Ayunda Risu",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "ID",
      "ID+Gen+1",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "Debut",
    "hp": 80,
    "text": "Arts: Connected Wishes 20+ ■If your stage has 〈Airani Iofifteen〉, this Arts gets +10. ■If your stage has 〈Moona Hoshinova〉, this Arts gets +10.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-075",
    "number": "hBP03-075",
    "name": "Ayunda Risu",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "ID",
      "ID+Gen+1",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 170,
    "text": "Arts: Otsu-Risu 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-076",
    "number": "hBP03-076",
    "name": "Ayunda Risu",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "ID",
      "ID+Gen+1",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Puru Puru, Otsu-Risu!!! 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-077",
    "number": "hBP03-077",
    "name": "Ayunda Risu",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "ID",
      "ID+Gen+1",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: Nuts 40",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-078",
    "number": "hBP03-078",
    "name": "Ayunda Risu",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "ID",
      "ID+Gen+1",
      "Kemomimi",
      "Singing"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: Squirrel Girl from the Magical Forest 50+ ■If a green cheer is attached to this holomem, this Arts gets +50. ■If a blue cheer is attached to this holomem, this Arts gets +50.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-079",
    "number": "hBP03-079",
    "name": "Shiranui Flare",
    "type": "Buzz holomem",
    "color": "Yellow",
    "rarity": "RR",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "JP",
      "Gen+3",
      "Half-Elf"
    ],
    "bloom": "1st",
    "hp": 240,
    "text": "Arts: Sunrise Cheer 50+ If 3 or more cheers are attached to this holomem, this Arts gets +30. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-080",
    "number": "hBP03-080",
    "name": "Otonose Kanade",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Singing"
    ],
    "bloom": "Debut",
    "hp": 130,
    "text": "Arts: Do-Re-Mi-Fa-So-La-Si-Do! 20 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP03-081",
    "number": "hBP03-081",
    "name": "Otonose Kanade",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 180,
    "text": "Arts: Tomorrow is Monday~♪ 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-082",
    "number": "hBP03-082",
    "name": "Otonose Kanade",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: I'm not squishy! 60",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-083",
    "number": "hBP03-083",
    "name": "Otonose Kanade",
    "type": "Buzz holomem",
    "color": "Yellow",
    "rarity": "R",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 250,
    "text": "Arts: Songstress, Otonose Kanade 120 / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-084",
    "number": "hBP03-084",
    "name": "Gorgeous PC",
    "type": "Support・Item・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-085",
    "number": "hBP03-085",
    "name": "Super PC",
    "type": "Support・Item・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-086",
    "number": "hBP03-086",
    "name": "Dual-Monitor PC",
    "type": "Support・Item・LIMITED",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-087",
    "number": "hBP03-087",
    "name": "Call and Response",
    "type": "Support・Event",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-088",
    "number": "hBP03-088",
    "name": "Totsumachi",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-089",
    "number": "hBP03-089",
    "name": "Fan Meeting",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-090",
    "number": "hBP03-090",
    "name": "Can You Do the hololive?",
    "type": "Support・Event",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-091",
    "number": "hBP03-091",
    "name": "hololive Indonesia Gen 1",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-092",
    "number": "hBP03-092",
    "name": "hololive Gen 0",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-093",
    "number": "hBP03-093",
    "name": "hololive Gen 4",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-094",
    "number": "hBP03-094",
    "name": "FPS Stream",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-095",
    "number": "hBP03-095",
    "name": "holoCap",
    "type": "Support・Tool",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-096",
    "number": "hBP03-096",
    "name": "Rifle",
    "type": "Support・Tool",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-097",
    "number": "hBP03-097",
    "name": "Recorder",
    "type": "Support・Tool",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-098",
    "number": "hBP03-098",
    "name": "Kintoki",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-099",
    "number": "hBP03-099",
    "name": "Maguchi",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-100",
    "number": "hBP03-100",
    "name": "Pero",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-101",
    "number": "hBP03-101",
    "name": "Bibi",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-102",
    "number": "hBP03-102",
    "name": "Futoinu",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-103",
    "number": "hBP03-103",
    "name": "Hosoinu",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-104",
    "number": "hBP03-104",
    "name": "Riscot",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP03-105",
    "number": "hBP03-105",
    "name": "Lu-knights",
    "type": "Support・Fan",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP03-106",
    "number": "hBP03-106",
    "name": "SSRB",
    "type": "Support・Fan",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP03-107",
    "number": "hBP03-107",
    "name": "35P",
    "type": "Support・Fan",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP03-108",
    "number": "hBP03-108",
    "name": "Haaton",
    "type": "Support・Fan",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "Shirakami's+Character"
    ],
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP03-109",
    "number": "hBP03-109",
    "name": "Ruffians",
    "type": "Support・Fan",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP03-110",
    "number": "hBP03-110",
    "name": "Roboser",
    "type": "Support・Fan",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP03-111",
    "number": "hBP03-111",
    "name": "Koronesky",
    "type": "Support・Fan",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP03-112",
    "number": "hBP03-112",
    "name": "Watamates",
    "type": "Support・Fan",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP03-113",
    "number": "hBP03-113",
    "name": "Risuners",
    "type": "Support・Fan",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hY01-001",
    "number": "hY01-001",
    "name": "White Cheer",
    "type": "Cheer",
    "color": "White",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hY02-001",
    "number": "hY02-001",
    "name": "Green Cheer",
    "type": "Cheer",
    "color": "Green",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hY03-001",
    "number": "hY03-001",
    "name": "Red Cheer",
    "type": "Cheer",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hY04-001",
    "number": "hY04-001",
    "name": "Blue Cheer",
    "type": "Cheer",
    "color": "Blue",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hY05-001",
    "number": "hY05-001",
    "name": "Purple Cheer",
    "type": "Cheer",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hY06-001",
    "number": "hY06-001",
    "name": "Yellow Cheer",
    "type": "Cheer",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  }
,
{
    "id": "hBP02-084",
    "number": "hBP02-084",
    "name": "Mikkorone 24",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "U",
        "artIndex": 1,
        "note": "U Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP03-093",
    "number": "hBP03-093",
    "name": "hololive Gen 4",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-001",
    "number": "hBP04-001",
    "name": "Hakui Koyori",
    "type": "Oshi",
    "color": "White",
    "rarity": "OSR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] Koyori Experimenting [1/Turn]During this turn, 1 of your 〈Hakui Koyori〉 that has a support card with #KOYO LABO attached gets Arts+30. / SP Oshi Skill: [holo Power：-2] Assistants, mmmwah! [1/Game]Usable if your 〈Hakui Koyori〉 with 〈Koyori's Assistants〉 attached would take damage from the opponent during the opponent's turn:1 of those holomem takes -100 damage.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      },
      {
        "rarity": "SEC",
        "artIndex": 2,
        "note": "Secret Rare (Alt Art/Signed)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP04-002",
    "number": "hBP04-002",
    "name": "Juufuutei Raden",
    "type": "Oshi",
    "color": "Green",
    "rarity": "OSR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] ReGLOSS's Elegant Girl [1/Turn]Send 1 cheer from your archive to your holomem with #ReGLOSS. / SP Oshi Skill: [holo Power：-2] With the Extra Time, Round and Round [1/Game]Return 1~4 events with #Mushroom from your archive to hand. Then, draw 1 card for every 2 cards returned to hand.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP04-003",
    "number": "hBP04-003",
    "name": "Ichijou Ririka",
    "type": "Oshi",
    "color": "Red",
    "rarity": "OSR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-3] Reach the Top! [1/Turn]If your center holomem has #ReGLOSS, deal 50 special damage to your opponent's collab holomem. / SP Oshi Skill: [holo Power：-1] Cute! Positive! Genius! [1/Game]Usable when your 〈Ichijou Ririka〉 is downed during the opponent's turn:Reveal 1 [〈Ichijou Ririka〉 and/or 〈Struggle Meal〉] each from your deck, and add them to hand. Then, shuffle the deck.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP04-004",
    "number": "hBP04-004",
    "name": "Yukihana Lamy",
    "type": "Oshi",
    "color": "Blue",
    "rarity": "OSR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-1] I Love You [1/Turn]Usable when your holomem is downed during the opponent's turn:Return 1 fan attached to that holomem to hand. / SP Oshi Skill: [holo Power：-3] Vroom, Bari Bari Bari Bari [1/Game]Choose 1 of your 〈Yukihana Lamy〉. During this turn, the chosen holomem deals +100 special damage to 1 of your opponent's holomem, and if the chosen holomem downed an opponent's holomem, draw 2 cards.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      },
      {
        "rarity": "SEC",
        "artIndex": 2,
        "note": "Secret Rare (Alt Art/Signed)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP04-005",
    "number": "hBP04-005",
    "name": "La+ Darknesss",
    "type": "Oshi",
    "color": "Purple",
    "rarity": "OSR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] Leader's Work [1/Turn]During this turn, if you would roll a die 3 times for 1 ability of your holomem, regard all numbers on the faces of that die as 5. / SP Oshi Skill: [holo Power：-3] We Are Secret Society holoX! [1/Game]Choose 1 of your holomem with #holoX. During this turn, the chosen holomem's Arts may be used without cheer requirements.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      },
      {
        "rarity": "SEC",
        "artIndex": 2,
        "note": "Secret Rare (Alt Art/Signed)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP04-006",
    "number": "hBP04-006",
    "name": "Oozora Subaru",
    "type": "Oshi",
    "color": "Yellow",
    "rarity": "OSR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] Mental! Physical! Passion! [1/Turn]Usable if your 〈Oozora Subaru〉 would take damage from the opponent during the opponent's turn:All of your 〈Oozora Subaru〉 take -30 damage. / SP Oshi Skill: [holo Power：-2] Comedic Reactions [1/Game]Usable if your life is 3 or less:During this turn, your center holomem 〈Oozora Subaru〉 gets Arts+100.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      },
      {
        "rarity": "SEC",
        "artIndex": 2,
        "note": "Secret Rare (Alt Art/Signed)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP04-007",
    "number": "hBP04-007",
    "name": "Anya Melfissa",
    "type": "Oshi",
    "color": "Yellow",
    "rarity": "OSR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "text": "Oshi Skill: [holo Power：-2] Mystical Ritual [1/Turn]Reveal 1 〈Ancient Weapon〉 from your deck, and attach it to your holomem. Then, shuffle the deck. / SP Oshi Skill: [holo Power：-2] Those Who Think about Life Win [1/Game]Send 1 cheer each from your archive to all of your holomem with 〈Ancient Weapon〉 attached.",
    "variants": [
      {
        "rarity": "OSR",
        "artIndex": 0,
        "note": "Oshi Super Rare"
      },
      {
        "rarity": "OUR",
        "artIndex": 1,
        "note": "Oshi Ultra Rare (Alt Art)"
      }
    ],
    "market": [],
    "life": 5
  },
  {
    "id": "hBP04-008",
    "number": "hBP04-008",
    "name": "Hakui Koyori",
    "type": "holomem",
    "color": "White",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Kemomimi"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Konkoyo~ 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-009",
    "number": "hBP04-009",
    "name": "Hakui Koyori",
    "type": "holomem",
    "color": "White",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Kemomimi"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Oh, You Poor Souls Lost within an Eternal Cycle 20 Look at the top 3 cards of your deck. Reveal 1 [Debut holomem with #holoX or support card with #KOYO LABO] from among them, and add it to hand. Then, return the remaining cards to the bottom of the deck in any order.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-010",
    "number": "hBP04-010",
    "name": "Hakui Koyori",
    "type": "holomem",
    "color": "White",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: Assistants~ Are You Tired? 40",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-011",
    "number": "hBP04-011",
    "name": "Hakui Koyori",
    "type": "holomem",
    "color": "White",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 140,
    "text": "Arts: Assistants, Pay Attention! 30 You may attach 1 〈Koyori's Assistants〉 from your archive to your other 〈Hakui Koyori〉.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-012",
    "number": "hBP04-012",
    "name": "Hakui Koyori",
    "type": "holomem",
    "color": "White",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Kemomimi"
    ],
    "bloom": "1st",
    "hp": 140,
    "text": "Arts: Koyo and Her Assistants Will Always Be Together! 30 If 〈Koyori's Assistants〉 is attached to this holomem, draw 1 card.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-013",
    "number": "hBP04-013",
    "name": "Hakui Koyori",
    "type": "holomem",
    "color": "White",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Kemomimi"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Koyori's Awakening 160 If a support card with #KOYO LABO is attached to this holomem, reveal 1 support card with #KOYO LABO from your deck, and add it to hand. Then, shuffle the deck.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-014",
    "number": "hBP04-014",
    "name": "Shirakami Fubuki",
    "type": "holomem",
    "color": "White",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+1",
      "GAMERS",
      "Kemomimi",
      "Painting"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: My Precious One 100+ If your stage has a holomem with #GAMERS other than 〈Shirakami Fubuki〉, this Arts gets +50.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-015",
    "number": "hBP04-015",
    "name": "IRyS",
    "type": "Buzz holomem",
    "color": "White",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Promise",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 230,
    "text": "Arts: The Race Queen 30+ This Arts gets +10 for each holomem with #Promise on your stage. However, only up to 4 holomem are counted. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-016",
    "number": "hBP04-016",
    "name": "Raora Panthera",
    "type": "holomem",
    "color": "White",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice",
      "Kemomimi",
      "Painting"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Ciaora 10 If your stage has 5 or less holomem, reveal 1 Spot holomem with #Justice from your deck, and you may place it on stage. Then, shuffle the deck. / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-017",
    "number": "hBP04-017",
    "name": "Raora Panthera",
    "type": "holomem",
    "color": "White",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice",
      "Kemomimi",
      "Painting"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Pink Panther of Justice 40",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-018",
    "number": "hBP04-018",
    "name": "Raora Panthera",
    "type": "holomem",
    "color": "White",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice",
      "Kemomimi",
      "Painting"
    ],
    "bloom": "1st",
    "hp": 140,
    "text": "Arts: Information Gathering Is My Specialty 50",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-019",
    "number": "hBP04-019",
    "name": "Raora Panthera",
    "type": "holomem",
    "color": "White",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice",
      "Kemomimi",
      "Painting"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: Art Streamer 70+ [Collab Position Only]If your center holomem has #Painting, this Arts gets +80.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-020",
    "number": "hBP04-020",
    "name": "Juufuutei Raden",
    "type": "holomem",
    "color": "Green",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Alcohol"
    ],
    "bloom": "Debut",
    "hp": 110,
    "text": "Arts: The Juufuutei Family Are Still Apprentice Curtain Raisers! 20 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-021",
    "number": "hBP04-021",
    "name": "Juufuutei Raden",
    "type": "holomem",
    "color": "Green",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Alcohol"
    ],
    "bloom": "Debut",
    "hp": 90,
    "text": "Arts: Raden Standby 30",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-022",
    "number": "hBP04-022",
    "name": "Juufuutei Raden",
    "type": "holomem",
    "color": "Green",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Alcohol"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: Knowledgeable Clapback 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-023",
    "number": "hBP04-023",
    "name": "Juufuutei Raden",
    "type": "holomem",
    "color": "Green",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Alcohol"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Jokester 40",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-024",
    "number": "hBP04-024",
    "name": "Juufuutei Raden",
    "type": "holomem",
    "color": "Green",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Alcohol"
    ],
    "bloom": "1st",
    "hp": 170,
    "text": "Arts: Reminiscing Applause 30 You may send 1 cheer from your archive to this holomem.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-025",
    "number": "hBP04-025",
    "name": "Juufuutei Raden",
    "type": "holomem",
    "color": "Green",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Alcohol"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Looks Like the Next Act Is Ready 140+ If your Oshi holomem is 〈Juufuutei Raden〉, you may reattach 2 cheers from this holomem each to 2 of your back holomem:This Arts gets +30.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-026",
    "number": "hBP04-026",
    "name": "Ookami Mio",
    "type": "holomem",
    "color": "Green",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "GAMERS",
      "Kemomimi",
      "Cooking"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: Wait, I Belong to Fubuki? 100+ If your stage has a holomem with #GAMERS other than 〈Ookami Mio〉, this Arts gets +50.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-027",
    "number": "hBP04-027",
    "name": "Pavolia Reine",
    "type": "holomem",
    "color": "Green",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+2",
      "Bird",
      "Painting"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Terima Kasih 30",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-028",
    "number": "hBP04-028",
    "name": "Cecilia Immergreen",
    "type": "holomem",
    "color": "Green",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice",
      "Language"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Melody of Justice 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-029",
    "number": "hBP04-029",
    "name": "Cecilia Immergreen",
    "type": "holomem",
    "color": "Green",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice",
      "Language"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: An Ancient Automaton 60",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-030",
    "number": "hBP04-030",
    "name": "Cecilia Immergreen",
    "type": "holomem",
    "color": "Green",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice",
      "Language"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Would You Like to Listen? 50",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-031",
    "number": "hBP04-031",
    "name": "Cecilia Immergreen",
    "type": "holomem",
    "color": "Green",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice",
      "Language"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Multilingual 80 Choose 1 of your back holomem with #Language. Reveal 1 cheer from your cheer deck with the same color as the chosen holomem, and send it to the chosen holomem. Then, shuffle the cheer deck.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-032",
    "number": "hBP04-032",
    "name": "Ichijou Ririka",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Cooking",
      "Language"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Kon-Riri 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-033",
    "number": "hBP04-033",
    "name": "Ichijou Ririka",
    "type": "holomem",
    "color": "Red",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Cooking",
      "Language"
    ],
    "bloom": "Debut",
    "hp": 120,
    "text": "Arts: Ririka Standby 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-034",
    "number": "hBP04-034",
    "name": "Ichijou Ririka",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Cooking",
      "Language"
    ],
    "bloom": "1st",
    "hp": 170,
    "text": "Arts: Let's Dance 40",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-035",
    "number": "hBP04-035",
    "name": "Ichijou Ririka",
    "type": "holomem",
    "color": "Red",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Cooking",
      "Language"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Entrepreneur Punch 50 Deal 20 special damage to your opponent's collab holomem.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-036",
    "number": "hBP04-036",
    "name": "Ichijou Ririka",
    "type": "holomem",
    "color": "Red",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Cooking",
      "Language"
    ],
    "bloom": "1st",
    "hp": 140,
    "text": "Arts: Heehee 30 If the target of this Arts is your opponent's collab holomem, draw 1 card.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-037",
    "number": "hBP04-037",
    "name": "Ichijou Ririka",
    "type": "holomem",
    "color": "Red",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "DEV_IS",
      "ReGLOSS",
      "Cooking",
      "Language"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Oh? Wanna Fight? 80 Deal 50 special damage to your opponent's center holomem. If you used 〈Struggle Meal〉 this turn, deal 30 special damage to your opponent's center holomem or collab holomem.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-038",
    "number": "hBP04-038",
    "name": "Houshou Marine",
    "type": "holomem",
    "color": "Red",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+3",
      "Painting",
      "Sea"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Perv♥♥ 50+ This Arts gets +20 for each holomem that is stacked to this holomem.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-039",
    "number": "hBP04-039",
    "name": "Kaela Kovalskia",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+3"
    ],
    "bloom": "Debut",
    "hp": 120,
    "text": "Arts: Oha-Ela 20 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-040",
    "number": "hBP04-040",
    "name": "Kaela Kovalskia",
    "type": "holomem",
    "color": "Red",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+3"
    ],
    "bloom": "1st",
    "hp": 170,
    "text": "Arts: When Life is Hard 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-041",
    "number": "hBP04-041",
    "name": "Kaela Kovalskia",
    "type": "holomem",
    "color": "Red",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+3"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Silent Laugh 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-042",
    "number": "hBP04-042",
    "name": "Kaela Kovalskia",
    "type": "Buzz holomem",
    "color": "Red",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+3"
    ],
    "bloom": "1st",
    "hp": 240,
    "text": "Arts: holoh3ro 30 If your stage has other holomem with #ID Gen 3, draw 1 card. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-043",
    "number": "hBP04-043",
    "name": "Yukihana Lamy",
    "type": "holomem",
    "color": "Blue",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Half-Elf",
      "Alcohol"
    ],
    "bloom": "Debut",
    "hp": 90,
    "text": "Arts: Lamyoohoo 20 Deal 10 special damage to 1 of your opponent's holomem. However, your opponent's life does not reduce even if downed. / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-044",
    "number": "hBP04-044",
    "name": "Yukihana Lamy",
    "type": "holomem",
    "color": "Blue",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Half-Elf",
      "Alcohol"
    ],
    "bloom": "Debut",
    "hp": 80,
    "text": "Arts: Ugh… 30",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-045",
    "number": "hBP04-045",
    "name": "Yukihana Lamy",
    "type": "holomem",
    "color": "Blue",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Half-Elf",
      "Alcohol"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Lamy Later 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-046",
    "number": "hBP04-046",
    "name": "Yukihana Lamy",
    "type": "holomem",
    "color": "Blue",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Half-Elf",
      "Alcohol"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: I'll Work Very Hard! 30 If you have a holomem with a fan attached, deal 10 special damage to 1 of your opponent's holomem.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-047",
    "number": "hBP04-047",
    "name": "Yukihana Lamy",
    "type": "holomem",
    "color": "Blue",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Half-Elf",
      "Alcohol"
    ],
    "bloom": "1st",
    "hp": 120,
    "text": "Arts: Bouquet of Shimmering Snow 50",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-048",
    "number": "hBP04-048",
    "name": "Yukihana Lamy",
    "type": "holomem",
    "color": "Blue",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Half-Elf",
      "Alcohol"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: May Today Be a Blessed Day 130 You may archive 1 cheer from this holomem:Deal 30 special damage to 1 of your opponent's center holomem or back holomem.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-049",
    "number": "hBP04-049",
    "name": "Moona Hoshinova",
    "type": "holomem",
    "color": "Blue",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+1",
      "Singing"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: Stage of Moon and Stars 50",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-050",
    "number": "hBP04-050",
    "name": "Shiori Novella",
    "type": "holomem",
    "color": "Blue",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Advent"
    ],
    "bloom": "Debut",
    "hp": 110,
    "text": "Arts: Shiori~n! 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-051",
    "number": "hBP04-051",
    "name": "Shiori Novella",
    "type": "holomem",
    "color": "Blue",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Advent"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Don't You Think That's a Wonderful Story? 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-052",
    "number": "hBP04-052",
    "name": "Shiori Novella",
    "type": "holomem",
    "color": "Blue",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Advent"
    ],
    "bloom": "1st",
    "hp": 120,
    "text": "Arts: Fascinating Story 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-053",
    "number": "hBP04-053",
    "name": "Shiori Novella",
    "type": "Buzz holomem",
    "color": "Blue",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Advent"
    ],
    "bloom": "1st",
    "hp": 230,
    "text": "Arts: Bookmark of a Memory 70 You may reveal the top card of your holo Power:If the revealed card is a holomem with #EN, deal 20 special damage to 1 of your opponent's holomem. Then, return the revealed card to the bottom of the holo Power face down. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-054",
    "number": "hBP04-054",
    "name": "La+ Darknesss",
    "type": "holomem",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Shooter"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: See Me, Hear Me, All of You!! 30 / Extra: You may include any number of this holomem in the deck",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-055",
    "number": "hBP04-055",
    "name": "La+ Darknesss",
    "type": "holomem",
    "color": "Purple",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Shooter"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: We Who Rule the Star of Eden! 30+ This Arts gets +10 for each of your opponent's resting holomem.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-056",
    "number": "hBP04-056",
    "name": "La+ Darknesss",
    "type": "holomem",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: I Love Strawberries! 40",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-057",
    "number": "hBP04-057",
    "name": "La+ Darknesss",
    "type": "holomem",
    "color": "Purple",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: I'll Show You the Best Stage Ever!! 40",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-058",
    "number": "hBP04-058",
    "name": "La+ Darknesss",
    "type": "holomem",
    "color": "Purple",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 140,
    "text": "Arts: You Dare Challenge Me? 30",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-059",
    "number": "hBP04-059",
    "name": "La+ Darknesss",
    "type": "holomem",
    "color": "Purple",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "holoX",
      "Shooter"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Legend of My Supremacy 120 Deal 10 special damage to your opponent's center holomem for each time a die was rolled by your abilities this turn.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-060",
    "number": "hBP04-060",
    "name": "Murasaki Shion",
    "type": "Buzz holomem",
    "color": "Purple",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+2"
    ],
    "bloom": "1st",
    "hp": 240,
    "text": "Arts: Game Streaming 40 Deal 10 special damage to your opponent's center holomem and collab holomem for each of your opponent's center holomem's cheers. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-061",
    "number": "hBP04-061",
    "name": "Kureiji Ollie",
    "type": "holomem",
    "color": "Purple",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+2",
      "Language"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: HOLORO Soul 80+ This Arts gets +20 for each 2nd holomem with #ID Gen 2 on your stage other than this holomem.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-062",
    "number": "hBP04-062",
    "name": "Mori Calliope",
    "type": "Buzz holomem",
    "color": "Purple",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Myth",
      "Singing"
    ],
    "bloom": "1st",
    "hp": 240,
    "text": "Arts: One Final Drink 50 Look at the top 2 cards of your deck. Archive 1 card from among them. Then, return the rest to the top of the deck. / Extra: If this holomem is downed, you get life-2",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-063",
    "number": "hBP04-063",
    "name": "Koseki Bijou",
    "type": "holomem",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Advent",
      "Baby"
    ],
    "bloom": "Debut",
    "hp": 110,
    "text": "Arts: Bon-Bijou! 20 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-064",
    "number": "hBP04-064",
    "name": "Koseki Bijou",
    "type": "holomem",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Advent",
      "Baby"
    ],
    "bloom": "1st",
    "hp": 180,
    "text": "Arts: Shining Jewel 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-065",
    "number": "hBP04-065",
    "name": "Koseki Bijou",
    "type": "holomem",
    "color": "Purple",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Advent",
      "Baby"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: The Ore and the Miner 30+ If your archive has a Red cheer, this Arts gets +20.",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-066",
    "number": "hBP04-066",
    "name": "Koseki Bijou",
    "type": "holomem",
    "color": "Purple",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Advent",
      "Baby"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: I Hope You'll Feel My Radiance! 80+ This Arts gets +10 for each cheer in your opponent's archive.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-067",
    "number": "hBP04-067",
    "name": "Oozora Subaru",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+2",
      "Bird"
    ],
    "bloom": "Debut",
    "hp": 130,
    "text": "Arts: Ajimaru! Ajimaru! 20 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-068",
    "number": "hBP04-068",
    "name": "Oozora Subaru",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+2",
      "Bird"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: From Subaru to You! 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-069",
    "number": "hBP04-069",
    "name": "Oozora Subaru",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+2",
      "Bird"
    ],
    "bloom": "1st",
    "hp": 190,
    "text": "Arts: Good Morning Subaru 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-070",
    "number": "hBP04-070",
    "name": "Oozora Subaru",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+2",
      "Bird"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: Give Us All Your Support and Have Fun! 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-071",
    "number": "hBP04-071",
    "name": "Oozora Subaru",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+2",
      "Bird"
    ],
    "bloom": "1st",
    "hp": 160,
    "text": "Arts: Shuba! 20 Send the top card of your cheer deck to this holomem.",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-072",
    "number": "hBP04-072",
    "name": "Oozora Subaru",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+2",
      "Singing",
      "Bird"
    ],
    "bloom": "2nd",
    "hp": 190,
    "text": "Arts: Sunshine Girl 100+ This Arts gets +10 for each cheer on both players' stage. However, only up to 8 cheers are counted.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-073",
    "number": "hBP04-073",
    "name": "Anya Melfissa",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+2",
      "Language"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Good Day! 30 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-074",
    "number": "hBP04-074",
    "name": "Anya Melfissa",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+2",
      "Language"
    ],
    "bloom": "Debut",
    "hp": 120,
    "text": "Arts: Do You Want to Sit Beside Me? 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-075",
    "number": "hBP04-075",
    "name": "Anya Melfissa",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+2",
      "Language"
    ],
    "bloom": "1st",
    "hp": 180,
    "text": "Arts: Devil's Invitation 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-076",
    "number": "hBP04-076",
    "name": "Anya Melfissa",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+2",
      "Language"
    ],
    "bloom": "1st",
    "hp": 150,
    "text": "Arts: Please Cheer for Me! 30",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-077",
    "number": "hBP04-077",
    "name": "Anya Melfissa",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+2",
      "Language"
    ],
    "bloom": "1st",
    "hp": 180,
    "text": "Arts: Yellow Rose 50",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "R",
        "artIndex": 1,
        "note": "R Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-078",
    "number": "hBP04-078",
    "name": "Anya Melfissa",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "ID",
      "IDGen+2",
      "Language"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Dungeon Adventure 160",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-079",
    "number": "hBP04-079",
    "name": "Natsuiro Matsuri",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+1",
      "Shooter"
    ],
    "bloom": "Debut",
    "hp": 120,
    "text": "Arts: hololive's Symbol of Purity 10 / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-080",
    "number": "hBP04-080",
    "name": "Natsuiro Matsuri",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+1",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 180,
    "text": "Arts: Natsuiro Supporters 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-081",
    "number": "hBP04-081",
    "name": "Natsuiro Matsuri",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+1",
      "Shooter"
    ],
    "bloom": "1st",
    "hp": 120,
    "text": "Arts: Sing with All My Heart!! 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-082",
    "number": "hBP04-082",
    "name": "Natsuiro Matsuri",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+1",
      "Shooter"
    ],
    "bloom": "2nd",
    "hp": 180,
    "text": "Arts: Found a Favorite 60+ This Arts gets +20 for each of this holomem's cheers.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-083",
    "number": "hBP04-083",
    "name": "Momosuzu Nene",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Singing",
      "Painting"
    ],
    "bloom": "Debut",
    "hp": 90,
    "text": "Arts: Kon-Nene~ 10 If your stage has 5 or less holomem, reveal 1 Debut holomem with #Gen 5 from your deck, and you may place it on stage. Then, shuffle the deck. / Extra: You may include any number of this holomem in the deck",
    "market": []
  },
  {
    "id": "hBP04-084",
    "number": "hBP04-084",
    "name": "Momosuzu Nene",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Singing",
      "Painting"
    ],
    "bloom": "1st",
    "hp": 190,
    "text": "Arts: HAAAN 30",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-085",
    "number": "hBP04-085",
    "name": "Momosuzu Nene",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Singing",
      "Painting"
    ],
    "bloom": "1st",
    "hp": 130,
    "text": "Arts: I’m Gonna Do My Best!!!!! 20",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-086",
    "number": "hBP04-086",
    "name": "Momosuzu Nene",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+5",
      "Singing",
      "Painting"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Lots of Husbands 50",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      },
      {
        "rarity": "SR",
        "artIndex": 1,
        "note": "SR Rarity"
      },
      {
        "rarity": "UR",
        "artIndex": 2,
        "note": "UR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-087",
    "number": "hBP04-087",
    "name": "Elizabeth Rose Bloodflame",
    "type": "holomem",
    "color": "◇",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice",
      "Singing"
    ],
    "bloom": "Spot",
    "hp": 140,
    "text": "Arts: ERB 20 / Extra: This holomem cannot bloom",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-088",
    "number": "hBP04-088",
    "name": "Gigi Murin",
    "type": "holomem",
    "color": "◇",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "EN",
      "Justice"
    ],
    "bloom": "Spot",
    "hp": 130,
    "text": "Arts: Don't Get Mad at Me! 10 / Extra: This holomem cannot bloom",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-089",
    "number": "hBP04-089",
    "name": "Two-Tone PC",
    "type": "Support・Item・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-090",
    "number": "hBP04-090",
    "name": "Work PC",
    "type": "Support・Item・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-091",
    "number": "hBP04-091",
    "name": "Struggle Meal",
    "type": "Support・Event",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "Food"
    ],
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-092",
    "number": "hBP04-092",
    "name": "NePoLaBo",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-093",
    "number": "hBP04-093",
    "name": "hololive Gen 2",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-094",
    "number": "hBP04-094",
    "name": "Maitake Dance",
    "type": "Support・Event",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "Mushroom"
    ],
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-095",
    "number": "hBP04-095",
    "name": "Mascot Catcher",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-096",
    "number": "hBP04-096",
    "name": "Advent",
    "type": "Support・Event・LIMITED",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "SR",
        "artIndex": 0,
        "note": "SR Rarity"
      },
      {
        "rarity": "U",
        "artIndex": 1,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 2,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-097",
    "number": "hBP04-097",
    "name": "Green Test Tube",
    "type": "Support・Tool",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "KOYO+LABO"
    ],
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-098",
    "number": "hBP04-098",
    "name": "Smithing Hammer",
    "type": "Support・Tool",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "Kaela's+Arms"
    ],
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-099",
    "number": "hBP04-099",
    "name": "Ancient Weapon",
    "type": "Support・Tool",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "U",
        "artIndex": 0,
        "note": "U Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-100",
    "number": "hBP04-100",
    "name": "Kokoro",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "KOYO+LABO"
    ],
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-101",
    "number": "hBP04-101",
    "name": "Daifuku",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-102",
    "number": "hBP04-102",
    "name": "Yamena",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-103",
    "number": "hBP04-103",
    "name": "Karasu",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "variants": [
      {
        "rarity": "C",
        "artIndex": 0,
        "note": "C Rarity"
      },
      {
        "rarity": "S",
        "artIndex": 1,
        "note": "S Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hBP04-104",
    "number": "hBP04-104",
    "name": "Subaru Duck",
    "type": "Support・Mascot",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP04-105",
    "number": "hBP04-105",
    "name": "Koyori's Assistants",
    "type": "Support・Fan",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "KOYO+LABO"
    ],
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hBP04-106",
    "number": "hBP04-106",
    "name": "Yukimin",
    "type": "Support・Fan",
    "color": "",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hSD01-016",
    "number": "hSD01-016",
    "name": "Harusaki Nodoka",
    "type": "Support・Staff・LIMITED",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hSD01-017",
    "number": "hSD01-017",
    "name": "Manager-chan",
    "type": "Support・Staff・LIMITED",
    "color": "",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "bloom": "",
    "hp": "",
    "text": "",
    "market": []
  },
  {
    "id": "hSD08-002",
    "number": "hSD08-002",
    "name": "Amane Kanata",
    "type": "holomem",
    "color": "White",
    "rarity": "U",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing",
      "Summer"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: I Look Good in a Yukata, Right? 20",
    "market": []
  },
  {
    "id": "hSD08-003",
    "number": "hSD08-003",
    "name": "Amane Kanata",
    "type": "holomem",
    "color": "White",
    "rarity": "R",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing"
    ],
    "bloom": "2nd",
    "hp": 200,
    "text": "Arts: Everyone's Super Darling 100+ This Arts gets +10 for each holomem with #Summer on your stage.",
    "market": []
  },
  {
    "id": "hSD08-004",
    "number": "hSD08-004",
    "name": "Amane Kanata",
    "type": "holomem",
    "color": "White",
    "rarity": "RR",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing"
    ],
    "bloom": "2nd",
    "hp": 180,
    "text": "Arts: So that I Can Catch Up to You 120 [1/Turn]When this Arts downed your opponent's center holomem, deal 40 special damage to 1 of your opponent's 2nd holomem.",
    "variants": [
      {
        "rarity": "RR",
        "artIndex": 0,
        "note": "RR Rarity"
      }
    ],
    "market": []
  },
  {
    "id": "hSD08-005",
    "number": "hSD08-005",
    "name": "Himemori Luna",
    "type": "holomem",
    "color": "White",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Baby",
      "Summer"
    ],
    "bloom": "Debut",
    "hp": 90,
    "text": "Arts: It's a Festival 30",
    "market": []
  },
  {
    "id": "hSD08-006",
    "number": "hSD08-006",
    "name": "Tokoyami Towa",
    "type": "holomem",
    "color": "Purple",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Singing",
      "Shooter",
      "Summer"
    ],
    "bloom": "Debut",
    "hp": 90,
    "text": "Arts: Have You Fallen for Towa? 20",
    "market": []
  },
  {
    "id": "hSD08-007",
    "number": "hSD08-007",
    "name": "Tsunomaki Watame",
    "type": "holomem",
    "color": "Yellow",
    "rarity": "C",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "JP",
      "Gen+4",
      "Kemomimi",
      "Singing",
      "Summer"
    ],
    "bloom": "Debut",
    "hp": 100,
    "text": "Arts: Cotton Candy's Delicious 10",
    "market": []
  }
,
{
    "id": "hY01-003",
    "number": "hY01-003",
    "name": "White Cheer",
    "type": "Cheer",
    "color": "White",
    "rarity": "SY",
    "set": "Booster Pack 2 (Quintet Spectrum)",
    "release": "2025-10-17 EN",
    "tags": [
      "Cheer",
      "Shirakami Fubuki"
    ],
    "text": "Produce 1 Cheer blanco.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY02-002",
    "number": "hY02-002",
    "name": "Green Cheer",
    "type": "Cheer",
    "color": "Green",
    "rarity": "SY",
    "set": "Booster Pack 2 (Quintet Spectrum)",
    "release": "2025-10-17 EN",
    "tags": [
      "Cheer",
      "Ookami Mio"
    ],
    "text": "Produce 1 Cheer verde.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY03-002",
    "number": "hY03-002",
    "name": "Red Cheer",
    "type": "Cheer",
    "color": "Red",
    "rarity": "SY",
    "set": "Booster Pack 2 (Quintet Spectrum)",
    "release": "2025-10-17 EN",
    "tags": [
      "Cheer",
      "Houshou Marine"
    ],
    "text": "Produce 1 Cheer rojo.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY04-002",
    "number": "hY04-002",
    "name": "Blue Cheer",
    "type": "Cheer",
    "color": "Blue",
    "rarity": "SY",
    "set": "Booster Pack 2 (Quintet Spectrum)",
    "release": "2025-10-17 EN",
    "tags": [
      "Cheer",
      "Sakamata Chloe"
    ],
    "text": "Produce 1 Cheer azul.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY05-002",
    "number": "hY05-002",
    "name": "Purple Cheer",
    "type": "Cheer",
    "color": "Purple",
    "rarity": "SY",
    "set": "Booster Pack 2 (Quintet Spectrum)",
    "release": "2025-10-17 EN",
    "tags": [
      "Cheer",
      "Murasaki Shion"
    ],
    "text": "Produce 1 Cheer morado.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY01-004",
    "number": "hY01-004",
    "name": "White Cheer",
    "type": "Cheer",
    "color": "White",
    "rarity": "SY",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "Cheer",
      "Himemori Luna"
    ],
    "text": "Produce 1 Cheer blanco.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY02-003",
    "number": "hY02-003",
    "name": "Green Cheer",
    "type": "Cheer",
    "color": "Green",
    "rarity": "SY",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "Cheer",
      "Kazama Iroha"
    ],
    "text": "Produce 1 Cheer verde.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY03-003",
    "number": "hY03-003",
    "name": "Red Cheer",
    "type": "Cheer",
    "color": "Red",
    "rarity": "SY",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "Cheer",
      "Sakura Miko"
    ],
    "text": "Produce 1 Cheer rojo.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY04-003",
    "number": "hY04-003",
    "name": "Blue Cheer",
    "type": "Cheer",
    "color": "Blue",
    "rarity": "SY",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "Cheer",
      "Hoshimachi Suisei"
    ],
    "text": "Produce 1 Cheer azul.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY05-003",
    "number": "hY05-003",
    "name": "Purple Cheer",
    "type": "Cheer",
    "color": "Purple",
    "rarity": "SY",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "Cheer",
      "Tokoyami Towa"
    ],
    "text": "Produce 1 Cheer morado.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY06-002",
    "number": "hY06-002",
    "name": "Yellow Cheer",
    "type": "Cheer",
    "color": "Yellow",
    "rarity": "SY",
    "set": "Booster Pack 3 (Elite Spark)",
    "release": "2026-04 EN",
    "tags": [
      "Cheer",
      "Tsunomaki Watame"
    ],
    "text": "Produce 1 Cheer amarillo.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY01-006",
    "number": "hY01-006",
    "name": "White Cheer",
    "type": "Cheer",
    "color": "White",
    "rarity": "SY",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "Cheer",
      "Hakui Koyori"
    ],
    "text": "Produce 1 Cheer blanco.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY02-005",
    "number": "hY02-005",
    "name": "Green Cheer",
    "type": "Cheer",
    "color": "Green",
    "rarity": "SY",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "Cheer",
      "Aki Rosenthal"
    ],
    "text": "Produce 1 Cheer verde.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY03-005",
    "number": "hY03-005",
    "name": "Red Cheer",
    "type": "Cheer",
    "color": "Red",
    "rarity": "SY",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "Cheer",
      "Mikodanyee"
    ],
    "text": "Produce 1 Cheer rojo.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY04-005",
    "number": "hY04-005",
    "name": "Blue Cheer",
    "type": "Cheer",
    "color": "Blue",
    "rarity": "SY",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "Cheer",
      "Yukihana Lamy"
    ],
    "text": "Produce 1 Cheer azul.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY05-005",
    "number": "hY05-005",
    "name": "Purple Cheer",
    "type": "Cheer",
    "color": "Purple",
    "rarity": "SY",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "Cheer",
      "Yuzuki Choco"
    ],
    "text": "Produce 1 Cheer morado.",
    "variants": [],
    "market": []
  },
  {
    "id": "hY06-004",
    "number": "hY06-004",
    "name": "Yellow Cheer",
    "type": "Cheer",
    "color": "Yellow",
    "rarity": "SY",
    "set": "Booster Pack 4 (Curious Universe)",
    "release": "2026-07 EN",
    "tags": [
      "Cheer",
      "Oozora Subaru"
    ],
    "text": "Produce 1 Cheer amarillo.",
    "variants": [],
    "market": []
  }
  ]
};
