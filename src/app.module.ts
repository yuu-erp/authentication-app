import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModules } from './config/config.module';
import { TypeOrmConfigModule } from './database/typeorm-config.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModules, TypeOrmConfigModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
