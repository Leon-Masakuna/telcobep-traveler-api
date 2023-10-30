import { DgmAgent } from 'src/dgm_agent/entities/dgm_agent.entity';
import { DocumentsType } from 'src/documents_type/entities/documents_type.entity';
import { Mboka } from 'src/mboka/entities/mboka.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Mukanda {
  @PrimaryGeneratedColumn()
  id_muk: number;

  @Column({ unique: true })
  muk_number: number;

  @Column()
  muk_deliver_date: Date;

  @Column()
  muk_expirer_date: Date;

  @Column()
  muk_authority: string;

  @Column()
  muk_pic_ref: string;

  @ManyToOne(() => DocumentsType, (document) => document.mukanda, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'muk_type_id' })
  muk_type_id: DocumentsType;

  @ManyToOne(() => Mboka, (mboka) => mboka.mukanda, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'muk_mboka_id' })
  muk_mboka_id: Mboka;

  @ManyToOne(() => Mutu, (mutu) => mutu.mukanda, { cascade: true, eager: true })
  @JoinColumn({ name: 'mutu_id' })
  mutu_id: Mutu;

  @ManyToOne(() => DgmAgent, (agent) => agent.mukanda, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'muk_verif_dgm_id' })
  muk_verif_dgm_id: DgmAgent;
}
