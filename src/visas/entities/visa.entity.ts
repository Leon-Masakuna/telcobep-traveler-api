import { Mboka } from 'src/mboka/entities/mboka.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Visa {
  @PrimaryGeneratedColumn()
  id_visa: number;

  @Column()
  visa_type: string;

  @Column()
  visa_deliver_date: Date;

  @Column()
  visa_expirer_date: Date;

  @Column()
  visa_authority: string;

  @Column()
  visa_pic_ref: string;

  @ManyToOne(() => Mutu, (mutu) => mutu.visa)
  @JoinColumn({ name: 'visa_traveler_id' })
  visa_traveler_id: Mutu;

  @ManyToOne(() => Mboka, (mboka) => mboka.visa)
  @JoinColumn({ name: 'visa_country_id' })
  visa_country_id: Mutu;
}
