import { City } from 'src/city/entities/city.entity';
import { Etranger } from 'src/etranger/entities/etranger.entity';
import { Mukanda } from 'src/mukanda/entities/mukanda.entity';
import { Visa } from 'src/visas/entities/visa.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mboka {
  @PrimaryGeneratedColumn()
  id_mboka: number;

  @Column()
  mboka_code: number;

  @Column()
  mboka_name: string;

  @OneToMany(() => City, (city) => city.id_mboka)
  city: City[];

  @OneToMany(() => Mukanda, (mukanda) => mukanda.muk_mboka_id)
  mukanda: Mukanda[];

  @OneToMany(() => Visa, (visa) => visa.visa_country_id)
  visa: Visa[];

  @OneToMany(() => Etranger, (foreign) => foreign.id_first_country)
  first_country: Etranger[];

  @OneToMany(() => Etranger, (foreign) => foreign.id_second_country)
  second_country: Etranger[];
}
