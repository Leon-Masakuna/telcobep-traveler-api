import { Injectable } from '@nestjs/common';
import { CreateAirlineCompanyDto } from './dto/create-airline_company.dto';
import { UpdateAirlineCompanyDto } from './dto/update-airline_company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AirlineCompany } from './entities/airline_company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AirlineCompanyService {
  constructor(
    @InjectRepository(AirlineCompany)
    private readonly airlineCompanyRepository: Repository<AirlineCompany>,
  ) {}

  create(createAirlineCompanyDto: CreateAirlineCompanyDto) {
    return this.airlineCompanyRepository.save(createAirlineCompanyDto);
  }

  findAll() {
    return this.airlineCompanyRepository.find();
  }

  findOne(id_company: number) {
    return this.airlineCompanyRepository.findOneBy({ id_company });
  }

  update(id_company: number, updateAirlineCompanyDto: UpdateAirlineCompanyDto) {
    return this.airlineCompanyRepository.update(
      id_company,
      updateAirlineCompanyDto,
    );
  }

  remove(id_company: number) {
    return this.airlineCompanyRepository.delete(id_company);
  }
}
