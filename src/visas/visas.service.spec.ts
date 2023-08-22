import { Test, TestingModule } from '@nestjs/testing';
import { VisasService } from './visas.service';

describe('VisasService', () => {
  let service: VisasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisasService],
    }).compile();

    service = module.get<VisasService>(VisasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
