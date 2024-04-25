/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Mboka } from 'src/mboka/entities/mboka.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';

export class CreateVisaDto {
  @IsString()
  @IsNotEmpty()
  public visa_type: string;

  @IsString()
  @IsOptional()
  public visa_deliver_date: string;

  @IsString()
  @IsOptional()
  public visa_expirer_date: string;

  @IsString()
  @IsNotEmpty()
  public visa_authority: string;

  @IsString()
  @IsNotEmpty()
  public visa_pic_ref: string;

  @IsOptional()
  @Type(() => Number)
  public visa_traveler_id: Mutu;

  @IsOptional()
  @Type(() => Number)
  public visa_country_id: Mboka;
}
