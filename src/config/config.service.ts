import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfig } from './config.type';

@Injectable()
export class configServices implements IConfig {
  constructor(private configService: ConfigService<IConfig, true>) {}
  get nodeEnv(): string {
    return this.configService.get('nodeEnv');
  }
  get port(): number {
    return this.configService.get('port');
  }
  get databaseType(): string {
    return this.configService.get('databaseType');
  }
  get databasePassword(): string {
    return this.configService.get('databasePassword');
  }
  get databaseUser(): string {
    return this.configService.get('databaseUser');
  }
  get databaseDB(): string {
    return this.configService.get('databaseDB');
  }
  get databasePort(): number {
    return this.configService.get('databasePort');
  }
  get cloudinaryClundName(): string {
    return this.configService.get('cloudinaryClundName');
  }
  get cloudinaryApiKey(): string {
    return this.configService.get('cloudinaryApiKey');
  }
  get cloudinaryApiSecret(): string {
    return this.configService.get('cloudinaryApiSecret');
  }
}
