import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from '../shared/exception-filter';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(
		AppModule,
	);
    app.setGlobalPrefix('v1');
	app.enableCors();
	const { httpAdapter } = app.get(HttpAdapterHost);
	app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

	app.useGlobalPipes(
		new ValidationPipe({
			errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
		}),
	);
	app.useStaticAssets(join(__dirname, '..', 'public'));
	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.setViewEngine('hbs');


	const options = new DocumentBuilder()
		.setTitle('Graduation Project Endpoints')
		.setDescription('Graduation Project EndPoints Docs')
		.setVersion('1.0')
		.setContact('override', 'https://overrideeg.com', 'info@overrideeg.com')
		.addBearerAuth()
		.setTermsOfService('https://overrideeg.com/privacy-policy.html')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);


	
  await app.listen(process.env.PORT || 80, () => {
		console.log('OPASS Back End Started at port', process.env.PORT || 80);
	});

	
}
bootstrap();

