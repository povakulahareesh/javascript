let employees =[
    {eid:101,ename:"hareesh",esal:34567},
    {eid:11,ename:"ha",esal:347}
]
 //at the time of create employee am passing one object and am invoking my function with (emp)
// passing function as aargument  known as call back
//create new employee object
let createemployee=(emp,callback)=>{
  //  set timeout it is inbult function execute provided function after certain time interval
setTimeout(() => {
    employees.push(emp)
    callback()
    
}, 4000);
} 
// iterate array and display data in the form of html table
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


createemployee(   {eid:10,ename:"harsh",esal:367},getemployee)
// getemployee()