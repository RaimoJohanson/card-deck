import { CardsDto } from './cards.dto';
import { DeckDto } from './deck.dto';

export interface OpenDeckDto extends DeckDto, CardsDto {}
