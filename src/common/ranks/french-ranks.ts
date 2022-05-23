import { ERank } from '../models/rank.enum';
import { ICardRankStrategy } from '../models/rank.strategy';

export class FrenchCardRanks implements ICardRankStrategy {
  readonly full: ERank[] = [
    ERank.ACE,
    ERank.KING,
    ERank.QUEEN,
    ERank.JACK,
    ERank.TEN,
    ERank.NINE,
    ERank.EIGHT,
    ERank.SEVEN,
    ERank.SIX,
    ERank.FIVE,
    ERank.FOUR,
    ERank.THREE,
    ERank.TWO,
  ];

  readonly short: ERank[] = [
    ERank.ACE,
    ERank.KING,
    ERank.QUEEN,
    ERank.JACK,
    ERank.TEN,
    ERank.NINE,
    ERank.EIGHT,
    ERank.SEVEN,
  ];
}
