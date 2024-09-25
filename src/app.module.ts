import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './services/prismaService/prisma.module';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
