import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClienteEntity } from "./cliente.entity";

@Entity({name: 'locacao'})
export class LocacaoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: 'double'})
    nrlocacao: number;

    @Column({nullable: false, type: 'date'})
    dtlocacao: Date;

    @ManyToOne( type => ClienteEntity, {eager: true, nullable:false})
    cliente: ClienteEntity;

}