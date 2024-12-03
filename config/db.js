const mysql = require('mysql2');
require('dotenv').config(); 

const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST,         
  user: process.env.MYSQL_ADDON_USER,         
  password: process.env.MYSQL_ADDON_PASSWORD, 
  database: process.env.MYSQL_ADDON_DB,       
  port: process.env.MYSQL_ADDON_PORT || 3306 
});

const promisePool = pool.promise();

module.exports = promisePool;
