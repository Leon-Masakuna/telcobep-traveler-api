import { Module } from '@nestjs/common';
import { DocumentsTypeService } from './documents_type.service';
import { DocumentsTypeController } from './documents_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsType } from './entities/documents_type.entity';

@Module({
  imports: [DocumentsTypeModule, TypeOrmModule.forFeature([DocumentsType])],
  controllers: [DocumentsTypeController],
  providers: [DocumentsTypeService],
})
export class DocumentsTypeModule {}
