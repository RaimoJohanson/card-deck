import { Deck } from './deck';
import { ICardRankStrategy } from './models/rank.strategy';

export class FullDeck extends Deck {
  constructor(strategy: ICardRankStrategy) {
    super(strategy.full);
  }
}
