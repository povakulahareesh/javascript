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

let execute = async ()=>{
     await createemployee(({"id":102,"name":"hari",sal:566777}))
}
 execute()
// .then representing success 
//  .catch representing failure

//if any function return one promice object will go .then .catch
// we have create employee function am invoking create employee function