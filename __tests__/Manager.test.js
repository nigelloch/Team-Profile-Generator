
const Manager = require('../lib/Manager');


test('creates a new intern object', () => {
    const manager = new Manager( 'Nigel', 5, 'nigelloch@gmail.com', 12);


    expect(manager.name).toBe('Nigel');
    expect(manager.id).toBe(5);
    expect(manager.email).toBe('nigelloch@gmail.com');
    expect(manager.officeNumber).toBe(12);
})

test('confirms office number', () => {
    const manager = new Manager( 'Nigel', 5, 'nigelloch@gmail.com', 12);

    expect(manager.officeNumber).toEqual(12);
})

test('confirms the role is manager', () => {
    const manager = new Manager( 'Nigel', 5, 'nigelloch@gmail.com', 12);

    expect(manager.getRole()).toEqual('Manager');
})

