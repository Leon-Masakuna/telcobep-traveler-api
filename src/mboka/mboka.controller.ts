import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MbokaService } from './mboka.service';
import { CreateMbokaDto } from './dto/create-mboka.dto';
import { UpdateMbokaDto } from './dto/update-mboka.dto';

@Controller('mboka')
export class MbokaController {
  constructor(private readonly mbokaService: MbokaService) {}

  @Post()
  create(@Body() createMbokaDto: CreateMbokaDto) {
    return this.mbokaService.create(createMbokaDto);
  }

  @Get()
  findAll() {
    return this.mbokaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mbokaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMbokaDto: UpdateMbokaDto) {
    return this.mbokaService.update(+id, updateMbokaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mbokaService.remove(+id);
  }
}
