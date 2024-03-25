import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import mySqlDB from './DB/MySQL';
import { MongoDB } from './DB/MongoDB';
import { JwtModuleOption } from './utils/Jwt';
import { WinstonModule } from './winston/winston.module';
import { winstonOptions } from './winston/winstonOptions';



@Module({
  imports: [mySqlDB, MongoDB, JwtModuleOption, UserModule, WinstonModule.forRoot(winstonOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
