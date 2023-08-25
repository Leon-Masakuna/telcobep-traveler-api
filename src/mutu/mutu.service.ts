import { Injectable } from '@nestjs/common';
import { CreateMutuDto } from './dto/create-mutu.dto';
import { UpdateMutuDto } from './dto/update-mutu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mutu } from './entities/mutu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MutuService {
  constructor(
    @InjectRepository(Mutu)
    private readonly mutuRepository: Repository<Mutu>,
  ) {}

  create(createMutuDto: CreateMutuDto) {
    return this.mutuRepository.save(createMutuDto);
  }

  findAll() {
    return this.mutuRepository.find();
  }

  findOne(id_mutu: number) {
    return this.mutuRepository.findOneBy({ id_mutu });
  }

  update(id_mutu: number, updateMutuDto: UpdateMutuDto) {
    return this.mutuRepository.update(id_mutu, updateMutuDto);
  }

  remove(id_mutu: number) {
    return this.mutuRepository.delete(id_mutu);
  }
}
