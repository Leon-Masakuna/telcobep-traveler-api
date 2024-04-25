/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCityDto } from './create-city.dto';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { Mboka } from 'src/mboka/entities/mboka.entity';

export class UpdateCityDto extends PartialType(CreateCityDto) {
  @IsNumber()
  @IsNotEmpty()
  public city_code: number;

  @IsString()
  @IsNotEmpty()
  public city_name: string;

  @IsNotEmpty({ message: "City country id can't be empty" })
  @Type(() => Number)
  public id_mboka: Mboka;
}
