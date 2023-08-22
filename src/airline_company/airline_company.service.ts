import { Injectable } from '@nestjs/common';
import { CreateAirlineCompanyDto } from './dto/create-airline_company.dto';
import { UpdateAirlineCompanyDto } from './dto/update-airline_company.dto';

@Injectable()
export class AirlineCompanyService {
  create(createAirlineCompanyDto: CreateAirlineCompanyDto) {
    return 'This action adds a new airlineCompany';
  }

  findAll() {
    return `This action returns all airlineCompany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} airlineCompany`;
  }

  update(id: number, updateAirlineCompanyDto: UpdateAirlineCompanyDto) {
    return `This action updates a #${id} airlineCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} airlineCompany`;
  }
}
