import { Column, Entity, ManyToOne } from "typeorm";
import { OMasterFile } from "../../../shared/o-master-file";
import { City } from "../../city/entities/city.entity";
import { Country } from "../../country/entities/country.entity";
import { District } from "../../district/entities/district.entity";

export enum Gender {
    male ='male',
    female ='female'
}

@Entity()
export class Citizen extends OMasterFile {
    @Column()
    firstName:string;
    @Column()
    secondName: string;
    @Column()
    thirdName:string;
    @Column()
    fourthName: string;
    @Column({unique:true})
    ssn: string;
    @ManyToOne(()=>Country,{eager:true})
    country:Country;
    @ManyToOne(()=>City,{eager:true})
    city: City;
    @ManyToOne(()=>District,{eager:true})
    district: District;
    @Column({default: ''})
    street: string;
    @Column({type:'simple-enum',enum:[Gender.male,Gender.female]})
    gender: Gender;
    @Column()
    motherName: string;
    @Column()
    mobile: string;
    @Column({type:'bigint'})
    issueDate: number;
    @Column({type:'bigint'})
    expireDate: number;
}
