import { ShortDeck } from './short-deck';

describe('Short deck', () => {
  it('should create short unshuffled deck', () => {
    const deck = new ShortDeck(false);

    expect(deck.shuffled).toEqual(false);
    expect(deck.count).toEqual(32);
  });

  it('should create short shuffled deck', () => {
    const deck = new ShortDeck(true);

    expect(deck.shuffled).toEqual(true);
    expect(deck.count).toEqual(32);
  });
});
