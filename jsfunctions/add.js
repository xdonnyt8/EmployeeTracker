var connection = require("../connection.js");
var inquirer = require("inquirer");
const start = require("./start.js");


exports.addEmployee = function () {
    connection.query("select * from role", function (err, result) {
        if (err) throw err;

        inquirer
            .prompt([
                {
                    name: "employee_first",
                    type: "input",
                    message: "What is the first name of the employee?"
                },
                {
                    name: "employee_last",
                    type: "input",
                    message: "What is the last name of the employee?"
                },
                {
                    name: "role_id",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (let i = 0; i < result.length; i++) {
                            choiceArray.push(result[i].title);
                        }
                        return choiceArray;
                    },
                    message: "What does the employee's role?",
                },
                {
                    name: "employee_manager",
                    type: "input",
                    message: "What is the manager's id?"
                }
            ]).then(function (answer) {
                let role_Id;
                for (let i = 0; i < result.length; i++) {
                    if (result[i].title == answer.role_id) {
                        role_Id = result[i].id;
                    }
                }
                connection.query("INSERT INTO employee SET ?",
                    {
                        first_name: answer.employee_first,
                        last_name: answer.employee_last,
                        role_id: role_Id,
                        manager_id: answer.employee_manager || null
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("You have successfully added an employee");
                        start.start()
                    })
            })
    })
};



exports.addDepartment = function () {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input",
                message: "What New Department do you want to add?"
            }
        ]).then(function (answer) {
            var string = answer.department.toString()
            connection.query("insert INTO department(name) value (?)", [string], function (err, result) {
                if (err) throw err
                console.log("Added the department")
                start.start()
            })
        })
}
exports.addRole = function () {
    connection.query("select * from department", function (err, result) {

        inquirer
            .prompt([
                {
                    name: "role",
                    type: "input",
                    message: "What New Role do you want to add?"
                },
                {
                    name: "salary",
                    type: "number",
                    message: "How much does this Role get paid?"
                },
                {
                    name: "department",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (let i = 0; i < result.length; i++) {
                            choiceArray.push(result[i].name);
                        }
                        return choiceArray;
                    },
                    message: "What department does this role belong to?"
                }
            ]).then(function (answer) {
                let depart_Id;
                for (let i = 0; i < result.length; i++) {
                    if (result[i].name == answer.department) {
                        depart_Id = result[i].id;
                    }
                }
                connection.query("INSERT INTO role SET ?",
                    {
                        title: answer.role,
                        salary: answer.salary,
                        department_id: depart_Id,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log("You have successfully added a role");
                        start.start()
                    })
            })
    })

}


