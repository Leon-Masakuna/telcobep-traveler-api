import { Privilege } from 'src/privilege/entities/privilege.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id_admin: number;

  @Column()
  admin_name: string;

  @OneToMany(() => Privilege, (privilege) => privilege.id_privilege)
  privilege: Privilege[];
}
