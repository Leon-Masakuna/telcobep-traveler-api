import { Test, TestingModule } from '@nestjs/testing';
import { MbokaController } from './mboka.controller';
import { MbokaService } from './mboka.service';

describe('MbokaController', () => {
  let controller: MbokaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MbokaController],
      providers: [MbokaService],
    }).compile();

    controller = module.get<MbokaController>(MbokaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
