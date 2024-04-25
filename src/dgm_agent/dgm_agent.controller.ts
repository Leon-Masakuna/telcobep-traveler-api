import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DgmAgentService } from './dgm_agent.service';
import { CreateDgmAgentDto } from './dto/create-dgm_agent.dto';
import { UpdateDgmAgentDto } from './dto/update-dgm_agent.dto';

@Controller('dgm-agent')
export class DgmAgentController {
  constructor(private readonly dgmAgentService: DgmAgentService) {}

  @Post()
  create(@Body() createDgmAgentDto: CreateDgmAgentDto) {
    return this.dgmAgentService.create(createDgmAgentDto);
  }

  @Get()
  findAll() {
    return this.dgmAgentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dgmAgentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDgmAgentDto: UpdateDgmAgentDto,
  ) {
    return this.dgmAgentService.update(+id, updateDgmAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dgmAgentService.remove(+id);
  }
}
