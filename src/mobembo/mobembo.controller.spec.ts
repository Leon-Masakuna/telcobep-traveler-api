import { Test, TestingModule } from '@nestjs/testing';
import { MobemboController } from './mobembo.controller';
import { MobemboService } from './mobembo.service';

describe('MobemboController', () => {
  let controller: MobemboController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobemboController],
      providers: [MobemboService],
    }).compile();

    controller = module.get<MobemboController>(MobemboController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
