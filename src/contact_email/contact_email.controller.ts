import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactEmailService } from './contact_email.service';
import { CreateContactEmailDto } from './dto/create-contact_email.dto';
import { UpdateContactEmailDto } from './dto/update-contact_email.dto';

@Controller('contact-email')
export class ContactEmailController {
  constructor(private readonly contactEmailService: ContactEmailService) {}

  @Post()
  create(@Body() createContactEmailDto: CreateContactEmailDto) {
    return this.contactEmailService.create(createContactEmailDto);
  }

  @Get()
  findAll() {
    return this.contactEmailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactEmailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactEmailDto: UpdateContactEmailDto) {
    return this.contactEmailService.update(+id, updateContactEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactEmailService.remove(+id);
  }
}
