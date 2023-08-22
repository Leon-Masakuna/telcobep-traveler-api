import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentsTypeDto } from './create-documents_type.dto';

export class UpdateDocumentsTypeDto extends PartialType(CreateDocumentsTypeDto) {}
