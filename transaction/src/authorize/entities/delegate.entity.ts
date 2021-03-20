import { Column, Entity, ManyToOne } from "typeorm";
import { OMasterFile } from "../../../shared/o-master-file";
import { Authorize } from "./authorize.entity";

@Entity()
export class Delegate extends OMasterFile {
    @Column()
    ssn: string;
    @Column()
    name: string;
    @Column()
    nationality: string;
    @Column()
    residence: string; 

    @Column({ type: 'bigint' })
    issueDate: number;

    @Column({ type: 'bigint' })
    expireDate: number;

    @ManyToOne(()=>Authorize,(auth)=>auth.delegated,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    authorize: Authorize;

}