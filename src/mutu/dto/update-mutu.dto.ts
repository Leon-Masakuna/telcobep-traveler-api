/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMutuDto } from './create-mutu.dto';
import {
  IsString,
  IsNotEmpty,
  IsEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Type } from 'class-transformer';
import { Admins } from 'src/admin/entities/admin.entity';
import { Adresse } from 'src/adresse/entities/adresse.entity';
import { City } from 'src/city/entities/city.entity';
import { ContactEmail } from 'src/contact_email/entities/contact_email.entity';
import { ContactNumb } from 'src/contact_numb/entities/contact_numb.entity';

export class UpdateMutuDto extends PartialType(CreateMutuDto) {
  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  public middlename: string;

  @IsString()
  @IsOptional()
  public gender: string;

  @IsString()
  @IsNotEmpty()
  public date_of_birth: string;

  @IsString()
  @IsNotEmpty()
  public created_date: string;

  @IsString()
  @IsNotEmpty()
  public changed_date: string;

  @IsEmpty({ message: "User id can't be empty" })
  @IsNumber()
  public user_id: User;

  @IsNotEmpty({ message: "City id can't be empty" })
  @Type(() => Number)
  public place_of_birth: City;

  @IsOptional()
  @Type(() => Number)
  public address_id: Adresse;

  @IsOptional()
  @Type(() => Number)
  public contact_email: ContactEmail;

  @IsOptional()
  @Type(() => Number)
  public contact_number: ContactNumb;

  @IsOptional()
  @Type(() => Number)
  public id_changer: Admins;
}
