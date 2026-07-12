# Investigacion inicial

Fecha: 2026-06-07

## Fuentes de cartas

La fuente primaria debe ser la Card List oficial EN:

https://en.hololive-official-cardgame.com/cardlist/

La pagina publica permite busqueda por texto y filtros por color, set, tipo, rareza, Bloom level y paralelos. Tambien expone vistas de detalle por carta con numero, tipo, rareza, set, color, HP/Life, texto, ilustrador, productos y Q&A relacionados.

Holoarchive es util como referencia comunitaria, pero declara no estar afiliada a COVER. Su propia pagina menciona que usa un `cards.json` generado por scraper; por seguridad no se ejecuto ese scraper ni se incorporo como dependencia.

https://holoarchiveocg.com/

## Reglas de deck

La guia oficial para principiantes confirma:

- El main deck contiene holomem y support.
- El main deck requiere 50 cartas.
- Se permiten hasta 4 cartas con el mismo numero salvo excepciones.
- El cheer deck requiere 20 cartas.
- El cheer deck contiene solo cheer cards.

Fuente:

https://en.hololive-official-cardgame.com/beginners/

La pagina de Deck Construction Rules EN lista restricciones vigentes. Para EN, desde 2026-04-17, hBP01-030 IRyS esta restringida a 1 copia.

https://en.hololive-official-cardgame.com/news/post/03/

## HoloDelta

Se reviso manualmente el archivo `src/sources/holodelta.rs` del repositorio MIT `Qrimpuff/hocg-deck-convert`.

El esquema observado:

- `deckName`: string opcional.
- `oshi`: array `[cardNumber, artIndex]`.
- `deck`: array de `[cardNumber, amount, artIndex]`.
- `cheerDeck`: array de `[cardNumber, amount, artIndex]`.

Referencia:

https://github.com/Qrimpuff/hocg-deck-convert

HoloDelta:

https://github.com/GabeJWJ/holoDelta/releases

## HoloArchive by Chocolat

Se verifico por exportacion de texto que el documento publico se presenta como "HoloArchive By Chocolat" y contiene arquetipos por color, fortalezas por set, dificultad, consistencia y opciones tech. La app incluye solo resumen minimo y atribucion; no copia el documento completo.

Documento:

https://docs.google.com/document/d/1uXCqIqNBotlLhZ94aGoqLeKTK3BBnUvcc4K43oRWGFo/edit?tab=t.jaecunyzisqv

Contexto comunitario donde se menciona:

https://www.reddit.com/r/HololiveTCG/comments/1q9i6sx/looking_for_old_hololive_ocg_deck_pdf_sakura_miko/

## Mercado

No se encontro una API oficial abierta y gratuita especifica para hOCG. Opciones:

- TCGplayer tiene datos publicos por pagina y API oficial con credenciales.
- Guardian TCG publica agregados de Hololive con datos de TCGplayer, eBay y CardMarket.
- TCGAPIs y servicios similares ofrecen APIs comerciales.
- Yuyutei y tiendas JP sirven como referencia manual para mercado japones.

Decision de seguridad: esta version no scrapea precios ni llama APIs automaticamente. Cada carta tiene links de busqueda manual y el siguiente paso deberia aceptar API keys del usuario solo desde almacenamiento local o variables fuera del repositorio.

## Riesgos y decisiones

- La base actual no es completa. Es una semilla para probar la experiencia.
- Algunas cartas EN/JP tienen diferencias de producto o reimpresion; el panel muestra fuente y link por carta para verificar antes de comprar.
- El analisis de sinergia es heuristico, no reemplaza testeo competitivo.
- El import HoloDelta conserva numeros desconocidos como cartas no catalogadas para no destruir listas importadas.
