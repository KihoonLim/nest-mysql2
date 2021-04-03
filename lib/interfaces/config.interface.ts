// https://github.com/mysqljs/mysql
export interface MySqlOptions {
  host: string;
  port?: number;
  user: string;
  password?: string;
  database: string;

  charset?: string;
  timezone?: string;
  multipleStatements?: boolean;
  debug?: boolean;
  trace?: boolean;
  localAddress?: string;
  socketPath?: string;
  stringifyObjects?: boolean;
  insecureAuth?: boolean;
  typeCast?: boolean;
  queryFormat?: any;
  supportBigNumbers?: boolean;
  bigNumberStrings?: any;
  localInfile?: boolean;
  flags?: any;
  ssl?: any;

  waitForConnections?: boolean;
  queueLimit?: number;
  connectTimeout?: number;
  dateStrings?: boolean;
  decimalNumbers?: boolean;
  connectionLimit?: number;
}
