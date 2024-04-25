/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateContactEmailDto } from './create-contact_email.dto';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateContactEmailDto extends PartialType(CreateContactEmailDto) {
  @IsString()
  @IsNotEmpty()
  public email_ppl: string;

  @IsString()
  @IsOptional()
  public email_alt: string;

  @IsString()
  @IsOptional()
  public created_date: Date;

  @IsString()
  @IsOptional()
  public changed_date: Date;

  @IsString()
  @IsOptional()
  public verify_date: Date;
}
