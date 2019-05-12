import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Swagger from './swagger';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  new Swagger(app).init();

  await app.listen(config.port);
}

bootstrap();
