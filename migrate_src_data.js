const fs = require('fs');

try {
  let rawContent = fs.readFileSync('src/data.js', 'utf8');

  const sandbox = { window: {} };
  require('vm').createContext(sandbox);
  require('vm').runInContext(rawContent, sandbox);
  let HOCG_DATA = sandbox.window.HOCG_DATA;

  const newCards = [];
  HOCG_DATA.cards.forEach(card => {
    const baseCard = JSON.parse(JSON.stringify(card));
    delete baseCard.variants;
    newCards.push(baseCard);

    if (card.variants && Array.isArray(card.variants)) {
      card.variants.forEach(variant => {
        const variantCard = JSON.parse(JSON.stringify(baseCard));
        variantCard.id = baseCard.id + "-" + variant.rarity;
        variantCard.rarity = variant.rarity;
        variantCard.artIndex = variant.artIndex; 
        variantCard.note = variant.note;
        newCards.push(variantCard);
      });
    }
  });

  HOCG_DATA.cards = newCards;

  const newRawContent = 'window.HOCG_DATA = ' + JSON.stringify(HOCG_DATA, null, 2) + ';';
  fs.writeFileSync('src/data.js', newRawContent, 'utf8');
  console.log('Migrated src/data.js! Total cards: ' + newCards.length);
} catch (e) {
  console.error("Migration failed:", e);
}
