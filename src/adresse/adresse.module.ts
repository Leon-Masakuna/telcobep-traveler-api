/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { AdresseController } from './adresse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adresse } from './entities/adresse.entity';

@Module({
  imports: [AdresseModule, TypeOrmModule.forFeature([Adresse])],
  controllers: [AdresseController],
  providers: [AdresseService],
})
export class AdresseModule {}
