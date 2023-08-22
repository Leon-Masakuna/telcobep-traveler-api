import { Module } from '@nestjs/common';
import { BinationauxService } from './binationaux.service';
import { BinationauxController } from './binationaux.controller';

@Module({
  controllers: [BinationauxController],
  providers: [BinationauxService],
})
export class BinationauxModule {}
