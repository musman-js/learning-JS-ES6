class User {
    constructor(){
        console.log("Muhammad Usman");
    }

    name(){
        document.write(`<h3>Muhammad Usman</h3>`)
    }
}

class UserName extends User {
    constructor(){
        super()
        console.log("Ayaan")
    }
}

let userName = new UserName()
userName.name()






class company {
    CEO( name , salary){
        this.name = name;
        this.salary = salary;
        document.write(`<h2>CEO</h2>  <br> Name : ${this.name} <br> Salary :  ${this.salary} ` )
    }
}

class Manager extends company{
}


let user = new Manager()
user.CEO('Muhammad Usman' , 50000);
