import { PartialType } from '@nestjs/mapped-types';
import { CreateAirlineCompanyDto } from './create-airline_company.dto';

export class UpdateAirlineCompanyDto extends PartialType(CreateAirlineCompanyDto) {}
