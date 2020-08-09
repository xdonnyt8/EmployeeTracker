var mysql = require("mysql");
var consoleTable = require("console.table")


require("dotenv").config()


let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB_NAME
});

module.exports = connection;
const start = require("./jsfunctions/start.js")


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  start.start();
});







