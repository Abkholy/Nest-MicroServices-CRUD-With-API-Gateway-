import { Column, Entity, ManyToOne } from "typeorm";
import { OMasterFile } from "../../../shared/o-master-file";
import { AuthorizationType } from "../../authorization-type/entities/authorization-type.entity";

@Entity()
export class AuthorizationForm extends OMasterFile {
    @ManyToOne(() => AuthorizationType, { eager: true })
    type: AuthorizationType;
    @Column()
    text: string;
}
