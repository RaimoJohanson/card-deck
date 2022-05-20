import { Test, TestingModule } from '@nestjs/testing';
import { FrenchCardsController } from './french-cards.controller';
import { FrenchCardsService } from './french-cards.service';

describe('FrenchCardsController', () => {
  let controller: FrenchCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrenchCardsController],
      providers: [FrenchCardsService]
    }).compile();

    controller = module.get<FrenchCardsController>(FrenchCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
