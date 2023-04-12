import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  getNews() {
    return [{ title: 'news111' }, { title: 'news222' }, { title: 'news333' }];
  }
}
