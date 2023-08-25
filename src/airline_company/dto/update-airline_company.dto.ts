import { PartialType } from '@nestjs/mapped-types';
import { CreateAirlineCompanyDto } from './create-airline_company.dto';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateAirlineCompanyDto extends PartialType(
  CreateAirlineCompanyDto,
) {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public code_IATA: string;
}
