import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateContactNumbDto {
  @IsString()
  @IsNotEmpty()
  public numero_ppl: string;

  @IsString()
  @IsOptional()
  public numero_alt: string;

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
