import { Test, TestingModule } from '@nestjs/testing';
import { BinationauxService } from './binationaux.service';

describe('BinationauxService', () => {
  let service: BinationauxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinationauxService],
    }).compile();

    service = module.get<BinationauxService>(BinationauxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
