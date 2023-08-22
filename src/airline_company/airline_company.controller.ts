import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirlineCompanyService } from './airline_company.service';
import { CreateAirlineCompanyDto } from './dto/create-airline_company.dto';
import { UpdateAirlineCompanyDto } from './dto/update-airline_company.dto';

@Controller('airline-company')
export class AirlineCompanyController {
  constructor(private readonly airlineCompanyService: AirlineCompanyService) {}

  @Post()
  create(@Body() createAirlineCompanyDto: CreateAirlineCompanyDto) {
    return this.airlineCompanyService.create(createAirlineCompanyDto);
  }

  @Get()
  findAll() {
    return this.airlineCompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airlineCompanyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAirlineCompanyDto: UpdateAirlineCompanyDto) {
    return this.airlineCompanyService.update(+id, updateAirlineCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airlineCompanyService.remove(+id);
  }
}
