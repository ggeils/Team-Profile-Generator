const Employee = require('../lib/employee.js');

test('Can create employee object', () => {
    const employee = new Employee('George', 1, 'gfgeils3@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Can get employee name', () => {
    const employee = new Employee('George', 1, 'gfgeils3@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('Can get employee ID', () => {
    const employee = new Employee('George', 1, 'gfgeils3@gmail.com');
    expect(employee.getId()).toEqual(expect.any(String));
});

test('Can get employee email', () => {
    const employee = new Employee('George', 1, 'gfgeils3@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('Can get employee role', () => {
    const employee = new Employee('George', 1, 'gfgeils3@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 