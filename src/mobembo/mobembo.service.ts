import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async create(createMobemboDto: CreateMobemboDto) {
    try {
      const {
        ticket_number,
        date_mob,
        QRcode_ref,
        company_id,
        city_from_id,
        city_dest_id,
        city_transit_1,
        city_transit_2,
        mutu_id,
      } = createMobemboDto;

      const mobembo = await this.mobemboRepository.save({
        ticket_number,
        date_mob,
        QRcode_ref,
        company_id,
        city_from_id,
        city_dest_id,
        city_transit_1: city_transit_1 || null,
        city_transit_2: city_transit_2 || null,
        mutu_id,
      });

      return { mobembo };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('This mobembo ticket number already exist');
      } else if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new ConflictException('Check if all the reference keys exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  findAll() {
    return this.mobemboRepository.find();
  }

  findOne(id_mobembo: number) {
    return this.mobemboRepository.findOneBy({
      id_mobembo,
    });
  }

  async update(id_mobembo: number, updateMobemboDto: UpdateMobemboDto) {
    try {
      const {
        ticket_number,
        date_mob,
        QRcode_ref,
        company_id,
        city_from_id,
        city_dest_id,
        city_transit_1,
        city_transit_2,
        mutu_id,
      } = updateMobemboDto;

      const mobembo = await this.mobemboRepository.update(id_mobembo, {
        ticket_number,
        date_mob,
        QRcode_ref,
        company_id,
        city_from_id,
        city_dest_id,
        city_transit_1,
        city_transit_2,
        mutu_id,
      });

      return { mobembo };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('This mobembo ticket number already exist');
      } else if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new ConflictException('Check if all the reference keys exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
    // return this.mobemboRepository.update(id_mobembo, updateMobemboDto);
  }

  remove(id_mobembo: number) {
    return this.mobemboRepository.delete(id_mobembo);
  }
}
