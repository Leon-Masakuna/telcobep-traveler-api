/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { DgmAgent } from 'src/dgm_agent/entities/dgm_agent.entity';
import { DocumentsType } from 'src/documents_type/entities/documents_type.entity';
import { Mboka } from 'src/mboka/entities/mboka.entity';
import { Mutu } from 'src/mutu/entities/mutu.entity';

export class CreateMukandaDto {
  @IsNumber()
  @IsNotEmpty()
  public muk_number: number;

  @IsString()
  @IsOptional()
  public muk_deliver_date: string;

  @IsString()
  @IsOptional()
  public muk_expirer_date: string;

  @IsString()
  @IsOptional()
  public muk_authority: string;

  @IsString()
  @IsOptional()
  public muk_pic_ref: string;

  @IsOptional()
  @Type(() => Number)
  public muk_type_id: DocumentsType;

  @IsOptional()
  @Type(() => Number)
  public muk_mboka_id: Mboka;

  @IsOptional()
  @Type(() => Number)
  public muk_verif_dgm_id: DgmAgent;

  @IsOptional()
  @Type(() => Number)
  public mutu_id: Mutu;
}
