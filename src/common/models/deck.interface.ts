import { ICard } from './card.interface';

export interface IDeck {
  cards: ICard[];
  shuffle(): IDeck;
}
