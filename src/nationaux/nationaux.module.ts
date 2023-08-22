import { Module } from '@nestjs/common';
import { NationauxService } from './nationaux.service';
import { NationauxController } from './nationaux.controller';

@Module({
  controllers: [NationauxController],
  providers: [NationauxService],
})
export class NationauxModule {}
