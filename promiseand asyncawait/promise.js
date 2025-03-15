let employees=[
    {"id":45678,"ename":"harisha",sal:7777},
    {"id":4578,"ename":"hari",sal:777}
    
] 
let createemployee=(emp)=>{
    return new Promise((resolve, reject) => {
       setTimeout (()=>{
        let flag=true;
        // let flag=false;
        flag? resolve("data inserted"): reject("failed")
        employees.push(emp)
       },4000)
    })
}
// .then representing success 
//  .catch representing failure
createemployee({"id":102,"name":harsha,sal:90000}).then((msg)=>{
    console.log(msg);
    
}).catch((err)=>{console.log(err);
})
//if any function return one promice object will go .then .catch
// we have create employee function am invoking create employee function








//promise
//success and failure is a function
//success means message
//failure means error
// let gotomovie=(success,failure)=>{
//     let amount =800
//     if(amount>500){
//         success("goo")
//     }
//     else{
//         failure("pooo")
//     }
//  }
//  gotomovie((msg)=>{
//     console.log(msg);
    
//  },(err)=>{console.log(err);
//  })

// first function representing success 
//second function representing representing failure