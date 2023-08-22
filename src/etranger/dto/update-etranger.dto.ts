import { PartialType } from '@nestjs/mapped-types';
import { CreateEtrangerDto } from './create-etranger.dto';

export class UpdateEtrangerDto extends PartialType(CreateEtrangerDto) {}
