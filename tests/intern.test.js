const Intern = require('../lib/intern.js');

test('Can create an Intern object', () => {
    const intern = new Intern('George', 1, 'gfgeils3@gmail.com', 'UT Austin');
    expect(intern.school).toEqual(expect.any(String));
});

test('Can get intern school', () => {
    const intern = new Intern('George', 1, 'gfgeils3@gmail.com', 'UT Austin');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Can get role of intern', () => {
    const intern = new Intern('George', 1, 'gfgeils3@gmail.com', 'UT Austin');
    expect(intern.getRole()).toEqual("Intern");
}); 