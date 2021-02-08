DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL 
  PRIMARY KEY (id)
);

USE employee_db;

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT(5) NOT NULL,
    PRIMARY KEY (id)
);

USE employee_db;

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY(id)
);

