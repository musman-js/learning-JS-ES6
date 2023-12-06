// ===Normal Object===

const Name = 'Muhammad Usman';
const career = 'Web Developer'
let Obj = {
    name: name,
    career: career
}



// ===By using Object Literals===
const userName = 'Usman';
const city = 'Karachi';

let object = {
    userName,
    city
}

console.log(object);


// Another Example
const name = prompt('Enter username here...');
// const useremail = prompt('Enter email here....');
const n = 'name';
const love = 'laiba';
const u = 'email';
let obj = {
    [n]: name,
    [u]: 'usman2037966@gmail.com',
    love: 'laiba',
    pyar: function () {
        return `${this.name} loves ${this.love} `
    }
}

console.log(obj);
console.log(obj.pyar());



// ===Another Example==
let firstName =  'Muhammad' ;
let lastName = 'Usman';

let fullName = (fname , lname) => {
  let fullName = fname + " " + lname
  return {fullName : fullName}  
}

console.log(fullName(firstName , lastName))
