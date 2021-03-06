const mysql = require('mysql')
const inquirer = require('inquirer')
const consoleTable = require('console.table')
const figlet = require('figlet')



figlet('Employee Tracker', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data)
});


//connection to mysql
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'Bo$$2020',
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
  inquirer.prompt(
    {
      type: 'list',
      name: 'choices',
      message: 'Please select option using arrow key.',
      choices: ['View all employees', 'View Roles', 'View Departments', 'View employees by department', 'View employees by role', 'Add employee', 'End']
    }
  ).then((answer) => {
    //list of switch cases to begin different functions related to the selection
    switch (answer.choices) {
      case 'View all employees':
        viewEmployee()
        break
      case 'View Departments':
        viewDep()
        break
      case 'View Roles':
        viewRoles()
        break
      case 'View employees by department':
        viewEmpDept()
        break
      case 'View employees by role':
        viewEmpRole()
        break
      case 'Add employee':
        addEmployee()
        break
      case 'End':
        console.log('Leaving app now, thank you!')
        process.exit(0)
      default:
        console.log('Sorry that is not an option')
    }
  })
}

//function for viewing employees

const viewEmployee = () => {
  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err
    //log results in table format
    console.table(res)
    //restart the prompts
    track()
  })
}

//function for viewing all departments

const viewDep = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err
    //log results in table format
    console.table(res)
    //restart the prompts
    track()
  })
}

//function for viewing all the roles

const viewRoles = () => {
  connection.query('SELECT * FROM role', (err, res) => {
    if (err) throw err
    //log results in table format
    console.table(res)
    //restart the prompts
    track()
  })
}

// function for viewing employees by department
const viewEmpDept = () => {
  connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;", (err, res) => {
    if (err) throw err
    console.table(res)
    track()
  })
}

// function for viewing employee by role
const viewEmpRole = () => {
  connection.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id;", (err, res) => {
    if (err) throw err
    console.table(res)
    track()
  })
};


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
    connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answer.first, answer.last, answer.role, answer.manager], (err, res) => {
      if (err) throw err
      console.table(res)
      viewEmployee()
      track()
    })
  })
}




