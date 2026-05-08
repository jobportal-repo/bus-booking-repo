const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DB_CONNECTION,
  ssl: { rejectUnauthorized: false },
});
module.exports = pool;
