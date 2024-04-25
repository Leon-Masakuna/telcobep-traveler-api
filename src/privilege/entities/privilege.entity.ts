/* eslint-disable prettier/prettier */
import { Admins } from 'src/admin/entities/admin.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Privilege {
  @PrimaryGeneratedColumn()
  id_privilege: number;

  @Column()
  privilege_name: string;

  @ManyToOne(() => Admins, (admin) => admin.privilege, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'admin_id' })
  admin_id: Admins;

  @OneToMany(() => User, (user) => user.privilege_id)
  user: User[];
}
