const Employee = require('./Employee');
class Engineer extends Employee {
    constructor (name, Id ,email, Github){
        super(name, Id, email)
        this.Github = Github
    }
    getGithub(){
    return this.Github
    }
    getRole(){
        return 'Engineer'
    }
}
module.exports = Engineer