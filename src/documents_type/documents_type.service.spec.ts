import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsTypeService } from './documents_type.service';

describe('DocumentsTypeService', () => {
  let service: DocumentsTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentsTypeService],
    }).compile();

    service = module.get<DocumentsTypeService>(DocumentsTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
