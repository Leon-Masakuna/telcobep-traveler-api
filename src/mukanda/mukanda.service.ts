import { Injectable } from '@nestjs/common';
import { CreateMukandaDto } from './dto/create-mukanda.dto';
import { UpdateMukandaDto } from './dto/update-mukanda.dto';

@Injectable()
export class MukandaService {
  create(createMukandaDto: CreateMukandaDto) {
    return 'This action adds a new mukanda';
  }

  findAll() {
    return `This action returns all mukanda`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mukanda`;
  }

  update(id: number, updateMukandaDto: UpdateMukandaDto) {
    return `This action updates a #${id} mukanda`;
  }

  remove(id: number) {
    return `This action removes a #${id} mukanda`;
  }
}
