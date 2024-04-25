/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateContactEmailDto {
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
