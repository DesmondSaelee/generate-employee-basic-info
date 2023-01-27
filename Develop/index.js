const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const employeeArray = [];

const init = () => {
    AddManager();


}

const TeamMemberPrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            choices: ["Add Intern", "Add Engineer", "None"],
            message: "Choose position of team member.",
            name: "option"
        }
    ]).then(Response => {
        switch (Response.option) {
            case 'Add Manager':
                AddManager()
                break
            case 'Add Intern':
                AddIntern()
                break
            case 'Add Engineer':
                AddEngineer()
                break
            default: generateHTML(employeeArray)

        }
    })
}



const AddManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Team manager name.',
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
        TeamMemberPrompt()

    })
}

const AddIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Intern name.',
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
            message: 'Enter School Name.',
            name: 'schoolName',
        }
    ]).then(response => {
        const newIntern = new Intern(response.Name, response.Id, response.Email, response.schoolName)
        employeeArray.push(newIntern)
        TeamMemberPrompt()
    })

}
const AddEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Engineer name.',
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
            message: 'Enter Github Username.',
            name: 'GithubUsername',
        }
    ]).then(response => {
        const newEngineer = new Intern(response.Name, response.Id, response.Email, response.GithubUsername)
        employeeArray.push(newEngineer)
        TeamMemberPrompt()
    })

}

init()

const generateHTML = (employeeArray) => {
    console.log(employeeArray)
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>`
    //   <header class="p-5 mb-4 header bg-light">
    //     <div class="container">'
    for (const employee of employeeArray) {
        let card = `<div class="card" style="width: 18rem;">
            
            <div class="card-header">
            <div class = "container">
            <div class= "row"> ${employee.name}</div>
            <div class= "row"> ${employee.getRole()}</div>

            </div>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.Id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">  `

        // card head use get role method
        // open card body which is my let card
        // 
        if (employee.officeNumber) {
            const officeNumber = `office number: ${employee.officeNumber}`
            card += officeNumber
        }
        if (employee.GithubUsername) {
            const GithubUsername = `Github Username: ${employee.GithubUsername}`
            card += GithubUsername
        }
        if (employee.schoolName) {
            `School Name: ${employee.schoolName}`
            card += schoolName
        }
        const cardClosing = `</li> </ul> </div>` ;
        card += cardClosing;
        html += card;

    }

    html += `</body>
    </html>`;

    

fs.writeFile('index.html', html, (err) => {
    err ? console.error(err) : console.log('Success!');
})
}
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <header class="p-5 mb-4 header bg-light">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${name}</h1>
//       <p class="lead">I am from ${Id}.</p>
//       <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${Email}</li>
//         <li class="list-group-item">LinkedIn: ${officeNumber}</li>
//       </ul>
//     </div>
//   </header>
// </body>
// </html>`;