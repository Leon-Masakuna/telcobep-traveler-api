/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMobemboDto } from './create-mobembo.dto';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { AirlineCompany } from 'src/airline_company/entities/airline_company.entity';
import { City } from 'src/city/entities/city.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';

export class UpdateMobemboDto extends PartialType(CreateMobemboDto) {
  @IsNumber()
  @IsNotEmpty()
  public ticket_number: number;

  @IsString()
  @IsOptional()
  public date_mob: string;

  @IsString()
  @IsOptional()
  public created_date: string;

  @IsString()
  @IsOptional()
  public QRcode_ref: string;

  @IsOptional()
  @Type(() => Number)
  public company_id: AirlineCompany;

  @IsOptional()
  @Type(() => Number)
  public city_from_id: City;

  @IsOptional()
  @Type(() => Number)
  public city_dest_id: City;

  @IsOptional()
  @Type(() => Number)
  public city_transit_1: City;

  @IsOptional()
  @Type(() => Number)
  public city_transit_2: City;

  @IsOptional()
  @Type(() => Number)
  public mutu_id: Mutu;
}
