import { Module } from '@nestjs/common';
import { FrenchCardsController } from './french-cards.controller';
import { FrenchCardsService } from './french-cards.service';

@Module({
  controllers: [FrenchCardsController],
  providers: [FrenchCardsService]
})
export class FrenchCardsModule {}
