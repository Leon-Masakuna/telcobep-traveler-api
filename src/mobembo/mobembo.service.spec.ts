import { Test, TestingModule } from '@nestjs/testing';
import { MobemboService } from './mobembo.service';

describe('MobemboService', () => {
  let service: MobemboService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MobemboService],
    }).compile();

    service = module.get<MobemboService>(MobemboService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
