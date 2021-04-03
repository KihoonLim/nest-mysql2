// https://github.com/mysqljs/mysql
export interface QueryInterface {
  sql: string;
  conn?: any;
  value?: any;
}
