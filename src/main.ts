import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const REDIS = 1;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: REDIS,
      options: {
        url: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        auth_pass: `${process.env.REDIS_AUTH_PASS}`,
      },
    },
  );
  await app.listen();
}
bootstrap();
