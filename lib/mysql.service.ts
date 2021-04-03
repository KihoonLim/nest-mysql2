import { Inject, Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import { CONFIG_OPTIONS } from './common.constants';
import { MySqlOptions } from './interfaces/config.interface';
import { QueryInterface } from './interfaces/query.interface';

@Injectable()
export class MysqlService {
  constructor(@Inject(CONFIG_OPTIONS) private readonly options: MySqlOptions) {
    this.POOL = mysql.createPool(options);
  }
  private POOL: any;

  async getConnection(): Promise<any> {
    return await this.POOL.getConnection(async (conn: any) => conn);
  }

  async query(data: QueryInterface) {
    const { sql, value } = data;
    const conn = data.conn || this.POOL;

    const [result] = await conn.query(sql, value);

    return result;
  }

  async execute(data: QueryInterface) {
    const { sql, value } = data;
    const conn = data.conn || this.POOL;

    const [result] = await conn.execute(sql, value);

    return result;
  }

  async transaction(conn: any): Promise<any> {
    return await conn.beginTransaction();
  }

  async commit(conn: any): Promise<any> {
    return await conn.commit();
  }

  async rollback(conn: any): Promise<any> {
    return await conn.rollback();
  }

  async relese(conn: any): Promise<any> {
    return await conn.relese();
  }
}
