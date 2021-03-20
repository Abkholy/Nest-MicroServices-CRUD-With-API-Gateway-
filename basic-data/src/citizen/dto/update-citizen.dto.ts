import { PartialType } from '@nestjs/swagger';
import { CreateCitizenDto } from './create-citizen.dto';

export class UpdateCitizenDto extends PartialType(CreateCitizenDto) {}
