import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";
import { ApprovalStatus } from "./approval-status.enum";
import { Authorize } from "./authorize-model";
import { AuthorizeApproval } from "./authorize-model.dto";

export enum UserType {
    admin='admin',
    securityEmployee='securityEmployee',
    delegationEmployee='delegationEmployee',
    citizen= 'citizen'
}
export class User {
    @ApiProperty()
	id: number;
	@ApiProperty()
	readonly createAt: Date;
	@ApiProperty()
	readonly updatedAt: Date;
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    mobile : string;
    @ApiProperty()
    @Column({default:null})
    macAddress: string;
    @ApiProperty()
    physicalToken : string;
    @ApiProperty({enum:[UserType.admin,UserType.citizen,UserType.delegationEmployee,UserType.securityEmployee]})
    userType:UserType;
    @ApiProperty()
    isActive: boolean;
}


export class Country {
    @ApiProperty()
	id: number;
    @ApiProperty()
	name: string;
}


export class City {
    @ApiProperty()
	id: number;
    @ApiProperty()
	name: string;
}

export class District {
    @ApiProperty()
	id: number;
    @ApiProperty()
	name: string;
    @ApiProperty()
	postalCode: string;
}


export enum Gender {
    male ='male',
    female ='female'
}

export class Citizen  {
    @ApiProperty()
    firstName:string;
    @ApiProperty()
    secondName: string;
    @ApiProperty()
    thirdName:string;
    @ApiProperty()
    fourthName: string;
    @ApiProperty()
    ssn: string;
    @ApiProperty({type: ()=>Country})
    country:Country;
    @ApiProperty({type: ()=>City})
    city: City;
    @ApiProperty({type: ()=>District})
    district: District;
    street: string;
    @ApiProperty({enum:[Gender.male,Gender.female]})
    gender: Gender;
    @ApiProperty()
    motherName: string;
    @ApiProperty()
    mobile: string;
    @ApiProperty()
    issueDate: number;
    @ApiProperty()
    expireDate: number;
}
export enum PrivacyStatus {
    private = 'private',
    public = 'public'
}

export class AuthorizationType  {
    @ApiProperty()
    name: string;
    @ApiProperty({ default: false })
    needApproval: boolean
    @ApiProperty({ enum: [PrivacyStatus.private, PrivacyStatus.public] })
    privacyStatus: PrivacyStatus

}


export class AuthorizationForm  {
    @ApiProperty( { type: () => AuthorizationType })
    type: AuthorizationType;
    @ApiProperty()
    text: string;
}

export class Delegate {
    @ApiProperty()
    ssn: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    nationality: string;
    @ApiProperty()
    residence: string; 

    @ApiProperty()
    issueDate: number;

    @ApiProperty()
    expireDate: number;

    @ApiProperty({type: ()=>Authorize})
    authorize: Authorize;

}
