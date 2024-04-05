let p1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("first Promise resolve");
   },1000);
   resolve(10);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     console.log("Second Promise resolve");
    },2000);
    resolve(20);
 })
 let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     console.log("Third Promise resolve");
    },3000);
    resolve(30);
 })

 let total = 0;
 Promise.all([p1,p2,p3]).then(function(result){
    for(let i in result){
         console.log(total += result[i]);
    }

 }).catch((error)=>{
    console.log(`error is ${error}`);
 });



 