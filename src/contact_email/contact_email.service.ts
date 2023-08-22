import { Injectable } from '@nestjs/common';
import { CreateContactEmailDto } from './dto/create-contact_email.dto';
import { UpdateContactEmailDto } from './dto/update-contact_email.dto';

@Injectable()
export class ContactEmailService {
  create(createContactEmailDto: CreateContactEmailDto) {
    return 'This action adds a new contactEmail';
  }

  findAll() {
    return `This action returns all contactEmail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactEmail`;
  }

  update(id: number, updateContactEmailDto: UpdateContactEmailDto) {
    return `This action updates a #${id} contactEmail`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactEmail`;
  }
}
