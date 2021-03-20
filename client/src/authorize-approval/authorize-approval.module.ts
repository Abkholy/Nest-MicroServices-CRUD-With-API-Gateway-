import { Module } from '@nestjs/common';
import { AuthorizeApprovalService } from './authorize-approval.service';
import { AuthorizeApprovalController } from './authorize-approval.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TRANSACTION_SERVICE', transport: Transport.TCP, options: {
          host: '127.0.0.1',
          port: 8879,
        }
      },
    ]),
  ],
  controllers: [AuthorizeApprovalController],
  providers: [AuthorizeApprovalService]
})
export class AuthorizeApprovalModule { }
