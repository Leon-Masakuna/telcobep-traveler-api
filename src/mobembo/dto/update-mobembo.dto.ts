import { PartialType } from '@nestjs/mapped-types';
import { CreateMobemboDto } from './create-mobembo.dto';

export class UpdateMobemboDto extends PartialType(CreateMobemboDto) {}
