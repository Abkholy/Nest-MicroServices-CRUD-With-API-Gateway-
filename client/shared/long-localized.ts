import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

export class LongLocalized {
    @Column({ type: 'longtext' })
    @ApiProperty()
    ar: string;
    @ApiProperty()
    @Column({ type: 'longtext' })
    en: string;

}