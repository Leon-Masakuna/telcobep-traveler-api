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
import { MutuService } from './mutu.service';
import { CreateMutuDto } from './dto/create-mutu.dto';
import { UpdateMutuDto } from './dto/update-mutu.dto';
import { Mutu } from './entities/mutu.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/mutu')
export class MutuController {
  constructor(private readonly mutuService: MutuService) {}

  @Post('/register')
  @UseGuards(AuthGuard())
  create(@Body() createMutuDto: CreateMutuDto): Promise<Mutu> {
    return this.mutuService.create(createMutuDto);
  }

  @Get('/get')
  @UseGuards(AuthGuard())
  findAll() {
    return this.mutuService.findAll();
  }

  @Get('/get/:id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.mutuService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() updateMutuDto: UpdateMutuDto) {
    return this.mutuService.update(+id, updateMutuDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.mutuService.remove(+id);
  }
}
