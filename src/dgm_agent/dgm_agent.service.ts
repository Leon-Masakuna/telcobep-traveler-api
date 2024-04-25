/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateDgmAgentDto } from './dto/create-dgm_agent.dto';
import { UpdateDgmAgentDto } from './dto/update-dgm_agent.dto';

@Injectable()
export class DgmAgentService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createDgmAgentDto: CreateDgmAgentDto) {
    return 'This action adds a new dgmAgent';
  }

  findAll() {
    return `This action returns all dgmAgent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dgmAgent`;
  }

  update(id: number, updateDgmAgentDto: UpdateDgmAgentDto) {
    return `This action updates a #${id} dgmAgent`;
  }

  remove(id: number) {
    return `This action removes a #${id} dgmAgent`;
  }
}
