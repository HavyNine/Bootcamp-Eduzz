import { Pool } from "pg";

const connectionString = 'postgres://gkeyvrrk:dn6jgvz3rOqpfMr3NoH9j0siBJBxgl34@motty.db.elephantsql.com/gkeyvrrk';

const db = new Pool({connectionString});

export default db;
