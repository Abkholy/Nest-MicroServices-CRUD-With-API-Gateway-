import { PartialType } from '@nestjs/swagger';
import { CreateAuthorizeApprovalDto } from './create-authorize-approval.dto';

export class UpdateAuthorizeApprovalDto extends PartialType(CreateAuthorizeApprovalDto) {}
