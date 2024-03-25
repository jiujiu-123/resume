import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonResume } from '../../Entity/MySql/CommonResume.Entity';
import { UserEntity } from '../../Entity/MySql/User.Entity';

const mySqlDB = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'resume',
  // 表实体,用于生成表
  entities: [UserEntity,CommonResume],
  synchronize: true,
});
export default mySqlDB;
