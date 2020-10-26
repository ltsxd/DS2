import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cliente'})
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: false, length: 60})
    email:string;

    @Column({nullable: false, length: 60})
    endereco:string;

    @Column({nullable: false, length: 50})
    cpf: string;

}