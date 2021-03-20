import { ApiProperty } from "@nestjs/swagger"

export  class refreshToken{
    @ApiProperty({ description: 'Old Token', required: true })
    oldtoken:string
    @ApiProperty({ description: 'Email', required: true })
    email:string
}