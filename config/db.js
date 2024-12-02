const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'bf17bfgzh9ah49ojpcvw-mysql.services.clever-cloud.com',
    user: 'u0fin9ywgiclfp7u',
    password: 'iT6GeIs62EUVYw8CKGq6',
    database: 'bf17bfgzh9ah49ojpcvw',
    port: 3306
  });
  

const promisePool = pool.promise();

module.exports = promisePool;

  