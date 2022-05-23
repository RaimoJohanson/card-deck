import { FrenchCardRanks } from './ranks/french-ranks';
import { FullDeck } from './full-deck';

describe('Full deck', () => {
  it('should create full unshuffled deck', () => {
    const deck = new FullDeck(new FrenchCardRanks());

    expect(deck.cards.length).toEqual(52);
    expect(deck.cards[0].code).toEqual('AS');
  });

  it('should create full shuffled deck', () => {
    const deck = new FullDeck(new FrenchCardRanks());

    const initialFirstCardCode = deck.cards[0].code;
    deck.shuffle();
    expect(deck.cards.length).toEqual(52);
    expect(deck.cards[0].code).not.toEqual(initialFirstCardCode);
  });
});
