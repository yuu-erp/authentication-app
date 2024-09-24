import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Khai báo controller để test
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('ping', () => {
    it('should return { message: "PONG" }', () => {
      expect(appController.ping()).toEqual({ message: 'PONG' });
    });
  });

  describe('getApp', () => {
    it('should return { message: "Hello World!" }', () => {
      expect(appController.getApp()).toEqual({ message: 'Hello Word!' });
    });
  });
});
