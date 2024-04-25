/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';
import { Privilege } from 'src/privilege/entities/privilege.entity';
import { ContactNumb } from 'src/contact_numb/entities/contact_numb.entity';
import { ContactEmail } from 'src/contact_email/entities/contact_email.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  public middlename: string;

  @IsNotEmpty()
  @IsString()
  public username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  public userpassword: string;

  @IsString()
  @IsOptional()
  public changed_date: Date;

  @IsOptional()
  @Type(() => Number)
  public privilege_id: Privilege;

  @IsOptional()
  @Type(() => Number)
  public contact_id: ContactNumb;

  @IsOptional()
  @Type(() => Number)
  public email_id: ContactEmail;
}
