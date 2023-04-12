import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './guard/auth.guard';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';

//5.session是另一种记录客户状态的机制。
//5.1.安装session： npm install express-session --save
//5.2. import session
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //npm install --save @nestjs/serve-static
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/',
  });

  // npm i ejs --save
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 放视图的文件
  app.setViewEngine('ejs');

  //4.3.配置cookie中间件
  //4.6 对cookie进行加密。---配置中间件的时候需要传参数，任意。，然后设置的时候：signed：true
  app.use(cookieParser('this is signedCookie'));

  //5.3.配置session中间件 //加了rolling之后，么哦一次都重新加载过期的cookie时间。
  app.use(
    session({
      secret: 'keyboard cat',
      cookie: { maxAge: 80000000, httpOnly: true },
      rolling: true,
    }),
  );
  //全局配置守卫
  app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();

//4.创建守卫：nest g guard

//全局配置守卫

//5.守卫中基于cookie，session的权限判断
