import { Test, TestingModule } from '@nestjs/testing';
import { EtrangerService } from './etranger.service';

describe('EtrangerService', () => {
  let service: EtrangerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtrangerService],
    }).compile();

    service = module.get<EtrangerService>(EtrangerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
