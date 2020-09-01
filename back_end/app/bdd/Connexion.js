const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "RedLine",
  password: "1A2Z3E4R",
  port: 5432,
});

module.exports = pool;
