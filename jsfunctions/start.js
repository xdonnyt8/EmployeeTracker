var inquirer = require("inquirer");
var connection = require("../connection");
var views = require("./views.js");
var add = require("./add.js");
var update = require("./update.js");

exports.start = function() {
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
            break;

            case "View All Roles":
            views.allRole();
            break;

            case "View All Department":
            views.allDepartment();
            break;

            case "Add Employee":
            add.addEmployee();
            break;

            case "Add Department":
            add.addDepartment();
            break;

            case  "Add Role":
            add.addRole();
            break;

            case "Update Employee Role":
            update.updateRole();

            break;

            case "Remove Employee":
            update.removeEmp();
            break;

            case "View All Employees by Department":
            views.viewByDept();
            break;

            case "View All Employees Manager":
            views.viewByManager();
            break;

            case "end":
            connection.end();
            break;

        }
      });

    }

