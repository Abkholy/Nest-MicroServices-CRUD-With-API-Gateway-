import { ApiProperty } from "@nestjs/swagger";

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
    @ApiProperty()
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