fetch('data.txt').then((response)=>{
    return response.text();
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
})


//JSON Data 
let sendValue = (e) => {
    var obj = {
        title: document.getElementById("title").value,
        body: document.getElementById("body").value,
        userId: document.getElementById("User").value
    }


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => {
            console.log(error)
        })

}