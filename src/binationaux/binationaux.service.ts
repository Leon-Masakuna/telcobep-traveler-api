import { Injectable } from '@nestjs/common';
import { CreateBinationauxDto } from './dto/create-binationaux.dto';
import { UpdateBinationauxDto } from './dto/update-binationaux.dto';

@Injectable()
export class BinationauxService {
  create(createBinationauxDto: CreateBinationauxDto) {
    return 'This action adds a new binationaux';
  }

  findAll() {
    return `This action returns all binationaux`;
  }

  findOne(id: number) {
    return `This action returns a #${id} binationaux`;
  }

  update(id: number, updateBinationauxDto: UpdateBinationauxDto) {
    return `This action updates a #${id} binationaux`;
  }

  remove(id: number) {
    return `This action removes a #${id} binationaux`;
  }
}
