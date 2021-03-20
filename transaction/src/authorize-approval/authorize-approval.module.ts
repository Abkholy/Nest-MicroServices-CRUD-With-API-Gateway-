import { Module } from '@nestjs/common';
import { AuthorizeApprovalService } from './authorize-approval.service';
import { AuthorizeApprovalController } from './authorize-approval.controller';
import { AuthorizeApproval } from './entities/authorize-approval.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorizeApproval])],
  controllers: [AuthorizeApprovalController],
  providers: [AuthorizeApprovalService]
})
export class AuthorizeApprovalModule {}
