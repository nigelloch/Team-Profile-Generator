const Intern = require('../lib/Intern');




test('creates a new intern object', () => {
    const intern = new Intern( 'Nigel', 5, 'nigelloch@gmail.com', 'University of Texas');


    expect(intern.name).toBe('Nigel');
    expect(intern.id).toBe(5);
    expect(intern.email).toBe('nigelloch@gmail.com');
    expect(intern.school).toBe('University of Texas');
})

test('confirms the role is intern', () => {
    const intern = new Intern('Nigel', 5, 'nigelloch@gmail.com', 'University of Texas');

    expect(intern.getRole()).toEqual('Intern');
}) 

test('confirms the school name', () => {
    const intern = new Intern('Nigel', 5, 'nigelloch@gmail.com', 'University of Texas');

    expect(intern.getSchool()).toEqual('University of Texas');
}) 
