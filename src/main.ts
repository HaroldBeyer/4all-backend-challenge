import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Movies store")
    .setDescription("Description for the NodeJs backend challenge")
    .setVersion('1.0')
    .addTag("movies")
    .addTag("users")
    .addTag("auth")
    .addBearerAuth({
      type: 'apiKey', scheme: 'bearer', bearerFormat: 'JWT',
    })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
