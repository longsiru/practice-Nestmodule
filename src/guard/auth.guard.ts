import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

//guard是被@Injectable()装饰的类，里面实现了CanActivate接口，在CanActivate接口里面要实现canActivate（）方法。
//然后在方法里面传入context参数。返回类型是boolean类型
//创建好了之后就可以使用了-- admin- news-controller
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //guard is process
    //return false; 拒绝响应

    //做权限判断
    // var n = Math.random();
    // console.log('guard is process' + n);
    // if (n > 0.3) {
    //   return true;
    // }
    // return false;

    //5.守卫中基于cookie，session的权限判断
    //console.log(context.switchToHttp().getRequest().session);
    // console.log(context.switchToHttp().getRequest().session.username); //sayo sayo
    /*
    //login
    Session {
  cookie: {
    path: '/',
    _expires: 2023-04-13T05:06:32.800Z,
    originalMaxAge: 80000000,
    httpOnly: true
  }
}
//login/test
Session {
  cookie: {
    path: '/',
    _expires: 2023-04-13T05:06:32.811Z,
    originalMaxAge: 80000000,
    httpOnly: true
  },
  username: 'sayo'
}

    */
    var req = context.switchToHttp().getRequest();
    if (req.path == '/admin/login') {
      //允许访问login之后，才允许进入其他页面。
      return true;
    } else {
      var userinfo = context.switchToHttp().getRequest().session.username;

      if (userinfo) {
        return true;
      }

      return false;
    }
    //console.log(req.path);
  }
}
