const inquirer = require("inquirer");
const generateTeam = require("./dist/generateTeam.js");
const fs = require("fs");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Employee = require("./lib/Employee.js");
let teamMembers = [];

const createManager = () => {
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
  return inquirer
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
        message: "What is the Engineer's Github username?",
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
        message: "What is the Intern's school name?",
        name: "github",
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
      const employee = new Employee(
        result.name,
        result.id,
        result.email,
        result.github,
        result.school
      );
      teamMembers.push(employee);

      if (result.addEmployees) {
          return createEmployee(teamMembers);
    } else {
        return teamMembers;
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
    .then(teamMembers => {
        return generateTeam(teamMembers);
    })
    .then(html => {
        return writeToFile('./dist/index.html', html)
    })
    .catch(err => {
        console.log(err);
    });
