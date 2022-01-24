const Employee = require('../lib/Employee');




test('creates an employee object', () => {
    const employee = new Employee('Nigel', 5, 'nigelloch@gmail.com');

    expect(employee.name).toBe('Nigel');
    expect(employee.id).toBe(5);
    expect(employee.email).toBe('nigelloch@gmail.com');
})


test('assigns employee id', () => {
    const employee = new Employee('Nigel', 5, 'nigelloch@gmail.com');

    expect(employee.id).toEqual(expect.any(Number));
});

test('assigns employee email address', () => {
    const employee = new Employee('Nigel', 5, 'nigelloch@gmail.com');

    expect(employee.email).toEqual(expect.any(String));
})