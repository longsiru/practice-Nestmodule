import { Controller, Get } from '@nestjs/common';
//2.1 import
import { NewsService } from '../../service/news/news.service';
//引入公共的service //同时也要在这个controller对应的模块中要加上AppService
import { AppService } from '../../../../app.service';

@Controller('admin/news')
export class NewsController {
  //2.2依赖注入
  constructor(
    private newsService: NewsService,
    private appService: AppService,
  ) {}

  @Get()
  index() {
    console.log(this.newsService.getNews());
    return 'this is admin modules new controller';
  }

  @Get('apps')
  getApps() {
    return this.appService.getConfig();
  }
}
