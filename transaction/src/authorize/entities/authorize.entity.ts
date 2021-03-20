import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { OMasterFile } from "../../../shared/o-master-file";
import { AuthorizationForm } from "../../authorization-form/entities/authorization-form.entity";
import { AuthorizationType } from "../../authorization-type/entities/authorization-type.entity";
import { AuthorizeApproval } from "../../authorize-approval/entities/authorize-approval.entity";
import { ApprovalStatus } from "../approval-status.enum";
import { Delegate } from "./delegate.entity";



@Entity()
export class Authorize extends OMasterFile {
    @ManyToOne(() => AuthorizationType, { eager: true })
    type: AuthorizationType;

    @ManyToOne(() => AuthorizationForm, { eager: true })
    form: AuthorizationForm;

    @ManyToOne(() => Delegate, { eager: true, cascade: true, })
    delegator: Delegate;

    @OneToMany(() => Delegate,(d)=>d.authorize, { eager: true, cascade: true, })
    delegated: Delegate[];

    @Column({type:'simple-enum',enum:[ApprovalStatus.approved,ApprovalStatus.pending,ApprovalStatus.refused],default:ApprovalStatus.pending})
    approvalStatus: ApprovalStatus;

    @Column({type:'bigint'})
    valueDate: number;

    @OneToMany(() => AuthorizeApproval,(app)=>app.authorize, { eager: false })
    approvals: AuthorizeApproval[]

    @Column({nullable:true})
    additionalText: string;
    
}
