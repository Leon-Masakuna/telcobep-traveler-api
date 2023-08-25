import { Module } from '@nestjs/common';
import { ContactEmailService } from './contact_email.service';
import { ContactEmailController } from './contact_email.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEmail } from './entities/contact_email.entity';

@Module({
  imports: [ContactEmailModule, TypeOrmModule.forFeature([ContactEmail])],
  controllers: [ContactEmailController],
  providers: [ContactEmailService],
})
export class ContactEmailModule {}
