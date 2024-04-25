import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NationauxService } from './nationaux.service';
import { CreateNationauxDto } from './dto/create-nationaux.dto';
import { UpdateNationauxDto } from './dto/update-nationaux.dto';

@Controller('nationaux')
export class NationauxController {
  constructor(private readonly nationauxService: NationauxService) {}

  @Post()
  create(@Body() createNationauxDto: CreateNationauxDto) {
    return this.nationauxService.create(createNationauxDto);
  }

  @Get()
  findAll() {
    return this.nationauxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nationauxService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNationauxDto: UpdateNationauxDto,
  ) {
    return this.nationauxService.update(+id, updateNationauxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nationauxService.remove(+id);
  }
}
