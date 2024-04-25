/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateNationauxDto } from './dto/create-nationaux.dto';
import { UpdateNationauxDto } from './dto/update-nationaux.dto';

@Injectable()
export class NationauxService {
  create(createNationauxDto: CreateNationauxDto) {
    return 'This action adds a new nationaux';
  }

  findAll() {
    return `This action returns all nationaux`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nationaux`;
  }

  update(id: number, updateNationauxDto: UpdateNationauxDto) {
    return `This action updates a #${id} nationaux`;
  }

  remove(id: number) {
    return `This action removes a #${id} nationaux`;
  }
}
