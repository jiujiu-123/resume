import { JwtModule } from '@nestjs/jwt';
import { settingOptions } from '../commonSetting';

export const JwtModuleOption = JwtModule.register({
  global: true,
  secret: settingOptions.jwtSecret, // 设置JWT的密钥
  signOptions: { expiresIn: settingOptions.jwtExpiresIn }, // 设置JWT的过期时间
});
