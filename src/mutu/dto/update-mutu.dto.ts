import { PartialType } from '@nestjs/mapped-types';
import { CreateMutuDto } from './create-mutu.dto';
import { IsString, IsNotEmpty, IsEmpty, IsNumber } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class UpdateMutuDto extends PartialType(CreateMutuDto) {
  @IsString()
  @IsNotEmpty()
  public firstname: string;

  @IsString()
  @IsNotEmpty()
  public lastname: string;

  @IsString()
  public middlename: string;

  @IsString()
  @IsNotEmpty()
  public date_of_birth: string;

  @IsString()
  @IsNotEmpty()
  public created_date: string;

  @IsString()
  @IsNotEmpty()
  public changed_date: string;

  @IsEmpty({ message: 'You cannot pass the userId manually' })
  @IsNumber()
  public user_id: User;
}
