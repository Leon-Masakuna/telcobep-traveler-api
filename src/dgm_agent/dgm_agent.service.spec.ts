import { Test, TestingModule } from '@nestjs/testing';
import { DgmAgentService } from './dgm_agent.service';

describe('DgmAgentService', () => {
  let service: DgmAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DgmAgentService],
    }).compile();

    service = module.get<DgmAgentService>(DgmAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
