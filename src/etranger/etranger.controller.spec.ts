import { Test, TestingModule } from '@nestjs/testing';
import { EtrangerController } from './etranger.controller';
import { EtrangerService } from './etranger.service';

describe('EtrangerController', () => {
  let controller: EtrangerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtrangerController],
      providers: [EtrangerService],
    }).compile();

    controller = module.get<EtrangerController>(EtrangerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
