/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMbokaDto } from './dto/create-mboka.dto';
import { UpdateMbokaDto } from './dto/update-mboka.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mboka } from './entities/mboka.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MbokaService {
  constructor(
    @InjectRepository(Mboka)
    private readonly mbokaRepository: Repository<Mboka>,
  ) {}

  create(createMbokaDto: CreateMbokaDto) {
    return this.mbokaRepository.save(createMbokaDto);
  }

  findAll() {
    return this.mbokaRepository.find();
  }

  findOne(id_mboka: number) {
    return this.mbokaRepository.findOneBy({ id_mboka });
  }

  update(id_mboka: number, updateMbokaDto: UpdateMbokaDto) {
    return this.mbokaRepository.update(id_mboka, updateMbokaDto);
  }

  remove(id_mboka: number) {
    return this.mbokaRepository.delete(id_mboka);
  }
}
