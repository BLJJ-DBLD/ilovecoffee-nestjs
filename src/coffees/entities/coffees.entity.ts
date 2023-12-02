import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() // 设置为主键并自增
  id: number;

  @Column() // 啥没传时表示必填入
  name: string;

  @Column()
  brand: string;

  // JoinTable 因为 Coffee 是作为主表存在的
  @JoinTable() // 有助于指定关系的 Owner 端
  // 风味与咖啡的关系是 多对多：@ManyToMany()
  // 第一个参数：确定关系的类型是什么；这只是一个函数，它返回对“相关”实体的引用
  // 第二个参数：传入一个箭头函数，该函数返回相关实体，并指定需要选择关联的属性
  // 第三个参数：配置关系，cascade 表示级联关系
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true,
  })
  flavors: Flavor[];
}
