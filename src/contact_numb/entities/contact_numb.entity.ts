import { Mutu } from 'src/mutu/entities/mutu.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ContactNumb {
  @PrimaryGeneratedColumn()
  id_contact: number;

  @Column({ unique: true })
  numero_ppl: string;

  @Column()
  numero_alt: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  changed_date: Date;

  @Column()
  verify_date: Date;

  @OneToMany(() => Mutu, (mutu) => mutu.contact_number)
  mutu: Mutu[];
}
