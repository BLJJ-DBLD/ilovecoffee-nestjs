import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true }) // each?: 指定验证值是否为数组，并且必须验证其每个子项
  readonly flavors: string[];
}
