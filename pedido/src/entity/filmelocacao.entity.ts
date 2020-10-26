import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FilmeEntity } from "./filme.entity";
import { LocacaoEntity } from "./locacao.entity";

@Entity({name: 'filmelocacao'})
export class FilmeLocacaoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: 'date'})
    dtdevolucao: Date;

    @Column({nullable: false, type: 'date'})
    dtdevolvido: Date;

    @ManyToOne(type => FilmeEntity)
    filme: FilmeEntity;

    @ManyToOne(type => LocacaoEntity)
    locacao: LocacaoEntity;

}