import { Injectable } from '@nestjs/common';
import { CreateMbokaDto } from './dto/create-mboka.dto';
import { UpdateMbokaDto } from './dto/update-mboka.dto';

@Injectable()
export class MbokaService {
  create(createMbokaDto: CreateMbokaDto) {
    return 'This action adds a new mboka';
  }

  findAll() {
    return `This action returns all mboka`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mboka`;
  }

  update(id: number, updateMbokaDto: UpdateMbokaDto) {
    return `This action updates a #${id} mboka`;
  }

  remove(id: number) {
    return `This action removes a #${id} mboka`;
  }
}
