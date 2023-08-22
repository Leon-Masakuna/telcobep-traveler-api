import { Test, TestingModule } from '@nestjs/testing';
import { BinationauxController } from './binationaux.controller';
import { BinationauxService } from './binationaux.service';

describe('BinationauxController', () => {
  let controller: BinationauxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BinationauxController],
      providers: [BinationauxService],
    }).compile();

    controller = module.get<BinationauxController>(BinationauxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
