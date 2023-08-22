import { PartialType } from '@nestjs/mapped-types';
import { CreateMbokaDto } from './create-mboka.dto';

export class UpdateMbokaDto extends PartialType(CreateMbokaDto) {}
