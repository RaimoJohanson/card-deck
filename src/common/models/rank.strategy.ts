import { ERank } from './rank.enum';

export interface ICardRankStrategy {
  readonly full: ERank[];
  readonly short: ERank[]
}
