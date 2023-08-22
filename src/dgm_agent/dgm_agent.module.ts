import { Module } from '@nestjs/common';
import { DgmAgentService } from './dgm_agent.service';
import { DgmAgentController } from './dgm_agent.controller';

@Module({
  controllers: [DgmAgentController],
  providers: [DgmAgentService],
})
export class DgmAgentModule {}
