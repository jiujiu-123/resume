import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entity/MySql/User.Entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userEntity: Repository<UserEntity>) {
  }

  /*
  * 用户注册
  * @param data 用户信息
  *
  */
  public userRegisterService(data:any) {

    return {
      data
    }

  }
}
