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
import { ContactNumbService } from './contact_numb.service';
import { CreateContactNumbDto } from './dto/create-contact_numb.dto';
import { UpdateContactNumbDto } from './dto/update-contact_numb.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/contact-numb')
export class ContactNumbController {
  constructor(private readonly contactNumbService: ContactNumbService) {}

  @Post()
  create(@Body() createContactNumbDto: CreateContactNumbDto) {
    return this.contactNumbService.create(createContactNumbDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.contactNumbService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.contactNumbService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateContactNumbDto: UpdateContactNumbDto,
  ) {
    return this.contactNumbService.update(+id, updateContactNumbDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.contactNumbService.remove(+id);
  }
}
