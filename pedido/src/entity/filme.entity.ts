import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GeneroEntity } from "./genero.entity";

@Entity({name: 'filme'})
export class FilmeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @ManyToOne(type => GeneroEntity)
    genero:GeneroEntity;
}