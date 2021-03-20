import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { BaseRpcExceptionFilter, RpcException } from "@nestjs/microservices";

@Catch()
export class AllExceptionsFilter extends BaseRpcExceptionFilter{
    catch(exception, host){
        return super.catch(exception, host);
        }
}
