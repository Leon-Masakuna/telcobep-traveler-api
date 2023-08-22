import { Module } from '@nestjs/common';
import { ContactNumbService } from './contact_numb.service';
import { ContactNumbController } from './contact_numb.controller';
import { ContactNumb } from './entities/contact_numb.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ContactNumbModule, TypeOrmModule.forFeature([ContactNumb])],
  controllers: [ContactNumbController],
  providers: [ContactNumbService],
})
export class ContactNumbModule {}
