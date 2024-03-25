import { Body, Controller, Inject, Post, Res, UseGuards, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { ResponseHelperEntity } from "../ErrorEntity/ResponseHelper.Entity";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import { LoginGuard } from "../login.guard";
import { UserValidation } from "../Dto/UserValidation";
import { WINSTON_LOGGER_TOKEN } from "../winston/winston.module";

@Controller("user")
export class UserController {
  @Inject(JwtService)
  private readonly jwtService: JwtService;
  @Inject(WINSTON_LOGGER_TOKEN)
  private readonly logger: any;

  constructor(private readonly UserService: UserService) {
  }

  @Post("login")
  @UseGuards(LoginGuard)
  async userLogin(
    @Body(ValidationPipe) user: UserValidation,
    @Res({ passthrough: true }) res: Response
  ) {
    this.logger.log("Post/user/login", UserController.name);
    // 登录逻辑
    // 注册逻辑
    try {
      const data = this.UserService.userRegisterService(user);
      const token = await this.jwtService.signAsync({ user: { name: "1" } });
      res.header("Authorization", "Bearer " + token);
      return ResponseHelperEntity.sendData("登录成功", data);
    } catch (err: any) {
      return ResponseHelperEntity.sendError(err.message);
    }
  }

  // @Res({ passthrough: true }) 装饰器与 @Res() 的区别在于，@Res() 会将 Response 对象转换为一个新的对象，以便在控制器函数中直接使用。而 passthrough: true 则表示直接将 Response 对象传递给控制器函数，无需转换。
  @Post("register")
  async userRegister(
    @Body() body: UserValidation,
    @Res({ passthrough: true }) res: Response
  ) {
    this.logger.log(UserController.name);
    // 注册逻辑
    try {
      const data = this.UserService.userRegisterService(body);
      const token = await this.jwtService.signAsync({ user: { name: "1" } });
      res.header("Authorization", "Bearer " + token);
      return ResponseHelperEntity.sendData("注册成功", data);
    } catch (err: any) {
      return ResponseHelperEntity.sendError(err.message);
    }
  }
}
