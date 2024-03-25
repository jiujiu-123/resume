import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class UserValidation {
  @IsString({ message: '用户名必须是字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(3, 10,{ message: '用户名长度必须在3到10之间' })
  @Matches(/^[a-zA-Z0-9#$%_-]+$/, {
    message: '用户名只能是字母、数字或者 #、$、%、_、- 这些字符',
  })
  userName: string;

  @IsString({ message: '密码必须是字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 15,{ message: '密码长度必须在6到15之间' })
  userPassword: string;

  public async ValidateThis(skipMissing:boolean = false):Promise<any>{

  }

}
