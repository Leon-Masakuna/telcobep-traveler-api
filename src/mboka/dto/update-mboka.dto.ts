/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMbokaDto } from './create-mboka.dto';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class UpdateMbokaDto extends PartialType(CreateMbokaDto) {
  @IsNumber()
  @IsNotEmpty()
  public mboka_code: number;

  @IsString()
  @IsNotEmpty()
  public mboka_name: string;
}
