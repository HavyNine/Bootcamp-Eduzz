import { Pool } from "pg";

const connectionString = 'Your postgrees url connection here';

const db = new Pool({connectionString});

export default db;
