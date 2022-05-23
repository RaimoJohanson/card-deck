import { FullDeck } from './full-deck';
import { EDeckType } from './models/deck-type.enum';
import { IDeck } from './models/deck.interface';
import { ICardRankStrategy } from './models/rank.strategy';
import { ShortDeck } from './short-deck';

export class CardDeckFactory {
  static create(type: EDeckType, shuffled: boolean, strategy: ICardRankStrategy): IDeck {
    const deck = CardDeckFactory.createByType(type, strategy);
    
    if (shuffled) {
      return deck.shuffle();
    }
    return deck;
  }

  private static createByType(type: EDeckType, strategy: ICardRankStrategy): IDeck {
    switch (type) {
      case EDeckType.FULL:
        return new FullDeck(strategy);
      case EDeckType.SHORT:
        return new ShortDeck(strategy);
    }
  }
}
