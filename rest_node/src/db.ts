import { Pool } from "pg";

const connectionString = 'postgree.string.connection.here"
const db = new Pool({connectionString});

export default db;
