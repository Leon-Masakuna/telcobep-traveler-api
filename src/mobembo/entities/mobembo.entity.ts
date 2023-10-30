import { AirlineCompany } from 'src/airline_company/entities/airline_company.entity';
import { City } from 'src/city/entities/city.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Mobembo {
  @PrimaryGeneratedColumn()
  id_mobembo: number;

  @Column({ unique: true })
  ticket_number: number;

  @Column()
  date_mob: Date;

  @CreateDateColumn()
  created_date: Date;

  @Column()
  QRcode_ref: string;

  @ManyToOne(() => AirlineCompany, (company) => company.mobembo, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'company_id' })
  company_id: AirlineCompany;

  @ManyToOne(() => City, (city) => city.mobembo_city_from, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'city_from_id' })
  city_from_id: City;

  @ManyToOne(() => City, (city) => city.mobembo_city_dest, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'city_dest_id' })
  city_dest_id: City;

  @ManyToOne(() => City, (city) => city.mobembo_city_transit_1, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'city_transit_1' })
  city_transit_1: City;

  @ManyToOne(() => City, (city) => city.mobembo_city_transit_2, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'city_transit_2' })
  city_transit_2: City;

  @ManyToOne(() => Mutu, (mutu) => mutu.mobembo, { cascade: true, eager: true })
  @JoinColumn({ name: 'mutu_id' })
  mutu_id: Mutu;
}
