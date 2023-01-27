const Intern = require('../lib/Intern.js')
test('Testing Intern object', () => {
    const InternTest = new Intern('Adam', 1, 'Testemail@gmail.com', 'schoolName')
    expect(typeof (InternTest)).toBe("object")
})
test('Testing Intern name attribute', () => {
    const InternTest = new Intern('Adam', 1, 'Testemail@gmail.com', 'schoolName')
    expect(InternTest.name).toBe("Adam")
})
test('Testing Intern id attribute', () => {
    const InternTest = new Intern('Adam', 1, 'Testemail@gmail.com',  'schoolName')
    expect(InternTest.Id).toBe(1)
})
test('Testing Intern email attribute', () => {
    const InternTest = new Intern('Adam', 1, 'Testemail@gmail.com',  'schoolName')
    expect(InternTest.email).toBe('Testemail@gmail.com')
})

test('Testing Intern getName method', () => {
    const InternTest = new Intern('Adam', 1, 'Testemail@gmail.com',  'schoolName')
    expect(InternTest.getName()).toBe("Adam")
})
test('Testing Intern getId method', () => {
    const InternTest = new Intern('Adam', 1, 'Testemail@gmail.com',  'schoolName')
    expect(InternTest.getId()).toBe(1)
})
test('Testing Intern getEmail method', () => {
    const InternTest = new Intern('Adam', 1, 'Testemail@gmail.com',  'schoolName')
    expect(InternTest.getEmail()).toBe('Testemail@gmail.com')
})
test('Testing Intern getRole method', () => {
    const InternTest = new Intern('Adam', 1, 'Testemail@gmail.com',  'schoolName')
    expect(InternTest.getRole()).toBe('Intern')
})