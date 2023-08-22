import { PartialType } from '@nestjs/mapped-types';
import { CreateNationauxDto } from './create-nationaux.dto';

export class UpdateNationauxDto extends PartialType(CreateNationauxDto) {}
