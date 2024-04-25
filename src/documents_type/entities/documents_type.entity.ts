/* eslint-disable prettier/prettier */
import { Mukanda } from 'src/mukanda/entities/mukanda.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DocumentsType {
  @PrimaryGeneratedColumn()
  id_doc_type: number;

  @Column()
  doc_type: string;

  @OneToMany(() => Mukanda, (mukanda) => mukanda.muk_type_id)
  mukanda: Mukanda[];
}
