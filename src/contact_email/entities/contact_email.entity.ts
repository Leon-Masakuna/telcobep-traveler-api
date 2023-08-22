import { Mutu } from 'src/mutu/entities/mutu.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactEmail {
  @PrimaryGeneratedColumn()
  id_email: number;

  @Column()
  email_ppl: string;

  @Column()
  email_alt: string;

  @Column()
  verify_date: Date;

  @Column()
  changed_date: Date;

  @OneToMany(() => Mutu, (mutu) => mutu.contact_email)
  mutu: Mutu[];
}
