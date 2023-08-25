import { Injectable } from '@nestjs/common';
import { CreateDocumentsTypeDto } from './dto/create-documents_type.dto';
import { UpdateDocumentsTypeDto } from './dto/update-documents_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentsType } from './entities/documents_type.entity';

@Injectable()
export class DocumentsTypeService {
  constructor(
    @InjectRepository(DocumentsType)
    private readonly documentTypeRepository: Repository<DocumentsType>,
  ) {}

  create(createDocumentsTypeDto: CreateDocumentsTypeDto) {
    return this.documentTypeRepository.save(createDocumentsTypeDto);
  }

  findAll() {
    return this.documentTypeRepository.find();
  }

  findOne(id_doc_type: number) {
    return this.documentTypeRepository.findOneBy({ id_doc_type });
  }

  update(id_doc_type: number, updateDocumentsTypeDto: UpdateDocumentsTypeDto) {
    return this.documentTypeRepository.update(
      id_doc_type,
      updateDocumentsTypeDto,
    );
  }

  remove(id_doc_type: number) {
    return this.documentTypeRepository.delete(id_doc_type);
  }
}
