async function name1(){
    const response =  fetch("json.data.txt")
    const student =   response.text;
      
    return student;
}


console.log("number:1")
name1().then((result)=>{
    console.log(result);
})
console.log("number:4")