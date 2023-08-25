import { Module } from '@nestjs/common';
import { MukandaService } from './mukanda.service';
import { MukandaController } from './mukanda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mukanda } from './entities/mukanda.entity';

@Module({
  imports: [MukandaModule, TypeOrmModule.forFeature([Mukanda])],
  controllers: [MukandaController],
  providers: [MukandaService],
})
export class MukandaModule {}
