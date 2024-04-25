/* eslint-disable prettier/prettier */
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
import { MbokaService } from './mboka.service';
import { CreateMbokaDto } from './dto/create-mboka.dto';
import { UpdateMbokaDto } from './dto/update-mboka.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/mboka')
export class MbokaController {
  constructor(private readonly mbokaService: MbokaService) {}

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createMbokaDto: CreateMbokaDto) {
    return this.mbokaService.create(createMbokaDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.mbokaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.mbokaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateMbokaDto: UpdateMbokaDto) {
    return this.mbokaService.update(+id, updateMbokaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.mbokaService.remove(+id);
  }
}
