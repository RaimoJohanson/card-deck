import { Deck } from './deck';
import { EDeckType } from './models/deck-type.enum';
import { ERank } from './models/rank.enum';
import { ICardRankStrategy } from './models/rank.strategy';

export class ShortDeck extends Deck {
  constructor(strategy: ICardRankStrategy) {
    super(strategy.short);
  }
}
