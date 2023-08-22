import { Type } from 'class-transformer';
import { IsEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateMutuDto {
  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  public middlename: string;

  @IsString()
  @IsOptional()
  public date_of_birth: string;

  @IsString()
  @IsOptional()
  public created_date: string;

  @IsString()
  @IsOptional()
  public changed_date: string;

  @IsEmpty({ message: 'You cannot pass the userId manually' })
  @Type(() => Number)
  public user_id: User;
}
