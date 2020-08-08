
const connection = require("./server.js") 


exports.allEmployee = function(){
    let queryString = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    connection.query(queryString, function(err, result){
        if(err) throw err
        console.table(result)
    })
}

exports.allRole = function(){
    let queryString = "select role.title, role.salary from role"
    connection.query(queryString, function(err, result){
        if(err) throw err
        console.table(result)
    })
}
exports.allDepartment = function(){
    let queryString = "select department.name from department"
    connection.query(queryString, function(err, result){
        if(err) throw err
        console.table(result)
    })
}
exports.viewByDept = function(){
    console.log("Work in progress")

}
exports.viewByManager = function(){
    console.log("Work in progress")

}
