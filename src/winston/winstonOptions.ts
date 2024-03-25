import { format, transports } from 'winston';
import * as chalk from 'chalk';

export const winstonOptions = {
  level: 'debug',
  transports: [
    new transports.Console({
    format: format.combine(
      format.colorize(),
      format.printf(({context, level, message, time}) => {
        const appStr = chalk.green(`[NEST]`);
        const contextStr = chalk.yellow(`[${context}]`);

        return `${appStr} ${time} ${level} ${contextStr} ${message} `;
      })
    ),
  }),
    new transports.File({
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
      filename: '111.log',
      dirname: 'log'
    })
]
}