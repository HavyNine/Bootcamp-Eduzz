import { Pool } from "pg";

const connectionString = 'urlconnection here';

const db = new Pool({connectionString});

export default db;
