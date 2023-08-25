import { Module } from '@nestjs/common';
import { AirlineCompanyService } from './airline_company.service';
import { AirlineCompanyController } from './airline_company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirlineCompany } from './entities/airline_company.entity';

@Module({
  imports: [AirlineCompanyModule, TypeOrmModule.forFeature([AirlineCompany])],
  controllers: [AirlineCompanyController],
  providers: [AirlineCompanyService],
})
export class AirlineCompanyModule {}
