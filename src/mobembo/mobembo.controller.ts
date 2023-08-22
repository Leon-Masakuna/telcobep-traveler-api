import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MobemboService } from './mobembo.service';
import { CreateMobemboDto } from './dto/create-mobembo.dto';
import { UpdateMobemboDto } from './dto/update-mobembo.dto';

@Controller('mobembo')
export class MobemboController {
  constructor(private readonly mobemboService: MobemboService) {}

  @Post()
  create(@Body() createMobemboDto: CreateMobemboDto) {
    return this.mobemboService.create(createMobemboDto);
  }

  @Get()
  findAll() {
    return this.mobemboService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mobemboService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMobemboDto: UpdateMobemboDto) {
    return this.mobemboService.update(+id, updateMobemboDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mobemboService.remove(+id);
  }
}
