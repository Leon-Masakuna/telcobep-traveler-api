import { Injectable } from '@nestjs/common';
import { CreateMutuDto } from './dto/create-mutu.dto';
import { UpdateMutuDto } from './dto/update-mutu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mutu } from './entities/mutu.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class MutuService {
  constructor(
    @InjectRepository(Mutu)
    private readonly mutuRepository: Repository<Mutu>,
  ) {}

  create(createMutuDto: CreateMutuDto, user: User) {
    const data = Object.assign(createMutuDto, { user_id: user.id_user });

    return this.mutuRepository.save(data);
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
