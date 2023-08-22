import { Test, TestingModule } from '@nestjs/testing';
import { MukandaService } from './mukanda.service';

describe('MukandaService', () => {
  let service: MukandaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MukandaService],
    }).compile();

    service = module.get<MukandaService>(MukandaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
