const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, userSchool) {
        super(name, id, email);
        this.school = userSchool
    }

    getRole () {
        return "Intern";
    }

    getSchool() {
        return this.school
    }
};

module.exports = Intern;