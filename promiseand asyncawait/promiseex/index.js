let employees =[
    {eid:101,ename:"hareesh",esal:34567},
    {eid:11,ename:"ha",esal:347}
]
 //at the time of create employee am passing one object and am invoking my function with (emp)
// passing function as aargument  known as call back
//create new employee object

  //  set timeout it is inbult function execute provided function after certain time interval
 
// iterate array and display data in the form of html table

//let receive the object
let createemployee=(emp)=>{
    //create employee function return one promise object
    // return one promise object
    //it taking to parameters resolve and reject
    // resolve callback and reject callback
    //resolve callback used to  resolve the problems
    //reject callback is nothing but a error message
//we represent time using setimeout()-->it is a inbuilt function and provided function will execute after time interval
    return new Promise((resolve,reject)=>{
        //iwant to represent time using settimeout
        setTimeout(() => {
// let flag=false;
//if data is inserted true otherwise false
let flag=true;

flag?resolve("data inserted"):reject("data not inserted")
employees.push(emp)

            
        }, 4000);
    })
}
//iterate array and construct the  table data 
let getemployee=()=>{
    setTimeout(() => {
        let rows=""
        for(emp of employees){
rows=rows+` <tr>
<td>${emp.eid}</td>
<td>${emp.ename}</td>
<td>${emp.esal}</td>
</tr>`
        }
        document.getElementById("table").innerHTML=rows
    }, 1000);
}

//we are passing object as a argument
// if  any function return one  promise object will go (.then) and (.catch)  
//.then representing success or resolve
//.catch representing failure nothing but reject
// how to receive the .then and .catch pass one arrow function
createemployee(  {eid:1,ename:"h",esal:3})
//what is the message here -->data inserted
.then((msg)=>{console.log(msg);
    //when you want to execute get employee  if data inserted successfully then only want execute get employee
     getemployee()
    //error means here failed
}).catch((err)=>{err})
// getemployee()



/**
 * blue print of promise 
 * let create employee=()={
 * return new promise ((resolve, reject)=>{
 * let flag =true/false
 * flag?resolve("r"):reject("false")
 * 
 * 
 * })}
 * create (emp).then().cxatch
 * 
 */