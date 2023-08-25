import { Mutu } from 'src/mutu/entities/mutu.entity';
import { Privilege } from 'src/privilege/entities/privilege.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admins {
  @PrimaryGeneratedColumn()
  id_admin: number;

  @Column()
  admin_name: string;

  @OneToMany(() => Privilege, (privilege) => privilege.id_privilege)
  privilege: Privilege[];

  @OneToMany(() => Mutu, (mutu) => mutu.id_mutu)
  mutu: Mutu[];
}
