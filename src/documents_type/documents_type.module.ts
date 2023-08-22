import { Module } from '@nestjs/common';
import { DocumentsTypeService } from './documents_type.service';
import { DocumentsTypeController } from './documents_type.controller';

@Module({
  controllers: [DocumentsTypeController],
  providers: [DocumentsTypeService],
})
export class DocumentsTypeModule {}
