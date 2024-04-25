/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { City } from 'src/city/entities/city.entity';

export class CreateAdresseDto {
  @IsNumber()
  @IsNotEmpty()
  public addr_number: number;

  @IsString()
  @IsNotEmpty()
  public addr_av: string;

  @IsString()
  @IsNotEmpty()
  public addr_quartier: string;

  @IsNotEmpty({ message: "City id can't be empty" })
  @Type(() => Number)
  public addr_city_id: City;
}
