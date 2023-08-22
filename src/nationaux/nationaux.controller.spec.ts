import { Test, TestingModule } from '@nestjs/testing';
import { NationauxController } from './nationaux.controller';
import { NationauxService } from './nationaux.service';

describe('NationauxController', () => {
  let controller: NationauxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NationauxController],
      providers: [NationauxService],
    }).compile();

    controller = module.get<NationauxController>(NationauxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
