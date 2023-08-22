import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MukandaService } from './mukanda.service';
import { CreateMukandaDto } from './dto/create-mukanda.dto';
import { UpdateMukandaDto } from './dto/update-mukanda.dto';

@Controller('mukanda')
export class MukandaController {
  constructor(private readonly mukandaService: MukandaService) {}

  @Post()
  create(@Body() createMukandaDto: CreateMukandaDto) {
    return this.mukandaService.create(createMukandaDto);
  }

  @Get()
  findAll() {
    return this.mukandaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mukandaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMukandaDto: UpdateMukandaDto) {
    return this.mukandaService.update(+id, updateMukandaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mukandaService.remove(+id);
  }
}
