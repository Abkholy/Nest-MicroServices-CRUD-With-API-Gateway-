import { ApiProperty } from '@nestjs/swagger';
import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

export abstract class OMasterFile {

	@ApiProperty()
	@PrimaryGeneratedColumn()
	id: number;
  
	@ApiProperty()
	@CreateDateColumn()
	readonly createAt: Date;

	@ApiProperty()
	@UpdateDateColumn()
	readonly updatedAt: Date;
}
