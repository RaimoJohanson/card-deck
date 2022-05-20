import { Deck } from './deck';
import { EDeckType } from './models/deck-type.enum';
import { ERank } from './models/rank.enum';

export class FullDeck extends Deck {
  readonly type = EDeckType.FULL;
  private static readonly ranks = [
    ERank.ACE,
    ERank.KING,
    ERank.QUEEN,
    ERank.JACK,
    ERank.TEN,
    ERank.NINE,
    ERank.EIGHT,
    ERank.SEVEN,
    ERank.SIX,
    ERank.FIVE,
    ERank.FOUR,
    ERank.THREE,
    ERank.TWO,
  ];

  constructor(shuffled: boolean = false) {
    super(FullDeck.ranks, shuffled);
  }
}
