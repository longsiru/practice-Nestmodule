import { Controller, Get, UseGuards } from '@nestjs/common';
//2.1 import
import { NewsService } from '../../service/news/news.service';
//引入公共的service //同时也要在这个controller对应的模块中要加上AppService
import { AppService } from '../../../../app.service';
//守卫：import --- //守卫配置
import { AuthGuard } from '../../../../guard/auth.guard';

@Controller('admin/news')
//守卫配置 --@UseGuards()
//后卫返回false的话，controller里面的路由就没办法访问了
//@UseGuards(AuthGuard) //在控制器使用后控制器内所有的方法都适用守卫//还可以在方法上使用守卫
export class NewsController {
  //2.2依赖注入
  constructor(
    private newsService: NewsService,
    private appService: AppService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  index() {
    console.log(this.newsService.getNews());
    return 'this is admin modules new controller';
  }

  @Get('apps')
  getApps() {
    return this.appService.getConfig();
  }
}
