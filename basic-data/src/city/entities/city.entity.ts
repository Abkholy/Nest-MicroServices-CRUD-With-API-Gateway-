import { Column, Entity } from "typeorm";
import { OMasterFile } from "../../../shared/o-master-file";

@Entity()
export class City extends OMasterFile  {
    @Column()
    name: string
}
