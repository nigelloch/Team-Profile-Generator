const inquirer = require("inquirer");
const generateTeam = require("./dist/generateTeam.js");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Employee = require("./lib/Employee.js");
let teamMembers = [];

const createManager = async() => {
  return inquirer 
    .prompt([
      {
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "This is required!";
          }
        },
      },
      {
        type: "input",
        message: "What is the Manager's ID?",
        name: "id",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "This is required!";
          }
        },
      },
      {
        type: "input",
        message: "What is the Manager's email address?",
        name: "email",
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                return 'A valid email address is required!'
            }
        }
      },
      {
        type: "input",
        message: "What is the Manager's Office Number?",
        name: "office",
        validate: (value) => {
            if (value) {
              return true;
            } else {
              return "This is required!";
            }
          },
        },
    ])
    .then((result) => {
      const manager = new Manager(
        result.name,
        result.id,
        result.email,
        result.office
      );
      teamMembers.push(manager);
    });
};

const createEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What role is this employee?",
        name: "role",
        choices: ["Intern", "Engineer"],
      },
      {
        type: "input",
        message: "What is the Employee's name?",
        name: "name",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "This is required!";
          }
        },
      },
      {
        type: "input",
        message: "What is the Employee's ID?",
        name: "id",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "This is required!";
          }
        },
      },
      {
        type: "input",
        message: "What is the Employee's email address?",
        name: "email",
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                return 'A valid email address is required!'
            }
        }
      },
      {
        type: "input",
        message: "What is the Employee's Github username?",
        name: "github",
        when: (input) => input.role === "Engineer",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "This is required!";
          }
        },
      },
      {
        type: "input",
        message: "What is the Employee's school name?",
        name: "school",
        when: (input) => input.role === "Intern",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "This is required!";
          }
        },
      },
      {
        type: "confirm",
        message: "Do you want to add another employee?",
        name: "addEmployees",
        default: false,
      },
    ])
    .then((result) => {
      if (result.role === 'Intern') {
        const newIntern = new Intern(result.name, result.id, result.email, result.school)
        teamMembers.push(newIntern);
      } else {
        const newEngineer = new Engineer(result.name, result.id, result.email, result.github)
        teamMembers.push(newEngineer);
      } 

      if (result.addEmployees) {
          createEmployee();
    } else {
       writeToFile('./dist/index.html', generateTeam(teamMembers));
        }
    });
};

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Your Team Site has been generated!");
  });
}

createManager()
    .then(createEmployee)

