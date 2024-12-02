const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables

const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST,         // From .env
  user: process.env.MYSQL_ADDON_USER,         // From .env
  password: process.env.MYSQL_ADDON_PASSWORD, // From .env
  database: process.env.MYSQL_ADDON_DB,       // From .env
  port: process.env.MYSQL_ADDON_PORT || 3306  // Default to 3306 if not set
});

const promisePool = pool.promise();

module.exports = promisePool;
