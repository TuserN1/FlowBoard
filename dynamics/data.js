let test =[]
fetch("https://flowboard-api-virid.vercel.app/cards")
.then(Response=>Response.json())
.then((data)=>{
     test=[...data]
     console.log(test);
     return test
     
    })
    console.log(test);

// function test(a){
// console.log(a);

// }
