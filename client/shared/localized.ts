import { IsString } from 'class-validator';
import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class Localized {
	@Column({ default: "" })
	@ApiProperty()
	@IsString()
	ar: string;
	@ApiProperty()
	@Column({ default: "" })
	en: string;

	constructor() {
		if (this.ar === null && this.en !== null) this.ar = this.en;

		if (this.en === null && this.ar !== null) this.en = this.ar;
	}
}
