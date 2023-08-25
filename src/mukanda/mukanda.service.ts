import { Injectable } from '@nestjs/common';
import { CreateMukandaDto } from './dto/create-mukanda.dto';
import { UpdateMukandaDto } from './dto/update-mukanda.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mukanda } from './entities/mukanda.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MukandaService {
  constructor(
    @InjectRepository(Mukanda)
    private readonly mukandaRepository: Repository<Mukanda>,
  ) {}

  create(createMukandaDto: CreateMukandaDto) {
    return this.mukandaRepository.save(createMukandaDto);
  }

  findAll() {
    return this.mukandaRepository.find();
  }

  findOne(id_muk: number) {
    return this.mukandaRepository.findOneBy({ id_muk });
  }

  update(id_muk: number, updateMukandaDto: UpdateMukandaDto) {
    return this.mukandaRepository.update(id_muk, updateMukandaDto);
  }

  remove(id_muk: number) {
    return this.mukandaRepository.delete(id_muk);
  }
}
