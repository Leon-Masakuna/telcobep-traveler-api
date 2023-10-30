import { Admins } from 'src/admin/entities/admin.entity';
import { Adresse } from 'src/adresse/entities/adresse.entity';
import { City } from 'src/city/entities/city.entity';
import { ContactEmail } from 'src/contact_email/entities/contact_email.entity';
import { ContactNumb } from 'src/contact_numb/entities/contact_numb.entity';
import { Etranger } from 'src/etranger/entities/etranger.entity';
import { Mobembo } from 'src/mobembo/entities/mobembo.entity';
import { Mukanda } from 'src/mukanda/entities/mukanda.entity';
import { Nationaux } from 'src/nationaux/entities/nationaux.entity';
import { User } from 'src/user/entities/user.entity';
import { Visa } from 'src/visas/entities/visa.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Mutu {
  @PrimaryGeneratedColumn()
  id_mutu: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  middlename: string;

  @Column()
  gender: string;

  @Column()
  date_of_birth: Date;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  changed_date: Date;

  @ManyToOne(() => User, (user) => user.mutu, { cascade: true, eager: true })
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @ManyToOne(() => City, (city) => city.place_of_birth, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'place_of_birth' })
  place_of_birth: City;

  @ManyToOne(() => Adresse, (address) => address.mutu, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'address_id' })
  address_id: Adresse;

  @ManyToOne(() => ContactEmail, (email) => email.mutu, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'contact_email' })
  contact_email: ContactEmail;

  @ManyToOne(() => ContactNumb, (number) => number.mutu, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'contact_number' })
  contact_number: ContactNumb;

  @ManyToOne(() => Admins, (admin) => admin.mutu, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'id_changer' })
  id_changer: Admins;

  @OneToMany(() => Mobembo, (mobembo) => mobembo.mutu_id)
  mobembo: Mobembo[];

  @OneToMany(() => Mukanda, (mukanda) => mukanda.mutu_id)
  mukanda: Mukanda[];

  @OneToMany(() => Visa, (visa) => visa.visa_traveler_id)
  visa: Visa[];

  @OneToMany(() => Nationaux, (national) => national.id_mutu)
  national: Nationaux[];

  @OneToMany(() => Etranger, (foreign) => foreign.id_mutu)
  foreign: Etranger[];
}
