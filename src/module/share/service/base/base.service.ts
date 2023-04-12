import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  getDate() {
    return 'this is public module service';
  }
}
