import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BinationauxService } from './binationaux.service';
import { CreateBinationauxDto } from './dto/create-binationaux.dto';
import { UpdateBinationauxDto } from './dto/update-binationaux.dto';

@Controller('binationaux')
export class BinationauxController {
  constructor(private readonly binationauxService: BinationauxService) {}

  @Post()
  create(@Body() createBinationauxDto: CreateBinationauxDto) {
    return this.binationauxService.create(createBinationauxDto);
  }

  @Get()
  findAll() {
    return this.binationauxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.binationauxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBinationauxDto: UpdateBinationauxDto) {
    return this.binationauxService.update(+id, updateBinationauxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.binationauxService.remove(+id);
  }
}
