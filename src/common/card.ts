import { ICard } from './models/card.interface';

export class Card implements ICard {
  value: string;
  suit: string;
  code: string;

  constructor(value: string, suit: string) {
    this.value = value;
    this.suit = suit;
    this.code = this.getRankCode() + this.suit.charAt(0);
  }

  private getRankCode() {
    if (isNaN(Number(this.value))) return this.value.charAt(0);
    return this.value;
  }
}
