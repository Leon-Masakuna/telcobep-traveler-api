import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsTypeController } from './documents_type.controller';
import { DocumentsTypeService } from './documents_type.service';

describe('DocumentsTypeController', () => {
  let controller: DocumentsTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentsTypeController],
      providers: [DocumentsTypeService],
    }).compile();

    controller = module.get<DocumentsTypeController>(DocumentsTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
