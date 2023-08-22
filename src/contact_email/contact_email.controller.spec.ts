import { Test, TestingModule } from '@nestjs/testing';
import { ContactEmailController } from './contact_email.controller';
import { ContactEmailService } from './contact_email.service';

describe('ContactEmailController', () => {
  let controller: ContactEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactEmailController],
      providers: [ContactEmailService],
    }).compile();

    controller = module.get<ContactEmailController>(ContactEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
