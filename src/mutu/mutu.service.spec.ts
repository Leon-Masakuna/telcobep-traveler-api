import { Test, TestingModule } from '@nestjs/testing';
import { MutuService } from './mutu.service';

describe('MutuService', () => {
  let service: MutuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MutuService],
    }).compile();

    service = module.get<MutuService>(MutuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
