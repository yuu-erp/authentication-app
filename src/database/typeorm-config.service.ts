import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { configServices } from 'src/config/config.service';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configServices: configServices) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configServices.databaseType,
      host: 'localhost',
      port: this.configServices.databasePort,
      username: this.configServices.databaseUser,
      password: this.configServices.databasePassword,
      database: this.configServices.databaseDB,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Chỉ sử dụng trong môi trường phát triển
    } as TypeOrmModuleOptions;
  }
}
