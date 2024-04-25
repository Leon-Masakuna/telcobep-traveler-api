/* eslint-disable prettier/prettier */
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
export class ContactEmail {
  @PrimaryGeneratedColumn()
  id_email: number;

  @Column()
  email_ppl: string;

  @Column()
  email_alt: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  changed_date: Date;

  @Column()
  verify_date: Date;

  @OneToMany(() => Mutu, (mutu) => mutu.contact_email)
  mutu: Mutu[];
}
