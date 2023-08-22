import { City } from 'src/city/entities/city.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Adresse {
  @PrimaryGeneratedColumn()
  id_address: number;

  @Column()
  addr_number: number;

  @Column()
  addr_av: string;

  @Column()
  addr_quartier: string;

  @ManyToOne(() => City, (city) => city.address)
  @JoinColumn({ name: 'addr_city_id' })
  addr_city_id: City;

  @OneToMany(() => Mutu, (mutu) => mutu.address_id)
  mutu: Mutu;
}
