import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configServices } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configurationService = app.get(configServices);
  const port = configurationService.port;
  await app.listen(port);
}
bootstrap();
