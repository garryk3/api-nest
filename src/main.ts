import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Swagger from './swagger';
import config from './config';

async function bootstrap() {
  const corsConfig = {
    origin: 'http://localhost:8080'
  };
  const app = await NestFactory.create(AppModule, { cors: corsConfig });

  new Swagger(app).init();

  await app.listen(config.port);
}

bootstrap();
