import { LoggerService } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { createLogger, Logger } from 'winston';

export class MyLogger implements LoggerService {
  private logger: Logger;

  constructor(options: Object) {
    this.logger = createLogger(options);
  }

  log(message: string, context: string) {
    const date = Date.now();
    const time = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    this.logger.log('info', message, { context, time });
  }

  error(message: string, context: string) {
    const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    this.logger.log('info', message, { context, time });
  }

  warn(message: string, context: string) {
    const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    this.logger.log('info', message, { context, time });
  }
}
