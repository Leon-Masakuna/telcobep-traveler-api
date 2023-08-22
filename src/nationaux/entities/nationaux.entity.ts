import { Binationaux } from 'src/binationaux/entities/binationaux.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Nationaux {
  @PrimaryGeneratedColumn()
  id_nat: number;

  @ManyToOne(() => Mutu, (mutu) => mutu.national)
  @JoinColumn({ name: 'id_mutu' })
  id_mutu: Mutu;

  @OneToMany(() => Binationaux, (binational) => binational.id_drc)
  binational: Binationaux[];
}
