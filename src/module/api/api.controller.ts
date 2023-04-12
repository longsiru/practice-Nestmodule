import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get()
  index() {
    return { result: 'this is api modules api controller' };
  }

  @Get('user')
  userIndex() {
    return { result: 'this is user list api interface' };
  }

  @Get('news')
  newsIndex() {
    return { result: 'this is news list api interface' };
  }
}
