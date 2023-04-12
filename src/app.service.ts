import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  //公共service
  getConfig() {
    return { domain: 'www.itying.com' };
  }
}
