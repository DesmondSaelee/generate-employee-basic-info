const Employee = require('../lib/Employee')
test ('Testing Employee basic info', () => {
    const EmployeeTest = new Employee('Adam', 1, 'Testemail@gmail.com')
    expect(typeof(EmployeeTest)).toBe("object")
})
test ('Testing Employee name attribute', () => {
    const EmployeeTest = new Employee('Adam', 1, 'Testemail@gmail.com')
    expect(EmployeeTest.name).toBe("Adam")
})
test ('Testing Employee id attribute', () => {
    const EmployeeTest = new Employee('Adam', 1, 'Testemail@gmail.com')
    expect(EmployeeTest.Id).toBe(1)
})
test ('Testing Employee email attribute', () => {
    const EmployeeTest = new Employee('Adam', 1, 'Testemail@gmail.com')
    expect(EmployeeTest.email).toBe('Testemail@gmail.com')
})

test ('Testing Employee getName method', () => {
    const EmployeeTest = new Employee('Adam', 1, 'Testemail@gmail.com')
    expect(EmployeeTest.getName()).toBe("Adam")
})
test ('Testing Employee getId method', () => {
    const EmployeeTest = new Employee('Adam', 1, 'Testemail@gmail.com')
    expect(EmployeeTest.getId()).toBe(1)
})
test ('Testing Employee getEmail method', () => {
    const EmployeeTest = new Employee('Adam', 1, 'Testemail@gmail.com')
    expect(EmployeeTest.getEmail()).toBe('Testemail@gmail.com')
})
test ('Testing Employee getRole method', () => {
    const EmployeeTest = new Employee('Adam', 1, 'Testemail@gmail.com')
    expect(EmployeeTest.getRole()).toBe('Employee')
})
