const mysql = require('mysql');
const util = require('util');
const config = require('../../../config');

const {mysqlHost,mysqlUser,mysqlPass,mysqlDb} = config;

const mysqlConnection = async () => {
    const mySqlDb = mysql.createConnection({
        host     : mysqlHost,
        user     : mysqlUser,
        password : mysqlPass,
        database : mysqlDb
    });
  
    mySqlDb.connect((err) => {
      if (err) throw err;
      console.log("Connected!");
    });
  
    global.db = mySqlDb;
    global.query = util.promisify(mySqlDb.query).bind(mySqlDb);
};
  
module.exports = { mysqlConnection };