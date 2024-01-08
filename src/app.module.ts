import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true, // 有助于自动加载模块，而不用指定实体数据
      synchronize: true, // 确保 TypeORM 实体会同步数据库
    }),
    CoffeeRatingModule,
    DatabaseModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.required(),
        DATABASE_PORT: Joi.number().default(5432),
      }),
      // envFilePath: ['.env' /* 默认 */, '.env.development.local'], // 指定环境变量文件
      // ignoreEnvFile: true,// 忽略环境变量文件
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
