DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(255) NOT NULL
);
CREATE TABLE role(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title varchar(255) NOT NULL,
    salary DEC(25, 2) not NULL,
    department_id INT,
    FOREIGN key(department_id) references department(id)
);
CREATE TABLE employee(
    id int NOT NULL  AUTO_INCREMENT PRIMARY KEY,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
    role_id int not NULL,
    FOREIGN key(role_id) REFERENCES role(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
