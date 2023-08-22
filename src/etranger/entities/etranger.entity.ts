import { Binationaux } from 'src/binationaux/entities/binationaux.entity';
import { Mboka } from 'src/mboka/entities/mboka.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Etranger {
  @PrimaryGeneratedColumn()
  id_foreign: number;

  @ManyToOne(() => Mutu, (mutu) => mutu.foreign)
  @JoinColumn({ name: 'id_mutu' })
  id_mutu: Mutu;

  @ManyToOne(() => Mboka, (mboka) => mboka.first_country)
  @JoinColumn({ name: 'id_first_country' })
  id_first_country: Mboka;

  @ManyToOne(() => Mboka, (mboka) => mboka.second_country)
  @JoinColumn({ name: 'id_second_country' })
  id_second_country: Mboka;

  @OneToMany(() => Binationaux, (binational) => binational.id_foreign)
  binational: Binationaux[];
}
