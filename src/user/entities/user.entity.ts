import { Mutu } from 'src/mutu/entities/mutu.entity';
import { Privilege } from 'src/privilege/entities/privilege.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
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

  @OneToMany(() => Mutu, (mutu) => mutu.user_id)
  mutu: Mutu[];

  @ManyToOne(() => Privilege, (privilege) => privilege.user)
  @JoinColumn({ name: 'privilege_id' })
  @Column({ default: 1 })
  privilege_id: Privilege;
}
