const Engineer = require('../lib/Engineer.js')
test('Testing Engineer object', () => {
    const EngineerTest = new Engineer('Bob', 2, 'Testemail@gmail.com', 'GithubUsername')
    expect(typeof (EngineerTest)).toBe("object")
})
test('Testing Engineer name attribute', () => {
    const EngineerTest = new Engineer('Bob', 2, 'Testemail@gmail.com', 'GithubUsername')
    expect(EngineerTest.name).toBe("Bob")
})
test('Testing Engineer id attribute', () => {
    const EngineerTest = new Engineer('Adam', 1, 'Testemail@gmail.com',  'GithubUsername')
    expect(EngineerTest.Id).toBe(1)
})
test('Testing Engineer email attribute', () => {
    const EngineerTest = new Engineer('Adam', 1, 'Testemail@gmail.com',  'GithubUsername')
    expect(EngineerTest.email).toBe('Testemail@gmail.com')
})

test('Testing Engineer getName method', () => {
    const EngineerTest = new Engineer('Adam', 1, 'Testemail@gmail.com',  'GithubUsername')
    expect(EngineerTest.getName()).toBe("Adam")
})
test('Testing Engineer getId method', () => {
    const EngineerTest = new Engineer('Adam', 1, 'Testemail@gmail.com',  'GithubUsername')
    expect(EngineerTest.getId()).toBe(1)
})
test('Testing Engineer getEmail method', () => {
    const EngineerTest = new Engineer('Adam', 1, 'Testemail@gmail.com',  'GithubUsername')
    expect(EngineerTest.getEmail()).toBe('Testemail@gmail.com')
})
test('Testing Engineer getRole method', () => {
    const EngineerTest = new Engineer('Adam', 1, 'Testemail@gmail.com',  'GithubUsername')
    expect(EngineerTest.getRole()).toBe('Engineer')
})