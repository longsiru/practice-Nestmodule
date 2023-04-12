import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../../../app.service';

//有名字相同的控制器，所以要在控制器里面指定相对应地路由。不然appmodule谁在前面谁先出来。
//但是defualtmodule挂在了appmodule上所以可以直接用news进入现在这个画面。
//2.在模块里面怎么使用service
@Controller('news')
export class NewsController {
  constructor(private appService: AppService) {}
  @Get()
  index() {
    return 'this is defualt news controller';
  }

  @Get('detail')
  detail() {
    return this.appService.getConfig(); //"domain": "www.itying.com"
  }
}
