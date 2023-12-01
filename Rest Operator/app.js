// ===Normal Function==
function sum()
{
    let sum = 0
    for(let i in arguments){
        sum += arguments[i]
    }
    console.log(sum)
}

sum('Usman',30,20)


// ====By Using Rest Operator===
function add(name ,career, ...args)
{
    console.log(arguments);
    let addNum = 0;
    for(let a in args){
        addNum += args[a]
    }
    document.write(`Hello ${name} ${career} : ${addNum} <br>`)
}

add('Muhammad Usman' ,'Frontend-Developer' ,20,30 );
add('Ayaan' ,'CIT Specialist' ,73,34);
