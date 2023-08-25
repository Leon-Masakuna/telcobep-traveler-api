import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMbokaDto {
  @IsNumber()
  @IsNotEmpty()
  public mboka_code: number;

  @IsString()
  @IsNotEmpty()
  public mboka_name: string;
}
