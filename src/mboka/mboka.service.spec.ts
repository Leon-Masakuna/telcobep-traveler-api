import { Test, TestingModule } from '@nestjs/testing';
import { MbokaService } from './mboka.service';

describe('MbokaService', () => {
  let service: MbokaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MbokaService],
    }).compile();

    service = module.get<MbokaService>(MbokaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
