// Variables needed
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const employees = [];

// Employee question prompts
function addEmployee() {
  inquirer
    .prompt([
      {
        message: "Enter the name of the team member: ",
        name: "name",
      },
      {
        type: "list",
        message: "Select the team member's role: ",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
      {
        message: "Enter the team member's ID: ",
        name: "id",
      },
      {
        message: "Enter the team member's email address: ",
        name: "email",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub";
      } else if (role === "Intern") {
        roleInfo = "School name";
      } else {
        roleInfo = "Office number";
      }
      inquirer
        .prompt([
          {
            message: `Enter the team member's ${roleInfo}`,
            name: "roleInfo",
          },
          {
            type: "list",
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"],
            name: "addMoreMembers",
          },
        ])
        .then(function ({ roleInfo, addMoreMembers }) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          employees.push(newMember);
          editHtml(newMember).then(function () {
            if (addMoreMembers === "yes") {
              addEmployee();
            } else {
              finish();
            }
          });
        });
    });
};

// Creates base HTML file skeleton for output
    function outputHtml() {
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
            <link rel="stylesheet" href="style.css" />
            <title>My Team</title>
        </head>
        <body>
            <nav class="navbar navbar-color mb-5">
                <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
            </nav>
            <div class="container">
            <div class="row">`;
        fs.writeFile("./output/myteam.html", html, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
    
    // Adds information input by user to the HTML output skeleton file
    function editHtml(member) {
        return new Promise(function(resolve, reject) {
            const name = member.getName();
            const role = member.getRole();
            const id = member.getId();
            const email = member.getEmail();
            let info = "";
            if (role === "Engineer") {
                const gitHub = member.getGithub();
                info = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Engineer</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">GitHub: ${gitHub}</li>
                </ul>
                </div>
            </div>`;
            } else if (role === "Intern") {
                const school = member.getSchool();
                info = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Intern</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
                </div>
            </div>`;
            } else {
                const officeNumber = member.getOfficeNumber();
                info = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Manager</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">Office number: ${officeNumber}</li>
                </ul>
                </div>
            </div>`
            }
            fs.appendFile("./output/myteam.html", info, function (err) {
                if (err) {
                    return reject(err);
                };
                return resolve();
            });
        });
    };
    // Finished the HTML file
        function finish() {
            const html = ` </div>
            </div>
            
        </body>
        </html>`;
            // Sends the HTML output to myteam.html
            fs.appendFile("./output/myteam.html", html, function (err) {
                if (err) {
                    console.log(err);
                };
            });
        };
    // Initializes the app
        function init() {
            outputHtml();
            addEmployee();
        }

init();