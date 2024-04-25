/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  create(createCityDto: CreateCityDto) {
    return this.cityRepository.save(createCityDto);
  }

  findAll() {
    return this.cityRepository.find();
  }

  findOne(id_city: number) {
    return this.cityRepository.findOneBy({ id_city });
  }

  update(id_city: number, updateCityDto: UpdateCityDto) {
    return this.cityRepository.update(id_city, updateCityDto);
  }

  remove(id_city: number) {
    return this.cityRepository.delete(id_city);
  }
}
