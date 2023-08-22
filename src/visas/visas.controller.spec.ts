import { Test, TestingModule } from '@nestjs/testing';
import { VisasController } from './visas.controller';
import { VisasService } from './visas.service';

describe('VisasController', () => {
  let controller: VisasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisasController],
      providers: [VisasService],
    }).compile();

    controller = module.get<VisasController>(VisasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
