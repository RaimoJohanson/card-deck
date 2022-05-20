import { FullDeck } from './full-deck';

describe('Full deck', () => {
  it('should create full unshuffled deck', () => {
    const deck = new FullDeck(false);

    expect(deck.shuffled).toEqual(false);
    expect(deck.count).toEqual(52);
  });

  it('should create full shuffled deck', () => {
    const deck = new FullDeck(true);

    expect(deck.shuffled).toEqual(true);
    expect(deck.count).toEqual(52);
  });
});
