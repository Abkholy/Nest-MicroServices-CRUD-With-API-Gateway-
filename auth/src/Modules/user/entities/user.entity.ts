import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { OMasterFile } from "../../../../shared/o-master-file";
export enum UserType {
    admin='admin',
    securityEmployee='securityEmployee',
    delegationEmployee='delegationEmployee',
    citizen= 'citizen'
}
@Entity()
export class User extends OMasterFile {
    @Column()
    name: string;
    @Column({unique:true})
    email: string;
    @Column()
    password: string;
    @Column()
    mobile : string;
    @Column({nullable:true})
    macAddress: string;
    @Column({nullable:true})
    physicalToken : string;
    @Column({type:'simple-enum',enum:[UserType.admin,UserType.citizen,UserType.delegationEmployee,UserType.securityEmployee],default:UserType.citizen})
    userType:UserType

    @Column({default:true})
    isActive: boolean;
}
