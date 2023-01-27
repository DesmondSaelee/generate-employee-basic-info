const Manager = require('../lib/Manager.js')
test('Testing Manager object', () => {
    const ManagerTest = new Manager('Adam', 1, 'Testemail@gmail.com', 'officeNumber')
    expect(typeof (ManagerTest)).toBe("object")
})
test('Testing Manager name attribute', () => {
    const ManagerTest = new Manager('Adam', 1, 'Testemail@gmail.com', 'officeNumber')
    expect(ManagerTest.name).toBe("Adam")
})
test('Testing Manager id attribute', () => {
    const ManagerTest = new Manager('Adam', 1, 'Testemail@gmail.com',  'officeNumber')
    expect(ManagerTest.Id).toBe(1)
})
test('Testing Manager email attribute', () => {
    const ManagerTest = new Manager('Adam', 1, 'Testemail@gmail.com',  'officeNumber')
    expect(ManagerTest.email).toBe('Testemail@gmail.com')
})

test('Testing Manager getName method', () => {
    const ManagerTest = new Manager('Adam', 1, 'Testemail@gmail.com',  'officeNumber')
    expect(ManagerTest.getName()).toBe("Adam")
})
test('Testing Manager getId method', () => {
    const ManagerTest = new Manager('Adam', 1, 'Testemail@gmail.com',  'officeNumber')
    expect(ManagerTest.getId()).toBe(1)
})
test('Testing Manager getEmail method', () => {
    const ManagerTest = new Manager('Adam', 1, 'Testemail@gmail.com',  'officeNumber')
    expect(ManagerTest.getEmail()).toBe('Testemail@gmail.com')
})
test('Testing Manager getRole method', () => {
    const ManagerTest = new Manager('Adam', 1, 'Testemail@gmail.com',  'officeNumber')
    expect(ManagerTest.getRole()).toBe('Manager')
})