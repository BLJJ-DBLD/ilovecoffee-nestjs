import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional() // 表示可选参数
  @IsPositive() // 表示必须是正数
  @Type(() => Number) // 手动确保我们传入的值被解析为 “数字”
  limit: number;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  offset: number;
}
