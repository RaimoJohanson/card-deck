import { Deck } from './deck';
import { EDeckType } from './models/deck-type.enum';
import { ERank } from './models/rank.enum';

export class ShortDeck extends Deck {
  readonly type = EDeckType.SHORT;
  private static readonly ranks = [
    ERank.ACE,
    ERank.KING,
    ERank.QUEEN,
    ERank.JACK,
    ERank.TEN,
    ERank.NINE,
    ERank.EIGHT,
    ERank.SEVEN,
  ];

  constructor(shuffled: boolean) {
    super(ShortDeck.ranks, shuffled);
  }
}
