import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentsTypeDto } from './create-documents_type.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDocumentsTypeDto extends PartialType(
  CreateDocumentsTypeDto,
) {
  @IsString()
  @IsNotEmpty()
  public doc_type: string;
}
