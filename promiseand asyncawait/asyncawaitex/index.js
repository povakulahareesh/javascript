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
// responsibility of createemployee  insert data into database  or insert object into array
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
//am going to execute my function asyncnroneslly
//wt is asyncawait . even  if we want use  async await keyword  your function has to use async keyword
// if any function return one  promise object  we can use async await also
let execute=async()=>{
    // at the time of create employee am going to pass  one object
    // until completing the createemployee task  i need to wait then i need to execute get employees
    // without async awit we get only two data's
    //which statement we want to execute first we give await
    //when we can use async await ur function return one promise object
    //our function cant return  promise object   we can't use  async await
     await createemployee({ eid:103,ename:"hari",esal:45611}) //it will take 4sec 
    getemployee()                                        // 1sec
}
execute()



//async programming we are achiveing throw the  callback and promise, and async await


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

/** blue print of async await 
 * // if any function return one  promise object  we can use async await also
 * let execute =()=>{
 *  first am going to  execute my  createemployee function at the time of create employee am going go pass some object
 *  after create employee  am going to execute  getemployee
 * am going to my function asyncronessly  
 * which function you want to execute first  that function am going to use await  because it will take time
 *  await means until complete the transation please wait
 * 
 * 
 * }
 * execute()
 * 
 * //closure concept is pending
 * 
*/

/**
 * // it is in react js 
 * axios .get (url) 
 * .then(sucess)
 * .catch(failure)
*/