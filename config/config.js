require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  PORT: process.env.PORT || 3001,
};

module.exports = { config };