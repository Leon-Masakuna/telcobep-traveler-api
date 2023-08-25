import { Module } from '@nestjs/common';
import { VisasService } from './visas.service';
import { VisasController } from './visas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visa } from './entities/visa.entity';

@Module({
  imports: [VisasModule, TypeOrmModule.forFeature([Visa])],
  controllers: [VisasController],
  providers: [VisasService],
})
export class VisasModule {}
