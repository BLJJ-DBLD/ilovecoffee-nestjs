import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    console.log(typeof process.env.DATABASE_PASSWORD);
  }
  getHello(): string {
    return 'Hello Nest!';
  }
}
