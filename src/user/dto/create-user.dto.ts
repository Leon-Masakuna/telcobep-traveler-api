import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { Privilege } from 'src/privilege/entities/privilege.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  @IsOptional()
  public middlename: string;

  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  public userpassword: string;

  @IsString()
  @IsOptional()
  public created_date: Date;

  @IsOptional()
  @Type(() => Number)
  public privilege_id: Privilege;
}
