import { Deck } from './deck';
import { ICardRankStrategy } from './models/rank.strategy';

export class ShortDeck extends Deck {
  constructor(strategy: ICardRankStrategy) {
    super(strategy.short);
  }
}
