import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';
import { NewsService } from './service/news/news.service';
import { AppService } from '../../app.service';

@Module({
  //nest g co module/admin/controller/user
  controllers: [UserController, NewsController],
  providers: [NewsService, AppService],
})
export class AdminModule {}
