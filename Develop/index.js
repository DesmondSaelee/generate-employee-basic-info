// importing everything I need. classes and inquirer and fs. 
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const employeeArray = [];

// init function containing all my prompts
const init = () => {
    AddManager();


}
// function prompting for questions. taking response and prompting corresponding method.
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


// my prompt questions for corresponding position.
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
        // taking response and creating new constructor and pushing to employee array then prompting again.
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
//calling init function.
init()

// generating my Html with boiler plate code and bootstrap
const generateHTML = (employeeArray) => {
    console.log(employeeArray)
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="./dist/style.css">
      <title>Team-Generator</title>
    </head>
    <body>
    <header class = myTeam>My Team</header>`
    for (const employee of employeeArray) {
        let card = `
        <div class = flex-container>
        <div class="card" style="width: 18rem;">
            
            <div class="card-header">
            <div class = "container">
            <div class= "row"> ${employee.name}</div>
            <div class= "row"> ${employee.getRole()}</div>

            </div>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.Id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">
             `
     // if statement to attach different info for corresponding position.
        if (employee.officeNumber) {
            const officeNumber = `office number: ${employee.officeNumber}`
            card += officeNumber
        }
        if (employee.GithubUsername) {
            const GithubUsername = `Github Username: ${employee.GithubUsername}`
            card += GithubUsername
        }
        if (employee.schoolName) {
            const schoolName = `School Name: ${employee.schoolName}`
            card += schoolName
        }
        const cardClosing = `
        </li>
        </ul> 
        </div>
        </div>
        ` ;
       
       // appending to card and html
        card += cardClosing;
        html += card;

    }

    html += `</body>
    </html>`;


    // create a file
    fs.writeFile('index.html', html, (err) => {
        err ? console.error(err) : console.log('Success!');
    })
}
