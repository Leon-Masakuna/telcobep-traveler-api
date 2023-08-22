import { Test, TestingModule } from '@nestjs/testing';
import { NationauxService } from './nationaux.service';

describe('NationauxService', () => {
  let service: NationauxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NationauxService],
    }).compile();

    service = module.get<NationauxService>(NationauxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
