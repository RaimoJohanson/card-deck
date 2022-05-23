import { BadRequestException, Injectable } from '@nestjs/common';
import { FrenchCardRanks } from '../common/ranks/french-ranks';
import { CardDeckFactory } from '../common/card-deck.factory';
import { CardsDto } from './dto/cards.dto';
import { CreateDeckDto } from './dto/create-deck.dto';
import { DeckDto } from './dto/deck.dto';
import { ModifyDeckDto } from './dto/modify-deck.dto';
import { OpenDeckDto } from './dto/open-deck.dto';
import { DeckEntity } from './entities/deck.entity';

@Injectable()
export class FrenchCardsService {
  async open(id: string): Promise<OpenDeckDto> {
    const entity = await DeckEntity.findOneOrFail(id);

    return {
      ...DeckDto.fromEntity(entity),
      cards: entity.cards,
    };
  }

  async modifyDeck(id: string, data: ModifyDeckDto): Promise<CardsDto> {
    if (data.action !== 'DRAW')
      throw new BadRequestException('Action not implemented');

    return this.drawCards(id, data.count);
  }

  async drawCards(id: string, count: number) {
    const entity = await DeckEntity.findOneOrFail(id);

    if (count > entity.cards.length) {
      throw new BadRequestException(
        'Not enough cards. Deck card count: ' + entity.cards.length,
      );
    }

    const cards = entity.cards.splice(0, count);

    await entity.save();

    return { cards };
  }

  async create(data: CreateDeckDto): Promise<DeckDto> {
    const deck = CardDeckFactory.create(data.type, data.shuffled, new FrenchCardRanks());

    const entity = await DeckEntity.create({
      type: data.type,
      shuffled: data.shuffled,
      cards: deck.cards,
    }).save();

    return DeckDto.fromEntity(entity);
  }
}
