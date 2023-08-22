import { PartialType } from '@nestjs/mapped-types';
import { CreateContactEmailDto } from './create-contact_email.dto';

export class UpdateContactEmailDto extends PartialType(CreateContactEmailDto) {}
