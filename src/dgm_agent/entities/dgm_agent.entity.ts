import { Mukanda } from 'src/mukanda/entities/mukanda.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DgmAgent {
  @PrimaryGeneratedColumn()
  id_agent: number;

  @Column()
  name_agent: string;

  @OneToMany(() => Mukanda, (mukanda) => mukanda.muk_verif_dgm_id)
  mukanda: Mukanda[];
}
