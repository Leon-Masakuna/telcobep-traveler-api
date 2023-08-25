import { Module } from '@nestjs/common';
import { MobemboService } from './mobembo.service';
import { MobemboController } from './mobembo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mobembo } from './entities/mobembo.entity';

@Module({
  imports: [MobemboModule, TypeOrmModule.forFeature([Mobembo])],
  controllers: [MobemboController],
  providers: [MobemboService],
})
export class MobemboModule {}
