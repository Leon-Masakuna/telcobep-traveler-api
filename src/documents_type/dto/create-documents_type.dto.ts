import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentsTypeDto {
  @IsString()
  @IsNotEmpty()
  public type: string;
}
