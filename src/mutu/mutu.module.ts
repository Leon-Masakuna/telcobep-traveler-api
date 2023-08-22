import { Module } from '@nestjs/common';
import { MutuService } from './mutu.service';
import { MutuController } from './mutu.controller';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mutu } from './entities/mutu.entity';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Mutu])],
  controllers: [MutuController],
  providers: [MutuService],
})
export class MutuModule {}
