const mysql = require("mysql");
const fs = require("fs");
const readline = require("readline");

const config = require('../../../config');

const {mysqlHost,mysqlUser,mysqlPass,mysqlDb} = config;

const mysqlCon = mysql.createConnection({
    host     : mysqlHost,
    user     : mysqlUser,
    password : mysqlPass,
    database : mysqlDb
});


  
const rl = readline.createInterface({
    input: fs.createReadStream("./src/db/mysql/schema.sql"),
    terminal: false,
});
  
rl.on("line", function (chunk) {
    mysqlCon.query(chunk.toString("ascii"), function (err, sets, fields) {
      if (err) console.log(err);
    });
});

rl.on("close", function () {
    console.log("finished");
    mysqlCon.end();
});