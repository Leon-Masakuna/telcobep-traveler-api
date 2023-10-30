import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async create(createMukandaDto: CreateMukandaDto) {
    try {
      const {
        muk_number,
        muk_deliver_date,
        muk_expirer_date,
        muk_authority,
        muk_pic_ref,
        muk_type_id,
        muk_mboka_id,
        muk_verif_dgm_id,
        mutu_id,
      } = createMukandaDto;

      const mukanda = await this.mukandaRepository.save({
        muk_number,
        muk_deliver_date,
        muk_expirer_date,
        muk_authority,
        muk_pic_ref,
        muk_type_id,
        muk_mboka_id,
        muk_verif_dgm_id: muk_verif_dgm_id || null,
        mutu_id,
      });

      return { mukanda };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('This mukanda number already exists');
      } else if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new ConflictException('Check if all the reference keys exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
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
