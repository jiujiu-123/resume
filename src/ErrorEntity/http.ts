import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response, Request } from 'express';

/*
  * 自定义全局异常过滤器
 */
export class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let error: null | any = null;
    try {
      error = exception.getResponse()?.valueOf()["message"]
    }catch (e){
      error = exception.message || "内部服务器错误"
    }

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    response.status(statusCode).json({
      statusCode,
      success: false,
      message: error,
      path: request.url,
    });
  }
}
