import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateContactNumbDto } from './dto/create-contact_numb.dto';
import { UpdateContactNumbDto } from './dto/update-contact_numb.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactNumb } from './entities/contact_numb.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactNumbService {
  constructor(
    @InjectRepository(ContactNumb)
    private readonly contactNumbRepository: Repository<ContactNumb>,
  ) {}

  async create(createContactNumbDto: CreateContactNumbDto) {
    try {
      const { numero_ppl } = createContactNumbDto;

      const phone = await this.contactNumbRepository.save({
        numero_ppl,
      });

      return { phone };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Phone number already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  findAll() {
    return this.contactNumbRepository.find();
  }

  findOne(id_contact: number) {
    return this.contactNumbRepository.findOneBy({ id_contact });
  }

  async update(id_contact: number, updateContactNumbDto: UpdateContactNumbDto) {
    try {
      const { numero_ppl } = updateContactNumbDto;

      const phone = await this.contactNumbRepository.update(id_contact, {
        numero_ppl,
      });

      return { phone };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Phone number already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
    // return this.contactNumbRepository.update(id_mutu, updateContactNumbDto);
  }

  remove(id_contact: number) {
    return this.contactNumbRepository.delete(id_contact);
  }
}
