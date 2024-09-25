import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigurationModule } from './config/configuration.module';
import { PrismaModule } from './services/prismaService/prisma.module';

@Module({
  imports: [
    ConfigurationModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
