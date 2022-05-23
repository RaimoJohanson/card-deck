import { FullDeck } from './full-deck';
import { FrenchCardRanks } from './ranks/french-ranks';

describe('Deck', () => {
  it('should shuffle deck', () => {
    const deck = new FullDeck(new FrenchCardRanks());

    const topCardBeforeShuffle = deck.cards[0];
    deck.shuffle();

    expect(deck.cards[0].code).not.toEqual(topCardBeforeShuffle.code);
  });
});
