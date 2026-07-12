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
  ]
};
