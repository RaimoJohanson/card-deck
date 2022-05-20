import { Test, TestingModule } from '@nestjs/testing';
import { FrenchCardsService } from './french-cards.service';

describe('FrenchCardsService', () => {
  let service: FrenchCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrenchCardsService],
    }).compile();

    service = module.get<FrenchCardsService>(FrenchCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
