import { NestFactory } from '@nestjs/core';
import {Logger} from "@nestjs/common"
import { AppModule } from './app.module';
import config from './app/config';

async function bootstrap() {
  const port = config.app.port;
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  await app.listen(port, () =>
    Logger.log(`Server is running 🚀  on port http://localhost:${port}`),
  );
}
bootstrap();
