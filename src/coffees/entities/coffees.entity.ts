import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() // 设置为主键并自增
  id: number;

  @Column() // 啥没传时表示必填入
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true }) // TypeORM 会清楚该字段保存为 JSON，并且允许为 null
  flavors: string[];
}
