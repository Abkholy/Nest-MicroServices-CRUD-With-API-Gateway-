import { IsString, Min, IsEmail, MinLength, MaxLength, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AuthDTO {
    @ApiProperty({ description: 'email of user need login', required: true })
    email: string;
    @ApiProperty()
    oldPassword: string;
    @ApiProperty()
    password: string;
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
