import { Test, TestingModule } from '@nestjs/testing';
import { AirlineCompanyService } from './airline_company.service';

describe('AirlineCompanyService', () => {
  let service: AirlineCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirlineCompanyService],
    }).compile();

    service = module.get<AirlineCompanyService>(AirlineCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
