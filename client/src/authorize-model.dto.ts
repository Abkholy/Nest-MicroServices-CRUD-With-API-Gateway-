import { ApiProperty } from "@nestjs/swagger";
import { ApprovalStatus } from "./approval-status.enum";
import { Authorize } from "./authorize-model";
import { Delegate } from "./model.dto";

export class AuthorizeApproval {

    @ApiProperty( { type: () => Delegate })
    delegated: Delegate;

    @ApiProperty({ type: () => Authorize })
    authorize: Authorize;

    @ApiProperty({  enum: [ApprovalStatus.approved, ApprovalStatus.pending], default: ApprovalStatus.pending })
    approval: ApprovalStatus;

    @ApiProperty()
    valueDate: number;

    @ApiProperty()
    comment: string;

}
