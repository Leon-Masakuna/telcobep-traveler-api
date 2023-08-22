import { Test, TestingModule } from '@nestjs/testing';
import { DgmAgentController } from './dgm_agent.controller';
import { DgmAgentService } from './dgm_agent.service';

describe('DgmAgentController', () => {
  let controller: DgmAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DgmAgentController],
      providers: [DgmAgentService],
    }).compile();

    controller = module.get<DgmAgentController>(DgmAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
