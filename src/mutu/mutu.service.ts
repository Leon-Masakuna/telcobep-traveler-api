import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateMutuDto } from './dto/create-mutu.dto';
import { UpdateMutuDto } from './dto/update-mutu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mutu } from './entities/mutu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MutuService {
  constructor(
    @InjectRepository(Mutu)
    private readonly mutuRepository: Repository<Mutu>,
  ) {}

  async create(createMutuDto: CreateMutuDto) {
    try {
      const {
        firstname,
        lastname,
        middlename,
        gender,
        date_of_birth,
        user_id,
        place_of_birth,
        address_id,
        contact_email,
        contact_number,
      } = createMutuDto;

      const mutu = await this.mutuRepository.save({
        firstname,
        lastname,
        middlename,
        gender,
        date_of_birth,
        user_id,
        place_of_birth,
        address_id,
        contact_email: contact_email || null,
        contact_number,
      });

      return { mutu };
    } catch (error) {
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new ConflictException('No such reference key for email address');
      } else {
        console.log(error.code);
        throw new InternalServerErrorException();
      }
    }
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
