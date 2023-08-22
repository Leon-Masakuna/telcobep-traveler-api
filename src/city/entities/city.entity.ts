import { Adresse } from 'src/adresse/entities/adresse.entity';
import { Mboka } from 'src/mboka/entities/mboka.entity';
import { Mobembo } from 'src/mobembo/entities/mobembo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id_city: number;

  @Column()
  city_code: number;

  @Column()
  city_name: string;

  @ManyToOne(() => Mboka, (mboka) => mboka.city)
  @JoinColumn({ name: 'id_mboka' })
  city_country_id: Mboka;

  @OneToMany(() => Adresse, (address) => address.addr_city_id)
  address: Adresse[];

  @OneToMany(() => Mobembo, (mobembo) => mobembo.city_from_id)
  mobembo_city_from: Mobembo[];

  @OneToMany(() => Mobembo, (mobembo) => mobembo.city_dest_id)
  mobembo_city_dest: Mobembo[];

  @OneToMany(() => Mobembo, (mobembo) => mobembo.city_transit_1)
  mobembo_city_transit_1: Mobembo[];

  @OneToMany(() => Mobembo, (mobembo) => mobembo.city_transit_2)
  mobembo_city_transit_2: Mobembo[];
}
