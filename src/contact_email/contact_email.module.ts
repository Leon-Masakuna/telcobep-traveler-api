import { Module } from '@nestjs/common';
import { ContactEmailService } from './contact_email.service';
import { ContactEmailController } from './contact_email.controller';

@Module({
  controllers: [ContactEmailController],
  providers: [ContactEmailService],
})
export class ContactEmailModule {}
