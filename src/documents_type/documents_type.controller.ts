import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentsTypeService } from './documents_type.service';
import { CreateDocumentsTypeDto } from './dto/create-documents_type.dto';
import { UpdateDocumentsTypeDto } from './dto/update-documents_type.dto';

@Controller('documents-type')
export class DocumentsTypeController {
  constructor(private readonly documentsTypeService: DocumentsTypeService) {}

  @Post()
  create(@Body() createDocumentsTypeDto: CreateDocumentsTypeDto) {
    return this.documentsTypeService.create(createDocumentsTypeDto);
  }

  @Get()
  findAll() {
    return this.documentsTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentsTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentsTypeDto: UpdateDocumentsTypeDto) {
    return this.documentsTypeService.update(+id, updateDocumentsTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentsTypeService.remove(+id);
  }
}
