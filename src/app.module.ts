import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
