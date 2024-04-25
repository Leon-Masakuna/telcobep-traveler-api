/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { ContactEmail } from 'src/contact_email/entities/contact_email.entity';
import { ContactNumb } from 'src/contact_numb/entities/contact_numb.entity';
import { Privilege } from 'src/privilege/entities/privilege.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  @IsOptional()
  public middlename: string;

  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  public userpassword: string;

  @IsString()
  @IsOptional()
  public created_date: Date;

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
