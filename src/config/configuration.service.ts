import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfiguration } from './configuration.type';

@Injectable()
export class ConfigurationService implements IConfiguration {
  constructor(private configService: ConfigService<IConfiguration, true>) {}

  get nodeEnv(): string {
    return this.configService.get('nodeEnv');
  }

  get port(): number {
    return this.configService.get('port');
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
