import { FullDeck } from './full-deck';

describe('Deck', () => {
  it('should shuffle deck', () => {
    const deck = new FullDeck();
    
    const topCardBeforeShuffle = deck.cards[0];
    deck.shuffle();

    expect(deck.cards[0].code).not.toEqual(topCardBeforeShuffle.code);
  });

});
