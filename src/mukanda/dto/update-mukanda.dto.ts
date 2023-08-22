import { PartialType } from '@nestjs/mapped-types';
import { CreateMukandaDto } from './create-mukanda.dto';

export class UpdateMukandaDto extends PartialType(CreateMukandaDto) {}
