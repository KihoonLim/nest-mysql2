import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './common.constants';
import { MySqlOptions } from './interfaces/config.interface';
import { MysqlService } from './mysql.service';

@Module({})
@Global()
export class MysqlModule {
  static forRoot(options: MySqlOptions): DynamicModule {
    return {
      module: MysqlModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        MysqlService,
      ],
      exports: [MysqlService],
    };
  }
}
