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
import { AdresseService } from './adresse.service';
import { CreateAdresseDto } from './dto/create-adresse.dto';
import { UpdateAdresseDto } from './dto/update-adresse.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/address')
export class AdresseController {
  constructor(private readonly adresseService: AdresseService) {}

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createAdresseDto: CreateAdresseDto) {
    return this.adresseService.create(createAdresseDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.adresseService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.adresseService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateAdresseDto: UpdateAdresseDto) {
    return this.adresseService.update(+id, updateAdresseDto);
  }

  @Delete('/update/:id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.adresseService.remove(+id);
  }
}
