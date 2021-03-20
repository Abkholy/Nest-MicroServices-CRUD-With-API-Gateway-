import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AllExceptionsFilter } from '../shared/exception-filter';
import { AppModule } from './app.module';


const logger  = new Logger('BASIC DATA MICROSERVICE');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8878,
    }, 
  });
	app.useGlobalFilters(new AllExceptionsFilter());
  app.listen(() => logger.log('BASIC DATA Microservice is listening...'));
}
bootstrap();