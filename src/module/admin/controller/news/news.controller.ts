import { Controller, Get } from '@nestjs/common';

@Controller('admin/news')
export class NewsController {
  @Get()
  index() {
    return 'this is admin modules new controller';
  }
}
