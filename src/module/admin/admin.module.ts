import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';
import { NewsService } from './service/news/news.service';
import { AppService } from '../../app.service';
import { LoginController } from './controller/login/login.controller';

@Module({
  //nest g co module/admin/controller/user
  controllers: [UserController, NewsController, LoginController],
  providers: [NewsService, AppService],
})
export class AdminModule {}
