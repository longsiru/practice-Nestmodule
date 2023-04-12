import { Controller, Get, Request } from '@nestjs/common';

@Controller('admin/login')
export class LoginController {
  @Get()
  index(@Request() req) {
    //登陆 设置session
    req.session.username = 'sayo';
    return 'seccess for login';
  }

  @Get('test')
  testindex(@Request() req) {
    //登陆 设置session
    return req.session.username;
  }
}
