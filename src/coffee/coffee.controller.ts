import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll() {
    return 'this is all coffee';
  }
  @Get('flavors')
  findAll_2() {
    return 'this is all coffee';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this is one #[${id}] coffee`;
  }
  @Post('create')
  create(@Body('name') name: string) {
    return name;
  }
}
