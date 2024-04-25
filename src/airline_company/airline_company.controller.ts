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
import { AirlineCompanyService } from './airline_company.service';
import { CreateAirlineCompanyDto } from './dto/create-airline_company.dto';
import { UpdateAirlineCompanyDto } from './dto/update-airline_company.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/airline-company')
export class AirlineCompanyController {
  constructor(private readonly airlineCompanyService: AirlineCompanyService) {}

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createAirlineCompanyDto: CreateAirlineCompanyDto) {
    return this.airlineCompanyService.create(createAirlineCompanyDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.airlineCompanyService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.airlineCompanyService.findOne(+id);
  }

  @Patch('/update/:id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateAirlineCompanyDto: UpdateAirlineCompanyDto,
  ) {
    return this.airlineCompanyService.update(+id, updateAirlineCompanyDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.airlineCompanyService.remove(+id);
  }
}
