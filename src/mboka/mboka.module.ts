/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MbokaService } from './mboka.service';
import { MbokaController } from './mboka.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mboka } from './entities/mboka.entity';

@Module({
  imports: [MbokaModule, TypeOrmModule.forFeature([Mboka])],
  controllers: [MbokaController],
  providers: [MbokaService],
})
export class MbokaModule {}
