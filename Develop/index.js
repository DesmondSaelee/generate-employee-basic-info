const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeArray = [];

const init = () =>{
    inquirer.prompt([
        {
           type:"list",
           choices:["Add Manager","Add Intern", "Add Engineer", "None" ],
           message:"Choose position of team member.",
           name:"option"
        }
    ]).then(Response => {
        switch(Response.option){
            case 'Add Manager':
                AddManager()
                break
            case 'Add Intern':
                AddIntern()
                break
            case 'Add Engineer':
                AddEngineer()
                break
                default: generateHTML()
                
        }
    })
}
const AddManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter manager name.',
            name: 'Name',
        },
        {
            type: 'input',
            message: 'Enter Id.',
            name: 'Id',
        },
        {
            type: 'input',
            message: 'Enter Email.',
            name: 'Email',
        },
        {
            type: 'input',
            message: 'Enter office number.',
            name: 'officeNumber',
        }
    ]).then(response => {
        const newManager = new Manager(response.Name, response.Id, response.Email, response.officeNumber)
        employeeArray.push(newManager)
        init()
    })
}
const generateHTML = ({ name, Id, Email, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;