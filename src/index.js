// link to page 
const myTeam = ("myTeam.html");

//node modules
const inquirer = require("inquirer");
const fs = require("fs");

//team profiles
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("../lib/Manager");

//team array
const groupArray = []:

function initialized() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: `Name of team member?`
        },

        {
            type: "input",
            name: "id",
            message: `What is the member ID?`
        },

        {
            type: "input",
            name: "email",
            message: `What is the members email?`
        },

        {
            type: "input",
            name: "officeNumber",
            message: `What is members office number?`
        },
    ])
}

function buildgroup() {
    inquirer.prompt({
        type:"input",
        name:"name",
        message: `Who is the manager of team?`
    },
    {
        type:"input",
        name:"ID",
        message:`What is member ID?`
    },
    {
        type:"input",
        name:"email",
        message:"Members email?"
    },
    {
        type:"input",
        name:"officeNumber",
        message: `What is office number?`
    },

)}
function buildgroup() {
    inquirer.prompt ({
        {
            type: “list”,
            name: “role”,
            message: “Would you like to add another member to your group?“,
            choices: [“Intern”, “Manager”, “Engineer”, “Employee”, “None”]
        }
    ).then((answer) => {
        if(answer.role === “Engineer”) {
            return inquirer.prompt ([
                {
                    type: “input”,
                    name: “name”,
                    message: `What is the engineer’s name?`
                },
                {
                    type: “input”,
                    name: “id”,
                    message: `What is the engineer’s ID number?`
                },
                {
                    type: “input”,
                    name: “email”,
                    message: `What is the engineer’s email?`
                },
                {
                    type: “input”,
                    name: “github”,
                    message: `What is the engineer’s Github?`
                }
    ]) .then((responses) => {
        let engineer = new Engineer(responses.name, responses.id, responses.email, responses.github);
            employees.push(engineer)
            buildgroup();
            })
        }
        if(answer.role === “Intern”) {
            return inquirer.prompt ([
                {
                    type: “input”,
                    name: “name”,
                    message: `What is the intern’s name?`
                },
                {
                    type: “input”,
                    name: “id”,
                    message: “What is the intern’s id?”
                },
                {
                    type: “input”,
                    name: “email”,
                    message: `What is the intern’s email?`
                },
                {
                    type: “input”,
                    name: “school”,
                    message: `Where did/does the intern go to school?`
                }
            ]) .then((responses) => {
                let intern = new Intern(responses.name, responses.id, responses.email, responses.github);
                employees.push(intern)
                buildgroup();
            })
        }
        if (answer.role === “Manager”) {
            return inquirer.prompt ([
                {
                    type: “input”,
                    name: “name”,
                    message: `What is the manager’s name?`
                },
                {
                    type: “input”,
                    name: “id”,
                    message: `What is the manager’s id number?`
                },
                {
                    type: “input”,
                    name: “email”,
                    message: `What is your manager’s email?`
                },
                {
                    type: “input”,
                    name: “officeNumber”,
                    message: `What is the manager’s office number?`
                }
            ]) .then((responses) => {
                let manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
                employees.push(manager)
                buildgroup();
            })
        }
        if (answer.role === “Employee”) {
            return inquirer.prompt ([
                {
                    type: “input”,
                    name: “name”,
                    message: `What is the employee’s name?`
                },
                {
                    type: “input”,
                    name: “id”,
                    message: `What is the Employee’s id number?`
                },
                {
                    type: “input”,
                    name: “email”,
                    message: “What is the employee’s email?“,
                },
                {
                    type: “input”,
                    name: “officeNumber”,
                    message: `What is the employee’s office number?`
                }
            ]) .then((responses) => {
                let employees = new Employee(responses.name, responses.id, responses.email, responses.officeNumber);
                employees.push(employees)
                buildgroup();
            })
        }
        if (answer.role === “No”) {
            console.log(employees)
            return writeToFile(mygroup);
        }
    });
}
function writeToFile(data) {
    fs.writeFile(“./group.html”, data => {
        if(err) {
            throw(err)
        }
        console.log(“My team page has been built”)
    });
    // open the group html
};
initialize()
.then((responses) => {
    const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber);
    buildgroup();
});

    
   
       
          
     
               
      
        




   

