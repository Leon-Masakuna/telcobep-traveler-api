import { Module } from '@nestjs/common';
import { MobemboService } from './mobembo.service';
import { MobemboController } from './mobembo.controller';

@Module({
  controllers: [MobemboController],
  providers: [MobemboService],
})
export class MobemboModule {}
