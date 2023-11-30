// ===Normal function===
function name() {
    console.log('usman')
}
name()


let username = function () {
    console.log('ayaan');
}
username()


// ====Arrow Function===
let names = (name) => {
    return `My focus ${name} `
}
console.log(names('Web development'))



// ====Another Example===
const userName = prompt('Enter user name')

let Function = () => {
    return `Welcome ${userName}`
}

console.log(Function())