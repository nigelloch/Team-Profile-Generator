const Employee = require('..lib/Employee.js');
const { expect } = require('@jest/globals');



test('creates an employee object', () => {
    const employee = new Employee('Nigel', 5, 'nigelloch@gmail.com ');

    expect(employee.name).toBe(String);
    expect(employee.id).toBe(Number);
    expect(employee.email).toBe(String);
})