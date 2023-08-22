import { Test, TestingModule } from '@nestjs/testing';
import { ContactNumbController } from './contact_numb.controller';
import { ContactNumbService } from './contact_numb.service';

describe('ContactNumbController', () => {
  let controller: ContactNumbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactNumbController],
      providers: [ContactNumbService],
    }).compile();

    controller = module.get<ContactNumbController>(ContactNumbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
