import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}
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
    console.log(this.apiService.findNews()); //{ success: 'true' }
    return { result: 'this is news list api interface' };
  }
}
