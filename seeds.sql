--to insert employees into database tables:


USE employee_db;
-- DEPARTMENT TABLE
INSERT INTO department (name) VALUE ('Coaching Staff'), ('Front Office'), ('Athletes'), ('Athlete Performance');
-- ROLE TABLE
INSERT INTO role (title, salary, department_id) VALUE ('Head Coach', 350000.00, 1), ('Offensive Coordinator', 2000000.00, 1), ('Deffensive Coordinator', 2000000.00, 1);
INSERT INTO role (title, salary, department_id) VALUE ('Owner', 3000000.00, 2), ('General Manager', 1500000.00, 2), ('Director of Player Personnel', 500000.00, 2);
INSERT INTO role (title, salary, department_id) VALUE ('Quarterback', 8000000.00, 3), ('Wide Reciever', 4000000.00, 3), ('Tightend', 5000000.00, 3);
INSERT INTO role (title, salary, department_id) VALUE ('Team Physician', 500000.00, 4), ('Athletic Trainer', 85000, 5), ('Strength Coach', 100000, 5);

-- EMPLOYEE TABLE
INSERT INTO employee (first_name, last_name, role_id) VALUE ('Bruce', 'Arians', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUE ('Bryan', 'Glazer', 4);
INSERT INTO employee (first_name, last_name, role_id) VALUE ('Byron', 'Moran', 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Tom', 'Brady', 7, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Rob', 'Gronkowski', 9, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Jon', 'Spytek', 6, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Jason', 'Licht', 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Byron', 'Leftwich', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Todd', 'Bowles', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Antonio', 'Brown', 8, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Bobby', 'Slater', 11, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ('Anthony', 'Piroli', 12, 3);

