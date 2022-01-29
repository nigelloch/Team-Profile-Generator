const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

function createCards(team) {
    let teamCards = ``;
    for (let i = 0; i < team.length; i++) {
      const teamArray = team[i];
      console.log(teamArray.getRole())
      switch (teamArray.getRole()) {
        case "Manager":
          const manager = new Manager(
            teamArray.name,
            teamArray.id,           
            teamArray.email,
            teamArray.officeNumber,
          );
          teamCards += managerCard(manager);
          break;

        case "Engineer":
          const engineer = new Engineer(
            teamArray.name,
            teamArray.id,
            teamArray.email,
            teamArray.github,
          );
          teamCards += (engineerCard(engineer));
          break;

        case "Intern":
          const intern = new Intern(
            teamArray.name,
            teamArray.id,
            teamArray.email,
            teamArray.school,
          );
          teamCards += (internCard(intern));
          break;
          
      }
    }
    return teamCards;
  }

let managerCard = (Manager) => {
  return `
    <div class="text-center">
        <div class="d-flex mt-5 justify-content-center ">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h3 class="card-title manager-style text-white">${Manager.name}</h3>
                <h4 class="card-title"><i class="fas fa-mug-hot"></i>Manager</h4>
                <div class='text-left'>
                    <ul>
                        <li class='id'>ID: ${Manager.id}</li>
                        <li class='email'>Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                        <li class='office'>Office Number: ${Manager.officeNumber}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
  <div class="row justify-content-center">
    `
}

let engineerCard = (Engineer) => {
  return `
    <div class=" text-center">
            <div class="card" style="width: 18rem">
            <div class="card-body">
              <h3 class="card-title engineer-style text-white">${Engineer.name}</h3>
              <h4 class="card-text"><i class="fas fa-cog"></i>Engineer</h4>
              <div class='text-left'>
                <ul>
                    <li class='id'>ID: ${Engineer.id}</li>
                    <li class='email'>Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                    <li class='github'>Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</li>
                </ul>
            </div>
            </div>
          </div>
        </div>
    `
}

let internCard = (Intern) => {
  return `
    <div class=" text-center">
            <div class="card" style="width: 18rem">
            <div class="card-body">
                <h3 class="card-title intern-style text-white">${Intern.name}</h3>
                <h4 class="card-text"><i class="fas fa-graduation-cap"></i>Intern</h4>
                <div class='text-left'>
                  <ul>
                      <li class='id'>ID: ${Intern.id}</li>
                      <li class='email'>Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                      <li class='office'>School: ${Intern.school}</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
    `
}

function generateTeam(team) {
  return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/22f818f507.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header class='text-center col-12 mb-2 header-style text-white header'>
        <h1>My Team</h1>
    </header>
${createCards(team)}
</div>
</body>
</html>
`;
}

// export markdown to file
module.exports = generateTeam;
