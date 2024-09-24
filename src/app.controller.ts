import { Controller, Get } from '@nestjs/common';
import { Public } from './decorators/allowAnonymous.decorator';

@Controller()
export class AppController {
  constructor() {}

  @Public()
  @Get('ping')
  ping() {
    return { message: 'PONG' };
  }

  @Public()
  @Get('')
  getApp() {
    return {
      message: 'Hello Word!'
    }
  }
}
