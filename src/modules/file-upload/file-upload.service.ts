import { Injectable } from '@nestjs/common';

@Injectable()
export class FileUploadService {
  async uploadFile() {
    return {
      message: "Upload file!"
    }
  }
}
