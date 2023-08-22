import { Adresse } from 'src/adresse/entities/adresse.entity';
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
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
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
  date_of_birth: Date;

  @Column()
  created_date: Date;

  @Column()
  changed_date: Date;

  @ManyToOne(() => User, (user) => user.mutu)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @ManyToOne(() => Adresse, (address) => address.mutu)
  @JoinColumn({ name: 'address_id' })
  address_id: Adresse;

  @ManyToOne(() => ContactEmail, (email) => email.mutu)
  @JoinColumn({ name: 'contact_email' })
  contact_email: ContactEmail;

  @ManyToOne(() => ContactNumb, (number) => number.mutu)
  @JoinColumn({ name: 'contact_number' })
  contact_number: ContactNumb;

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
