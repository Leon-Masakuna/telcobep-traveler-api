import { PartialType } from '@nestjs/mapped-types';
import { CreateBinationauxDto } from './create-binationaux.dto';

export class UpdateBinationauxDto extends PartialType(CreateBinationauxDto) {}
