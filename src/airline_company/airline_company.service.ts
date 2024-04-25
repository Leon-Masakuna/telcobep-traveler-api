/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async create(createAirlineCompanyDto: CreateAirlineCompanyDto) {
    try {
      const { name, code_IATA } = createAirlineCompanyDto;

      const company = await this.airlineCompanyRepository.save({
        name,
        code_IATA,
      });

      return { company };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Code IATA already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  findAll() {
    return this.airlineCompanyRepository.find();
  }

  findOne(id_company: number) {
    return this.airlineCompanyRepository.findOneBy({ id_company });
  }

  async update(
    id_company: number,
    updateAirlineCompanyDto: UpdateAirlineCompanyDto,
  ) {
    try {
      const { name, code_IATA } = updateAirlineCompanyDto;

      const company = await this.airlineCompanyRepository.update(id_company, {
        name,
        code_IATA,
      });

      return { company };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Code IATA already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  remove(id_company: number) {
    return this.airlineCompanyRepository.delete(id_company);
  }
}
