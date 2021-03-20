import { Column, Entity } from "typeorm";
import { OMasterFile } from "../../../shared/o-master-file";

@Entity()
export class District extends OMasterFile{
    @Column()
    name:string
    @Column({nullable:true})
    postalCode:string

}
