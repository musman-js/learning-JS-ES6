// =======Promises=====

const value =  true;
let prom = new Promise(function(accept , reject){
    if(value){
        accept('Successful!');
    }
    else{
        reject('Rejected!');
    }
})

console.log(prom);


let funct = (value) =>{
        return new Promise(function(accept , reject){
            console.log('Pending');
        setTimeout(()=>{
            if(value){
                accept('Successful!');
            }
            else{
                reject('Rejected!');
            }
        } , 1000)
    })
}

let onFullFilment  = (result)=>{
  console.log(result);
}

let onNotFullFilment = (error) => {
       console.log(error);
}

funct(true).then(onFullFilment).catch(onNotFullFilment);
