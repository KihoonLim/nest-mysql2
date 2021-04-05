# nest-mysql2
## **Description**

[Mysql2](https://github.com/sidorares/node-mysql2) module for **[Nest](https://github.com/nestjs/nest)**

---

## Install

```markdown
$ npm i nest-mysql2 mysql2
```

---

## Example

app.module.ts

```tsx
import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql2';

@Module({
  imports: [
    MysqlModule.forRoot({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      // ... your mysql confing
      // https://github.com/mysqljs/mysql
    }),
	],
  controllers: [],
  providers: [],
})
export class AppModule {}

```

app.sevice.ts

```tsx
import { Injectable } from '@nestjs/common';
import { MysqlService } from 'nest-mysql2';

@Injectable()
export class AppService {
const conn = await this.db.getConnection();
    try {
      await this.db.transaction(conn);

      await this.db.execute({
        conn,
        sql: `select * from mem where id = ?`,
        value: [1],
      });

      await this.db.query({
        conn,
        sql: `insert mem set ?`,
        value: { id: 2 },
      });

      await this.db.commit(conn);
    } catch (err) {
			console.log(err)
      await this.db.rollback(conn);
    } finally {
      this.db.relese(conn);
    }
  }
}
```

You can use it according to the grammar of the mysql module.

**In connection information, information of mysql module can be used directly without using the service.**

ex) conn.beginTransaction(), conn.query( sql, value )

---

## Service Option

- `getConnection()`: Connection imported from mysql pool
- `query(QueryData)`: Run sql query 
**QueryData**: {sql: SQL string , conn: mysql connection, value: prepared statement value} 
ReturnData: Result Low  [{ db data },{}...]
- `execute(QueryData)`: Run sql query (mysql2 execute)
**QueryData**: {sql: SQL string , conn: mysql connection, value: prepared statement value} 
ReturnData: Result Low  [{ db data },{}...]
- `transaction(conn)`
- `commit(conn)`
- `rollback(conn)`
- `relese(conn)`

---

TODO

- Add Service Capabilities
- Check the availability of decorators and other nest features
