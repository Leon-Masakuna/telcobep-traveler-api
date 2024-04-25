/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Mboka } from 'src/mboka/entities/mboka.entity';

export class CreateCityDto {
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
