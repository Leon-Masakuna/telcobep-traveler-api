import { PartialType } from '@nestjs/mapped-types';
import { CreateDgmAgentDto } from './create-dgm_agent.dto';

export class UpdateDgmAgentDto extends PartialType(CreateDgmAgentDto) {}
