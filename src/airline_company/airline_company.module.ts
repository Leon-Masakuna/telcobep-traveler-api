import { Module } from '@nestjs/common';
import { AirlineCompanyService } from './airline_company.service';
import { AirlineCompanyController } from './airline_company.controller';

@Module({
  controllers: [AirlineCompanyController],
  providers: [AirlineCompanyService],
})
export class AirlineCompanyModule {}
