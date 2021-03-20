import { Column, Entity, ManyToOne } from "typeorm";
import { OMasterFile } from "../../../shared/o-master-file";
import { ApprovalStatus } from "../../authorize/approval-status.enum";
import { Authorize } from "../../authorize/entities/authorize.entity";
import { Delegate } from "../../authorize/entities/delegate.entity";

@Entity()
export class AuthorizeApproval extends OMasterFile{

    @ManyToOne(() => Delegate, { eager: true })
    delegated: Delegate;

    @ManyToOne(() => Authorize,(auth)=>auth.approvals, { eager: true })
    authorize: Authorize;

    @Column({ type: 'simple-enum', enum: [ApprovalStatus.approved, ApprovalStatus.pending], default: ApprovalStatus.pending })
    approval: ApprovalStatus;

    @Column({type:'bigint'})
    valueDate: number;

    @Column({ nullable: true })
    comment: string;

}
