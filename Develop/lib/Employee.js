// creating class variables with values.
class Employee {
constructor(name,Id,email){
    this.name = name
    this.Id = Id
    this.email = email
} 
// creating methods to return values.
getName(){
    return this.name
}
getId(){
    return this.Id

}
getEmail(){
    return this.email
}

getRole(){
    return 'Employee'
}

}
//exporting info.
module.exports = Employee