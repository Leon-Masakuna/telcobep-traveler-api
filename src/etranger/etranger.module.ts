import { Module } from '@nestjs/common';
import { EtrangerService } from './etranger.service';
import { EtrangerController } from './etranger.controller';

@Module({
  controllers: [EtrangerController],
  providers: [EtrangerService],
})
export class EtrangerModule {}
