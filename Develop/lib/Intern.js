const Employee = require('Employee.js');
class Intern extends Employee {
    constructor (name, Id ,email, schoolName){
        super(name, Id, email)
        this.schoolName = schoolName
    }
    getSchoolName(){
    return this.schoolName
    }
    getRole(){
        return 'Intern'
    }
}
module.exports = Intern