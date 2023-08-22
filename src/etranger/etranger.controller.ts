import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EtrangerService } from './etranger.service';
import { CreateEtrangerDto } from './dto/create-etranger.dto';
import { UpdateEtrangerDto } from './dto/update-etranger.dto';

@Controller('etranger')
export class EtrangerController {
  constructor(private readonly etrangerService: EtrangerService) {}

  @Post()
  create(@Body() createEtrangerDto: CreateEtrangerDto) {
    return this.etrangerService.create(createEtrangerDto);
  }

  @Get()
  findAll() {
    return this.etrangerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.etrangerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtrangerDto: UpdateEtrangerDto) {
    return this.etrangerService.update(+id, updateEtrangerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etrangerService.remove(+id);
  }
}
