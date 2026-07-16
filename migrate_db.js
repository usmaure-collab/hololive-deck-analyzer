const fs = require('fs');

try {
  let HOCG_DATA = require('./gacha_test_data.js');

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
        // No more variants array in the variant itself
        newCards.push(variantCard);
      });
    }
  });

  HOCG_DATA.cards = newCards;

  const newRawContent = 'module.exports = ' + JSON.stringify(HOCG_DATA, null, 2) + ';';
  fs.writeFileSync('gacha_test_data.js', newRawContent, 'utf8');
  console.log('Migrated ' + newCards.length + ' cards successfully.');
} catch (e) {
  console.error("Migration failed:", e);
}
