import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { Config } from 'src/lib/config';

async function bootstrap() {
  const PORT = Config.server.port;

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(PORT);

  Logger.log(`Now running on port ${PORT} (probably inside Docker)`);
}
bootstrap();
