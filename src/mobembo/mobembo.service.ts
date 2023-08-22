import { Injectable } from '@nestjs/common';
import { CreateMobemboDto } from './dto/create-mobembo.dto';
import { UpdateMobemboDto } from './dto/update-mobembo.dto';

@Injectable()
export class MobemboService {
  create(createMobemboDto: CreateMobemboDto) {
    return 'This action adds a new mobembo';
  }

  findAll() {
    return `This action returns all mobembo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mobembo`;
  }

  update(id: number, updateMobemboDto: UpdateMobemboDto) {
    return `This action updates a #${id} mobembo`;
  }

  remove(id: number) {
    return `This action removes a #${id} mobembo`;
  }
}
