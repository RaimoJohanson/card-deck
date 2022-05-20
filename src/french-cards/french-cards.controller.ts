import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateDeckDto } from './dto/create-deck.dto';
import { ModifyDeckDto } from './dto/modify-deck.dto';
import { DeckDto } from './dto/deck.dto';
import { OpenDeckDto } from './dto/open-deck.dto';
import { FrenchCardsService } from './french-cards.service';
import { CardsDto } from './dto/cards.dto';

@Controller()
export class FrenchCardsController {
  constructor(private service: FrenchCardsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createDeck(@Body() data: CreateDeckDto): Promise<DeckDto> {
    return this.service.create(data);
  }

  @Get('/:id')
  openDeck(@Param('id', new ParseUUIDPipe()) id): Promise<OpenDeckDto> {
    return this.service.open(id);
  }

  @Put('/:id')
  modifyDeck(@Param('id', new ParseUUIDPipe()) id, @Body() data: ModifyDeckDto): Promise<CardsDto> {
    return this.service.modifyDeck(id, data);
  }
}
