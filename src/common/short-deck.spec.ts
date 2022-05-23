import { FrenchCardRanks } from './ranks/french-ranks';
import { ShortDeck } from './short-deck';

describe('Short deck', () => {
  it('should create short unshuffled deck', () => {
    const deck = new ShortDeck(new FrenchCardRanks());

    expect(deck.cards.length).toEqual(32);
    expect(deck.cards[0].code).toEqual('AS');
  });

  it('should create short shuffled deck', () => {
    const deck = new ShortDeck(new FrenchCardRanks());

    const initialFirstCardCode = deck.cards[0].code;
    deck.shuffle();

    expect(deck.cards.length).toEqual(32);
    expect(deck.cards[0].code).not.toEqual(initialFirstCardCode);
  });
});
