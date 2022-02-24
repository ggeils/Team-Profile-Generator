const Manager = require('../lib/manager.js');

test('Can create manager object', () => {
    const manager = new Manager('George', 1, 'gfgeils3@gmail.com', 2);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Can get role of manager', () => {
    const manager = new Manager('George', 1, 'gfgeils3@gmail.com', 2);
    expect(manager.getRole()).toEqual("Manager");
}); 