import { Injectable } from '@nestjs/common';
import { CreateEtrangerDto } from './dto/create-etranger.dto';
import { UpdateEtrangerDto } from './dto/update-etranger.dto';

@Injectable()
export class EtrangerService {
  create(createEtrangerDto: CreateEtrangerDto) {
    return 'This action adds a new etranger';
  }

  findAll() {
    return `This action returns all etranger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} etranger`;
  }

  update(id: number, updateEtrangerDto: UpdateEtrangerDto) {
    return `This action updates a #${id} etranger`;
  }

  remove(id: number) {
    return `This action removes a #${id} etranger`;
  }
}
