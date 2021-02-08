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
    connection.end();
  });

  // prompts listed when the app is entered in CLI

  const beginApp = () => {
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

  //function for viewing employees by department

  //function for viewing employees by manager

  //function for adding an employee

  //function for removing an employee

  //function for updating employee role

  
  