/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateVisaDto } from './dto/create-visa.dto';
import { UpdateVisaDto } from './dto/update-visa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Visa } from './entities/visa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VisasService {
  constructor(
    @InjectRepository(Visa)
    private readonly visaRepository: Repository<Visa>,
  ) {}

  create(createVisaDto: CreateVisaDto) {
    return this.visaRepository.save(createVisaDto);
  }

  findAll() {
    return this.visaRepository.find();
  }

  findOne(id_visa: number) {
    return this.visaRepository.findOneBy({ id_visa });
  }

  update(id_visa: number, updateVisaDto: UpdateVisaDto) {
    return this.visaRepository.update(id_visa, updateVisaDto);
  }

  remove(id_visa: number) {
    return this.visaRepository.delete(id_visa);
  }
}
