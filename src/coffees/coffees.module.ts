import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffees.entity';
import { Flavors } from './entities/flavors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavors])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
