import { Column, Entity } from "typeorm";
import { OMasterFile } from "../../../shared/o-master-file";

@Entity()
export class Country extends OMasterFile{
    @Column()
    name:string
}
