import { Injectable } from '@nestjs/common';
import { CreateMobemboDto } from './dto/create-mobembo.dto';
import { UpdateMobemboDto } from './dto/update-mobembo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mobembo } from './entities/mobembo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MobemboService {
  constructor(
    @InjectRepository(Mobembo)
    private readonly mobemboRepository: Repository<Mobembo>,
  ) {}

  create(createMobemboDto: CreateMobemboDto) {
    return this.mobemboRepository.save(createMobemboDto);
  }

  findAll() {
    return this.mobemboRepository.find();
  }

  findOne(id_mobembo: number) {
    return this.mobemboRepository.findOneBy({
      id_mobembo,
    });
  }

  update(id_mobembo: number, updateMobemboDto: UpdateMobemboDto) {
    return this.mobemboRepository.update(id_mobembo, updateMobemboDto);
  }

  remove(id_mobembo: number) {
    return this.mobemboRepository.delete(id_mobembo);
  }
}
