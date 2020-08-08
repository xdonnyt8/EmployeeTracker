var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table")


require("dotenv").config()


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  start();
});

module.exports = connection;


const views = require("./views.js")
const add = require("./add.js")
const update = require("./update.js")


function start() {
    inquirer
      .prompt({
        name: "select",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees", 
            "View All Roles", 
            "View All Department", 
            "Add Employee", 
            "Add Department",
            "Add Role",
            "Remove Employee", 
            "Update Employee Role", 
            "View All Employees by Department", 
            "View All Employees Manager", 
            "End"
        ]
      })
      .then(function(answer) {

        switch (answer.select){
            case "View All Employees":
            views.allEmployee();
            back();
            break;

            case "View All Roles":
            views.allRole();
            back();
            break;

            case "View All Department":
            views.allDepartment();
            back();
            break;

            case "Add Employee":
            add.addEmployee();
            back();
            break;

            case "Add Department":
            add.addDepartment();
            back();
            break;

            case  "Add Role":
            add.addRole();
            back();
            break;

            case "Update Employee Role":
            update.updateRole();
            back();
            break;

            case "Remove Role":
            update.removeRole();
            back();
            break;

            case "View All Employees by Department":
            views.viewByDept();
            back();
            break;

            case "View All Employees Manager":
            views.viewByManager();
            back();
            break;

            case "end":
            connection.end();
            break;

        }
      });

    }

function back() {
    inquirer.prompt({
        name: "back",
        type: "list",
        message: "Do you want to go back to Main Menu?",
        choices: [
            "Yes", 
            "No", 
        ]
      }).then(function(answer){
        if(answer.back == "Yes"){
            start()
        } else {
            connection.end()
        }

      })
}
