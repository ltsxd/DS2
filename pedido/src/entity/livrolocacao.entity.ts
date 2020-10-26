import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LivroEntity } from "./livro.entity";
import { LocacaoEntity } from "./locacao.entity";

@Entity({name: 'livrolocacao'})
export class LivroLocacaoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: 'date'})
    dtdevolucao: Date;

    @Column({nullable: false, type: 'date'})
    dtdevolvido: Date;

    @ManyToOne(type => LivroEntity)
    livro: LivroEntity;

    @ManyToOne(type => LocacaoEntity)
    locacao: LocacaoEntity;
}