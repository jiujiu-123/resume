import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 *  用户表
 */
@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: String;
  @Column({ comment: '用户名',length:10 })
  userName: string;
  @Column({ comment: '密码' })
  userPassword: string;

  @Column({comment:'简历id'})
  resumeId: string;
  @Column({comment:'个人介绍',length:200 })
  personalInfo:string
  @Column({comment:'头像地址'})
  avatarUrl:String
  @CreateDateColumn({
    comment:"用户创建账号时间"
  })
  createdAt: Date;
}

