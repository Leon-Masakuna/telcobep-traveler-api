import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ContactEmailService } from './contact_email.service';
import { CreateContactEmailDto } from './dto/create-contact_email.dto';
import { UpdateContactEmailDto } from './dto/update-contact_email.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/contact-email')
export class ContactEmailController {
  constructor(private readonly contactEmailService: ContactEmailService) {}

  @Post('/create')
  create(@Body() createContactEmailDto: CreateContactEmailDto) {
    return this.contactEmailService.create(createContactEmailDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.contactEmailService.findAll();
  }

  @Get('/get/:id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.contactEmailService.findOne(+id);
  }

  @Patch('/update/:id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateContactEmailDto: UpdateContactEmailDto,
  ) {
    return this.contactEmailService.update(+id, updateContactEmailDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.contactEmailService.remove(+id);
  }
}
