import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  findAll() {
    return this.coffeeRepository.find({
      relations: ['flavors'],
    });
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne({
      where: {
        id: +id,
      },
      relations: ['flavors'],
    });
    if (!coffee) {
      // return new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
      return new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!existingCoffee) {
      // update the existing entity
      return new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepository.save(existingCoffee);
  }

  async remove(id: string) {
    const coffee = await this.coffeeRepository.findOne({
      where: {
        id: +id,
      },
    });
    return this.coffeeRepository.remove(coffee);
  }
}
