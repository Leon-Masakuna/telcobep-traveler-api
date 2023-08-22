import { Module } from '@nestjs/common';
import { MukandaService } from './mukanda.service';
import { MukandaController } from './mukanda.controller';

@Module({
  controllers: [MukandaController],
  providers: [MukandaService],
})
export class MukandaModule {}
