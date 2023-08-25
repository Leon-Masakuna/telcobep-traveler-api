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
import { MukandaService } from './mukanda.service';
import { CreateMukandaDto } from './dto/create-mukanda.dto';
import { UpdateMukandaDto } from './dto/update-mukanda.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/mukanda')
export class MukandaController {
  constructor(private readonly mukandaService: MukandaService) {}

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createMukandaDto: CreateMukandaDto) {
    return this.mukandaService.create(createMukandaDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.mukandaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.mukandaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateMukandaDto: UpdateMukandaDto) {
    return this.mukandaService.update(+id, updateMukandaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.mukandaService.remove(+id);
  }
}
