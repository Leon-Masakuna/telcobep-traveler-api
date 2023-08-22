import { Test, TestingModule } from '@nestjs/testing';
import { ContactNumbService } from './contact_numb.service';

describe('ContactNumbService', () => {
  let service: ContactNumbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactNumbService],
    }).compile();

    service = module.get<ContactNumbService>(ContactNumbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
