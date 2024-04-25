/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAdresseDto } from './dto/create-adresse.dto';
import { UpdateAdresseDto } from './dto/update-adresse.dto';
import { Adresse } from './entities/adresse.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdresseService {
  constructor(
    @InjectRepository(Adresse)
    private readonly addressRepository: Repository<Adresse>,
  ) {}

  create(createAdresseDto: CreateAdresseDto) {
    return this.addressRepository.save(createAdresseDto);
  }

  findAll() {
    return this.addressRepository.find();
  }

  findOne(id_address: number) {
    return this.addressRepository.findOneBy({ id_address });
  }

  update(id_address: number, updateAdresseDto: UpdateAdresseDto) {
    return this.addressRepository.update(id_address, updateAdresseDto);
  }

  remove(id_address: number) {
    this.addressRepository.delete(id_address);
  }
}
