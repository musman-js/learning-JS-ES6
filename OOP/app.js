// ==========OOP==========
class Name{
    greeting(){
        console.log('Muhammad Usman')
    }
}

let name = new Name
name.greeting()


class obj{
    career(){
        console.log('Web DEvelopment');
    }

    studies(){
        console.log('1st year student');
    }
}

let future = new obj;
future.career()
future.studies()



// *************Types of OOP**************
//constructor Function
//constructor Function
//static Function


class city {
    // ===constructor fucntion doesnot need to be call=====
    constructor(name, age) {
        this.names = name;
        this.age = age;
        console.log("Karachi")
    }

    country() {
        console.log(`${this.names} Lives in Pakistan and his age is ${this.age}`)
    }

    static name(){
         console.log('Software Engineer!')
    }
}
let cities = new city("laiba" , 16);
let country = new city("Usman" , 16);
cities.country()
country.country()
city.name()