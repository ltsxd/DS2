import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'genero'})
export class GeneroEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, length: 500})
    descricao: string;

}