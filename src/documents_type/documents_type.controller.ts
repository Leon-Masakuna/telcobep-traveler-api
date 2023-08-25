import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DocumentsTypeService } from './documents_type.service';
import { CreateDocumentsTypeDto } from './dto/create-documents_type.dto';
import { UpdateDocumentsTypeDto } from './dto/update-documents_type.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/documents-type')
export class DocumentsTypeController {
  constructor(private readonly documentsTypeService: DocumentsTypeService) {}

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createDocumentsTypeDto: CreateDocumentsTypeDto) {
    return this.documentsTypeService.create(createDocumentsTypeDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.documentsTypeService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.documentsTypeService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateDocumentsTypeDto: UpdateDocumentsTypeDto,
  ) {
    return this.documentsTypeService.update(+id, updateDocumentsTypeDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.documentsTypeService.remove(+id);
  }
}
