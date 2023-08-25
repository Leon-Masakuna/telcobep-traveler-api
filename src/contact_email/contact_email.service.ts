import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateContactEmailDto } from './dto/create-contact_email.dto';
import { UpdateContactEmailDto } from './dto/update-contact_email.dto';
import { ContactEmail } from './entities/contact_email.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactEmailService {
  constructor(
    @InjectRepository(ContactEmail)
    private readonly contactEmailRepository: Repository<ContactEmail>,
  ) {}

  async create(createContactEmailDto: CreateContactEmailDto) {
    try {
      const { email_ppl, email_alt } = createContactEmailDto;

      const email = await this.contactEmailRepository.save({
        email_ppl,
        email_alt,
      });

      return { email };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Main email address already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  findAll() {
    return this.contactEmailRepository.find();
  }

  findOne(id_email: number) {
    return this.contactEmailRepository.findOneBy({ id_email });
  }

  async update(id_email: number, updateContactEmailDto: UpdateContactEmailDto) {
    try {
      const { email_ppl, email_alt } = updateContactEmailDto;

      const email = await this.contactEmailRepository.update(id_email, {
        email_ppl,
        email_alt,
      });

      return { email };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Main email address already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  remove(id_email: number) {
    return this.contactEmailRepository.delete(id_email);
  }
}
