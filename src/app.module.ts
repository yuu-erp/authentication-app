import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './services/prismaService/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
