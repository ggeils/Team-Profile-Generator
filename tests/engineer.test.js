const Engineer = require('../lib/engineer.js');

test('Can create engineer object', () => {
    const engineer = new Engineer('George', 1, 'gfgeils3@gmail.com', 'ggeils');
    expect(engineer.github).toEqual(expect.any(String));
});

test('Can get engineer GitHub', () => {
    const engineer = new Engineer('George', 1, 'gfgeils3@gmail.com', 'ggeils');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Can get role of engineer', () => {
    const engineer = new Engineer('George', 1, 'gfgeils3@gmail.com', 'ggeils');
    expect(engineer.getRole()).toEqual("Engineer");
});