import { Test, TestingModule } from '@nestjs/testing';
import { MukandaController } from './mukanda.controller';
import { MukandaService } from './mukanda.service';

describe('MukandaController', () => {
  let controller: MukandaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MukandaController],
      providers: [MukandaService],
    }).compile();

    controller = module.get<MukandaController>(MukandaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
