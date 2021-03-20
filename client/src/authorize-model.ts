import { ApiProperty } from "@nestjs/swagger";
import { ApprovalStatus } from "./approval-status.enum";
import { AuthorizeApproval } from "./authorize-model.dto";
import { AuthorizationType, AuthorizationForm, Delegate } from "./model.dto";

export class Authorize  {
    @ApiProperty({type:() => AuthorizationType})
    type: AuthorizationType;

    @ApiProperty({type: () => AuthorizationForm})
    form: AuthorizationForm;

    @ApiProperty({type: () => Delegate})
    delegator: Delegate;

    @ApiProperty({type: () => Delegate,isArray:true})
    delegated: Delegate[];

    @ApiProperty({type:'simple-enum',enum:[ApprovalStatus.approved,ApprovalStatus.pending,ApprovalStatus.refused],default:ApprovalStatus.pending})
    approvalStatus: ApprovalStatus;

    @ApiProperty({type:'bigint'})
    valueDate: number;

    @ApiProperty({type:() => AuthorizeApproval,isArray:true})
    approvals: AuthorizeApproval[]

    @ApiProperty({nullable:true})
    additionalText: string;
    
}
