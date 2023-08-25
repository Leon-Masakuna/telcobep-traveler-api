import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MobemboService } from './mobembo.service';
import { CreateMobemboDto } from './dto/create-mobembo.dto';
import { UpdateMobemboDto } from './dto/update-mobembo.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/mobembo')
export class MobemboController {
  constructor(private readonly mobemboService: MobemboService) {}

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createMobemboDto: CreateMobemboDto) {
    return this.mobemboService.create(createMobemboDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.mobemboService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.mobemboService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateMobemboDto: UpdateMobemboDto) {
    return this.mobemboService.update(+id, updateMobemboDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.mobemboService.remove(+id);
  }
}
