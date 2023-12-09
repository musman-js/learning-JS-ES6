let arr = ['Usman', 16, 'Laiba'];
let [name, age, love] = arr;
console.log(name);


let user = ['Usman', 16, [25000, 'Web Development']];
let [name, ...args] = user;
console.log(name, args)



let user = (name, age) => {
    return [name, age];
}
console.log(user('Usman', 16))


const name = "usman";
const age = 16;
const career = 'Web developer';
let user = (username, userage) => {
    return `${username} carrer is ${career} and his age is ${age}`
}

let result = user(name, age)
console.log(result)