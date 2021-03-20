import { ArgumentsHost, Catch, HttpStatus, Logger, ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, HttpAdapterHost, NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AllExceptionsFilter } from '../shared/exception-filter';

import { AppModule } from './app.module';




const logger  = new Logger('AUTH MICROSERVICE');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877,
    }, 
  });
	app.useGlobalFilters(new AllExceptionsFilter());
  app.listen(() => logger.log('Auth Microservice is listening...'));
}
bootstrap();
