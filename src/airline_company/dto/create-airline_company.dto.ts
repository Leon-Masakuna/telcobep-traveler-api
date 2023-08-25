import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAirlineCompanyDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public code_IATA: string;
}
