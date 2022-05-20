import { ICard } from '../..//common/models/card.interface';
import { EDeckType } from '../../common/models/deck-type.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('decks')
export class DeckEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: EDeckType })
  type: EDeckType;

  @Column({ name: 'shuffled' })
  shuffled: boolean;

  @Column({ name: 'cards', type: 'json' })
  cards: ICard[];
}
