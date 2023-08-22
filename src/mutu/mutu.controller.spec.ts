import { Test, TestingModule } from '@nestjs/testing';
import { MutuController } from './mutu.controller';
import { MutuService } from './mutu.service';

describe('MutuController', () => {
  let controller: MutuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MutuController],
      providers: [MutuService],
    }).compile();

    controller = module.get<MutuController>(MutuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
