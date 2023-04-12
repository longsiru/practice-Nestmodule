import { Module } from '@nestjs/common';
import { BaseService } from './service/base/base.service';

@Module({
  providers: [BaseService],
  //把BaseService设置成共享的service。---> export
  //暴露服务 暴露出去之后引入当前模块的模块就可以使用当前模块里面的服务。
  exports: [BaseService],
})
export class ShareModule {}
