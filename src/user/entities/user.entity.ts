import { ContactEmail } from 'src/contact_email/entities/contact_email.entity';
import { ContactNumb } from 'src/contact_numb/entities/contact_numb.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';
import { Privilege } from 'src/privilege/entities/privilege.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  middlename: string;

  @Column({ unique: true })
  username: string;

  @Column()
  userpassword: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  changed_date: Date;

  @Column()
  verif_date: Date;

  @OneToOne(() => ContactNumb, { cascade: true, eager: true })
  @JoinColumn({ name: 'contact_id' })
  contact_id: ContactNumb;

  @OneToOne(() => ContactEmail, { cascade: true, eager: true })
  @JoinColumn({ name: 'email_id' })
  email_id: ContactEmail;

  @OneToMany(() => Mutu, (mutu) => mutu.user_id)
  mutu: Mutu[];

  @ManyToOne(() => Privilege, (privilege) => privilege.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'privilege_id' })
  @Column({ default: 2 })
  privilege_id: Privilege;
}
