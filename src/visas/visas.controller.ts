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
import { VisasService } from './visas.service';
import { CreateVisaDto } from './dto/create-visa.dto';
import { UpdateVisaDto } from './dto/update-visa.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/visas')
export class VisasController {
  constructor(private readonly visasService: VisasService) {}

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createVisaDto: CreateVisaDto) {
    return this.visasService.create(createVisaDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.visasService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.visasService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateVisaDto: UpdateVisaDto) {
    return this.visasService.update(+id, updateVisaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.visasService.remove(+id);
  }
}
