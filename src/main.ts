import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('NestJsEcommerceApi')
    .setDescription('API Details')
    .setVersion('1.0.0')
    .addTag('APIs')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000, () => {
    console.log('server is listening to localhost://3000');
  });
}
bootstrap();
