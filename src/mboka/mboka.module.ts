import { Module } from '@nestjs/common';
import { MbokaService } from './mboka.service';
import { MbokaController } from './mboka.controller';

@Module({
  controllers: [MbokaController],
  providers: [MbokaService],
})
export class MbokaModule {}
