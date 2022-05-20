import { EDeckType } from '../../common/models/deck-type.enum';
import { DeckEntity } from '../entities/deck.entity';

export class DeckDto {
  deckId: string;
  type: EDeckType;
  shuffled: boolean;
  remaining: number;

  static fromEntity(entity: DeckEntity) {
    const deck = new DeckDto();
    deck.deckId = entity.id;
    deck.type = entity.type;
    deck.shuffled = entity.shuffled;
    deck.remaining = entity.cards.length;
    return deck;
  }
}
