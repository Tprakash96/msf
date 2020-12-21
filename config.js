const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.PORT);

const ENV = process.env;

module.exports = {
  port: parseInt(ENV.PORT || '8080', 10),
  remoteUrl: ENV.REMOTE_URL,
  localUrl: ENV.MONGO_DB_LOCAL,
  jwtSecret: ENV.JWT_SECRET_KEY,
  jwtExpiry: ENV.JWT_EXPIRE_TIME,
  hostName: ENV.HOST_NAME,
  mysqlHost: ENV.MYSQL_HOST_NAME,
  mysqlUser: ENV.MYSQL_USER,
  mysqlPass: ENV.MYSQL_PASS,
  mysqlDb: ENV.MYSQL_DB,
};

//mongodb://localhost:27017/msf