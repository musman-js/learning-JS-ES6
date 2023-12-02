// ====Rest Operator===
function sum(name , ...args)
{
    let value = 0;
    for(let i in args){
     value+=args[i]
  }
  document.write(`Hello ${name} ${value}`)
}

sum('usman' , 20,30)


// ==Spread Operator===
function add(name, ...args) {
    let value = 0;
    for (let i in args) {
        value += args[i]
    }
    console.log(`Hello ${name} ${value}`)
}

const arr = [20, 30]
add('usman', ...arr);
