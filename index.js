const mysql = require('mysql')
const inquirer = require('inquirer')
const consoleTable = require('console.table')


//connection to mysql
const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port, if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: '',
    database: 'employee_db',
  });

  //establish connection or throw error
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    track();
  });

  // prompts listed when the app is entered in CLI

  const track = () => {
    inquirer.prompt (
      {
        type: 'list',
        name: 'choices',
        message: 'Please select option using arrow key.',
        choices: ['View all employees', 'View all employees by department', 'View all employees by manager', 'Add employee', 'Remove employee', 'Update employee role', 'End' ]
      }
    ).then((answer) => {
      //list of switch cases to begin different functions related to the selection

    })

  }

  //function for viewing employees

  const viewEmployee = () => {
    connection.query('SELECT first_name, last_name, role_id, manager_id FROM employee', (err, res) => {
      if (err) throw err
      //log results in table format
      console.table(res)
      //restart the prompts
      track()      
    })
  }

  //function for viewing employees by department using JOIN

  const viewEmpDep = () => {
    connection.query('')
  }

  //function for viewing employees by manager using JOIN
   
  //function for adding an employee

  const addEmployee = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'first',
        message: 'What is the first name of the employee you want to add?'
      },
      {
        type: 'input',
        name: 'last',
        message: 'What is the last name of the employee you want to add?'
      },
      {
        type: 'input',
        name: 'role',
        message: 'What is the role I.D assigned to the employee you want to add?'
      },
      {
        type: 'input',
        name: 'manager',
        message: 'What is the I.D of the manager overseeing the employee you want to add?'
      }
    ]).then((answer) => {
      connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)', [answer.first, answer.last, answer.role, answer.manager], (err, res) => {
        if (err) throw err
        console.table(res)
        track()
    })
  }

  //function for removing an employee

  //function for updating employee role

  
  