import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';

@Module({
  //nest g co module/admin/controller/user
  controllers: [UserController, NewsController],
})
export class AdminModule {}
