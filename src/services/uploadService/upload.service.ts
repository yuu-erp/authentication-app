import { Injectable } from '@nestjs/common';
import { ConfigurationService } from '../../config/configuration.service';
import { v2 } from 'cloudinary';
@Injectable()
export class UploadService {
  private cloudinary = v2;
  constructor(private readonly configurationService: ConfigurationService) {
    this.cloudinary.config({
      cloud_name: this.configurationService.cloudinaryClundName,
      api_key: this.configurationService.cloudinaryApiKey,
      api_secret: this.configurationService.cloudinaryApiSecret,
    });
  }
}
