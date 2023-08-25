/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { MutuModule } from './mutu/mutu.module';
import { Mutu } from './mutu/entities/mutu.entity';
import { AdminModule } from './admin/admin.module';
import { PrivilegeModule } from './privilege/privilege.module';
import { Admins } from './admin/entities/admin.entity';
import { Privilege } from './privilege/entities/privilege.entity';
import { AdresseModule } from './adresse/adresse.module';
import { CityModule } from './city/city.module';
import { MbokaModule } from './mboka/mboka.module';
import { Mboka } from './mboka/entities/mboka.entity';
import { City } from './city/entities/city.entity';
import { Adresse } from './adresse/entities/adresse.entity';
import { ContactNumbModule } from './contact_numb/contact_numb.module';
import { ContactEmailModule } from './contact_email/contact_email.module';
import { ContactEmail } from './contact_email/entities/contact_email.entity';
import { ContactNumb } from './contact_numb/entities/contact_numb.entity';
import { AirlineCompanyModule } from './airline_company/airline_company.module';
import { MobemboModule } from './mobembo/mobembo.module';
import { Mobembo } from './mobembo/entities/mobembo.entity';
import { AirlineCompany } from './airline_company/entities/airline_company.entity';
import { DocumentsTypeModule } from './documents_type/documents_type.module';
import { DocumentsType } from './documents_type/entities/documents_type.entity';
import { MukandaModule } from './mukanda/mukanda.module';
import { DgmAgentModule } from './dgm_agent/dgm_agent.module';
import { Mukanda } from './mukanda/entities/mukanda.entity';
import { DgmAgent } from './dgm_agent/entities/dgm_agent.entity';
import { VisasModule } from './visas/visas.module';
import { Visa } from './visas/entities/visa.entity';
import { NationauxModule } from './nationaux/nationaux.module';
import { Nationaux } from './nationaux/entities/nationaux.entity';
import { EtrangerModule } from './etranger/etranger.module';
import { Etranger } from './etranger/entities/etranger.entity';
import { BinationauxModule } from './binationaux/binationaux.module';
import { Binationaux } from './binationaux/entities/binationaux.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DBTYPE as any,
      host: process.env.HOST,
      port: parseInt(process.env.SERVERPORT),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [
        User,
        Mutu,
        Admins,
        Privilege,
        Mboka,
        City,
        Adresse,
        ContactEmail,
        ContactNumb,
        Mobembo,
        AirlineCompany,
        DocumentsType,
        Mukanda,
        DgmAgent,
        Visa,
        Nationaux,
        Etranger,
        Binationaux,
      ],
      synchronize: true,
    }),
    UserModule,
    MutuModule,
    AdminModule,
    PrivilegeModule,
    AdresseModule,
    CityModule,
    MbokaModule,
    ContactNumbModule,
    ContactEmailModule,
    AirlineCompanyModule,
    MobemboModule,
    DocumentsTypeModule,
    MukandaModule,
    DgmAgentModule,
    VisasModule,
    NationauxModule,
    EtrangerModule,
    BinationauxModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
