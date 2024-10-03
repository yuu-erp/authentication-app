import { IConfig } from './config.type';

export const config = (): IConfig => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.APP_PORT) || 3001,
  databaseType: process.env.DATABASE_TYPE || 'postgres',
  databasePassword: process.env.DATABASE_PASSWORD || '',
  databasePort: Number(process.env.DATABASE_PORT) || 5432,
  databaseDB: process.env.DATABASE_DB || '',
  databaseUser: process.env.DATABASE_USER || '',
  cloudinaryClundName: process.env.CLOUDINARY_CLOUD_NAME || '',
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || '',
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || '',
});
