import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisasService } from './visas.service';
import { CreateVisaDto } from './dto/create-visa.dto';
import { UpdateVisaDto } from './dto/update-visa.dto';

@Controller('visas')
export class VisasController {
  constructor(private readonly visasService: VisasService) {}

  @Post()
  create(@Body() createVisaDto: CreateVisaDto) {
    return this.visasService.create(createVisaDto);
  }

  @Get()
  findAll() {
    return this.visasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisaDto: UpdateVisaDto) {
    return this.visasService.update(+id, updateVisaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visasService.remove(+id);
  }
}
