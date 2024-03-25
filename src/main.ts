import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {WINSTON_LOGGER_TOKEN} from './winston/winston.module';
import { HttpFilter } from './ErrorEntity/http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局异常过滤器
  app.useGlobalFilters(new HttpFilter());
  // 全局日志记录器
  app.useLogger(app.get(WINSTON_LOGGER_TOKEN))
  await app.listen(3000);
}

bootstrap();
