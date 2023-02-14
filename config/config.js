require("dotenv").config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "terminal_dev",
    host: DB_HOST,
    port: DB_PORT || "3432",
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "terminal_test",
    host: DB_HOST,
    port: DB_PORT || "3432",
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "terminal_prod",
    host: DB_HOST,
    port: DB_PORT || "3432",
    dialect: "postgres",
  },
};
