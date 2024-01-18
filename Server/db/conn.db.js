const { Pool } = require("pg");

const pool = new Pool({
  root: "localhost",
  user: "postgres",
  password: "zer0@1234",
  database: "RSTDB",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
