import { Test, TestingModule } from '@nestjs/testing';
import { AirlineCompanyController } from './airline_company.controller';
import { AirlineCompanyService } from './airline_company.service';

describe('AirlineCompanyController', () => {
  let controller: AirlineCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirlineCompanyController],
      providers: [AirlineCompanyService],
    }).compile();

    controller = module.get<AirlineCompanyController>(AirlineCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
