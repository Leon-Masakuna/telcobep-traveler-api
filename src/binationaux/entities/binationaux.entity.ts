import { Etranger } from 'src/etranger/entities/etranger.entity';
import { Nationaux } from 'src/nationaux/entities/nationaux.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Binationaux {
  @PrimaryGeneratedColumn()
  id_binat: number;

  @ManyToOne(() => Nationaux, (national) => national.binational)
  @JoinColumn({ name: 'id_drc' })
  id_drc: Nationaux;

  @ManyToOne(() => Etranger, (foreign) => foreign.binational)
  @JoinColumn({ name: 'id_foreign' })
  id_foreign: Etranger;
}
