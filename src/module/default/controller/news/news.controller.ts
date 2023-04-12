import { Controller, Get } from '@nestjs/common';

//有名字相同的控制器，所以要在控制器里面指定相对应地路由。不然appmodule谁在前面谁先出来。
//但是defualtmodule挂在了appmodule上所以可以直接用news进入现在这个画面。
@Controller('news')
export class NewsController {
  @Get()
  index() {
    return 'this is defualt news controller';
  }
}
