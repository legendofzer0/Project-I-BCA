const pool = require("pg");
const Pool = new pool.Pool({
  root: "localhost",
  user: "postgres",
  password: "zer0@1234",
  port: 5432,
  database: "RSTDB",
});
