# Analista de Decks Hololive OCG

Aplicacion local para crear, guardar, comparar y analizar decks de hololive OFFICIAL CARD GAME.

## Como abrir

Abre `index.html` en el navegador. No requiere instalacion, servidor, `npm`, CDN ni conexion a internet.

## Que hace esta version

- Catalogo semilla con cartas verificadas manualmente y links a fuente oficial/mercado.
- Builder con estructura hOCG: 1 Oshi, main deck de 50, cheer deck de 20.
- Validacion basica: tamanos de mazo, tipos incorrectos, limite general de copias y lista restringida EN vigente.
- Guardado local con `localStorage`.
- Export/import JSON compatible con HoloDelta:

```json
{
  "deckName": "Nombre",
  "oshi": ["hBP01-001", 0],
  "deck": [["hBP01-010", 4, 0]],
  "cheerDeck": [["hY01-001", 20, 0]]
}
```

- Analisis heuristico de sinergias por color, curva Bloom, consistencia y arquetipos.
- Comparador de mazos locales.
- Panel de cambios/fuentes/seguridad dentro de la app.

## Seguridad

- Sin scripts remotos.
- Sin llamadas `fetch` automaticas.
- Sin telemetria.
- Sin credenciales.
- Los links externos se abren solo cuando el usuario hace clic.
- Los mazos se guardan en el navegador, no se suben a ningun servidor.

## Fuentes principales

- Card List oficial EN: https://en.hololive-official-cardgame.com/cardlist/
- Guia oficial para principiantes: https://en.hololive-official-cardgame.com/beginners/
- Deck Construction Rules EN: https://en.hololive-official-cardgame.com/news/post/03/
- Deck Recipes oficiales: https://en.hololive-official-cardgame.com/deck/recommend/
- HoloArchive by Chocolat: https://docs.google.com/document/d/1uXCqIqNBotlLhZ94aGoqLeKTK3BBnUvcc4K43oRWGFo/edit?tab=t.jaecunyzisqv
- HoloDelta: https://github.com/GabeJWJ/holoDelta/releases
- hocg-deck-convert: https://github.com/Qrimpuff/hocg-deck-convert

## Siguiente paso recomendado

Crear un importador local y revisable para el modo texto del Card List oficial, de forma que el catalogo completo se pueda actualizar sin ejecutar codigo de terceros ni depender de scraping invisible.
