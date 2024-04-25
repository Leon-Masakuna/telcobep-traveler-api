/* eslint-disable prettier/prettier */
import { Mobembo } from 'src/mobembo/entities/mobembo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AirlineCompany {
  @PrimaryGeneratedColumn()
  id_company: number;

  @Column()
  name: string;

  @Column({ unique: true })
  code_IATA: string;

  @OneToMany(() => Mobembo, (mobembo) => mobembo.company_id)
  mobembo: Mobembo[];
}
