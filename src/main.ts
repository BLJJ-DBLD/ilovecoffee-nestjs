import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 设置白名单，忽略不在白名单中的字段
      forbidNonWhitelisted: true, // 设置不允许非白名单字段响应数据
      transform: true, // 设置自动转换数据，会轻微的影响性能
    }),
  );
  await app.listen(3000);
}
bootstrap();
