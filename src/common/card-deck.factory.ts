import { FullDeck } from './full-deck';
import { EDeckType } from './models/deck-type.enum';

import { IDeck } from './models/deck.interface';
import { ShortDeck } from './short-deck';

export class CardDeckFactory {
  static create(type: EDeckType, shuffled: boolean): IDeck {
    switch (type) {
      case EDeckType.FULL: return new FullDeck(shuffled);
      case EDeckType.SHORT: return new ShortDeck(shuffled);
    }
  }
}
