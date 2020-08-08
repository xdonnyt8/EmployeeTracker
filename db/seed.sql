use empolyees;

INSERT INTO department(name) value ("Engineer");
INSERT INTO department(name) value ("Human Resources");
INSERT INTO department(name) value ("IT");
INSERT INTO department(name) value ("Finance");
INSERT INTO department(name) value ("Sales");

INSERT INTO role(title, salary, department_id) VALUE ("Developer", 50000, 1);
INSERT INTO role(title, salary, department_id) VALUE ("Lead Developer", 75000, 1);
INSERT INTO role(title, salary, department_id) VALUE ("HR Director", 60000, 2);
INSERT INTO role(title, salary, department_id) VALUE ("HR Assistant", 30000, 2);
INSERT INTO role(title, salary, department_id) VALUE ("Lead Sales", 40000, 5);
INSERT INTO role(title, salary, department_id) VALUE ("Sales Director", 70000, 5);
INSERT INTO role(title, salary, department_id) VALUE ("Accountant", 50000, 4);

INSERT INTO employee(first_name, last_name, role_id) VALUE ("Don", "Tran", 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Julia", "Potts", 3, 1);
INSERT INTO employee(first_name, last_name, role_id) VALUE ("Eden", "Nash", 6);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Vanessa", "Green", 5, 3);


INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Hafsa", "Carson", 1, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Anne", "Warren", 1, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Adrian", "Woodward", 4, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Isla", "Mccall", 4, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Leonie", "Sampson", 4, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Emma", "Larsen", 5, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Julia", "Carson", 5, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Lia", "Riggs", 5, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE ("Jasmine", "Patterson", 7, 1);
