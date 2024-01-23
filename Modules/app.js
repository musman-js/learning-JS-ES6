// import {jname , age , username} from "./main.js"

// // console.log(jname)
// // console.log(age)

// let name  = "Ayaan"

// export{name}


//  export let age = (name , age) => {
//     console.log(`${name} is ${age} old!`)
// }

// export class name {
//     constructor(username){
//         console.log(`${username} is very beautiful so eligent just looking like a Wow!`);
//     }
// }



const button = document.getElementById("btn")
let userInformation = document.getElementById("UserInformation");

let getValue = () => {
    const userName = prompt("Enter username");
    const userAge = prompt("Enter user Age");

    userInformation.innerHTML = `
    <div class="border w-40">
           <li> <p>${userName}</p> <br>
           <p>${userAge}</p> </li>
       </div> `
}
