import { Column, Entity } from "typeorm";
import { OMasterFile } from "../../../shared/o-master-file";


export enum PrivacyStatus {
    private = 'private',
    public = 'public'
}
@Entity()
export class AuthorizationType extends OMasterFile {
    @Column()
    name: string;
    @Column({ default: false })
    needApproval: boolean
    @Column({ type: 'simple-enum', enum: [PrivacyStatus.private, PrivacyStatus.public] })
    privacyStatus: PrivacyStatus

}
