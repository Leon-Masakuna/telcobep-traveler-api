import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentsTypeDto {
  @IsString()
  @IsNotEmpty()
  public doc_type: string;
}
