const Engineer = require('../lib/Engineer');




test('creates a new engineer object', () => {
    const engineer = new Engineer( 'Nigel', 5, 'nigelloch@gmail.com', 'nigelloch');


    expect(engineer.name).toBe('Nigel');
    expect(engineer.id).toBe(5);
    expect(engineer.email).toBe('nigelloch@gmail.com');
    expect(engineer.githubEl).toBe('nigelloch');
    
})

test('verifies the github username is a string', () => {
    const engineer = new Engineer('Nigel', 5, 'nigelloch@gmail.com', 'nigelloch');

    expect(engineer.githubEl).toEqual(expect.any(String));
})

test('confirms the role is engineer', () => {
    const engineer = new Engineer('Nigel', 5, 'nigelloch@gmail.com', 'nigelloch');

    expect(engineer.getRole()).toEqual('Engineer');
}) 


