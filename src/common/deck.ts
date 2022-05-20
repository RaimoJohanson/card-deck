import { Card } from './card';
import { ICard } from './models/card.interface';
import { EDeckType } from './models/deck-type.enum';
import { IDeck } from './models/deck.interface';
import { ERank } from './models/rank.enum';
import { ESuit } from './models/suit.enum';

export abstract class Deck implements IDeck {
  readonly type: EDeckType;
  readonly shuffled: boolean;
  cards: ICard[] = [];

  get count() {
    return this.cards.length;
  }

  constructor(ranks: ERank[], shuffled: boolean = false) {
    this.shuffled = shuffled;
    this.populate(ranks);
    if (this.shuffled) {
      this.shuffle();
    }
  }

  private populate(ranks: ERank[]) {
    for (const suit in ESuit) {
      for (const rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }

  shuffle() {
    const cards = this.cards;
    const length = this.cards.length;
    if (length < 2) {
      throw new Error('Not enough cards to shuffle');
    }
    for (let i = length; i; i--) {
      const n = Math.floor(Math.random() * i);
      [cards[i - 1], cards[n]] = [cards[n], cards[i - 1]];
    }
  }
}
