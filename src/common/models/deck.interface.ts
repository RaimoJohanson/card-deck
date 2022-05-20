import { ICard } from './card.interface';
import { EDeckType } from './deck-type.enum';

export interface IDeck {
  readonly type: EDeckType;
  readonly shuffled: boolean;
  cards: ICard[];
  count: number;
  shuffle(): void;
}
