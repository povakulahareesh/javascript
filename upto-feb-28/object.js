//OBJECT IS NOTHING BUT A =group of key pairs as one entity
// //duplicate keys are not allowed
//group of elements known as array



//  let emp={}//empty object
//  let size=[]//empty array
//  console.log(typeof (size))//object
//  console.log(typeof (emp ) )//object

//create javascript object 



/* js array 
--group of elements or values as one entity
--where allowed duplicates
--where allowed heterogeneous elements
--store based indexing
--insertion order preserved
--iterable object
--we can iterate using for loop,while,do while,for-off


js-object
--group of key :values pairs as one entity.
--duplicate keys are not allowed but duplicate values are allowed
--indexing concept is not applicable
--where allowed heterogeneous elements
--insertion order no guarantee
--js object is not iterable
--we can iterate using for-in
--group of key:value pairs as one entity.
--group of properties as one entity
--property name:property value
--group of data and functionality as one enrtity
--group of data and functionality as one entity

*/


//  let emp={
//     eid:104,
//     name:"hareesh",
//     rollno:223225,

//  }
//  //read-access
//  //object.property
//  console.log(emp.eid)
//  console.log(emp.name)
//  console.log(emp.rollno)
//  console.log(emp.location)//undefined
//   console.log(emp.eid="222")
//   console.log(emp.name="harsha")


// //update

// let emp={
//     eid:104,
//     name:"hareesh",
//     rollno:223225,

//  }
 
// emp.name="harsha"
// console.log(emp)

// //update new property
// emp.location="tirupati"
// console.log(emp)
// //delete
// delete emp.eid
// console.log (emp)


// let emp={
//    eid:104,
//    name:"hareesh",
//    //group of data and funtionality as one entity
//    get_details:function(){
//     console.log("displaying details")
//    }

// }
// console.log(emp)
// console.log(emp.eid)
// console.log(emp.name)
// console.log(emp.location)//undefined
// //t=emp.get_details()
// //console.log(t);
// emp.get_details()
//emp.get_salary()//error



// let enames=['rahul','sonia','jj','oo']//here indexing concept is applicable
// //in array using for-in &for-off
// //print all employee name - using for of
// for (ename of enames){
//     console.log(ename)
// }

//in object we are using only for-in



//knowing object properties


// let emp={
//     eid:104,
//     name:"hareesh",
//     sal:45000,
// }//no indexing//it is not itarable

 
// for( prop in emp){
//     console.log(prop)
// }




//for knowing values

// let emp={
//     eid:104,
//     name:"hareesh",
//     sal:45000,
// }
// //console.log(emp.eid) //this is one method



// //knowing object how much properties have

//  for( keys in emp){    
// //  console.log(emp.prop)// undefined
//  // console.log("ge") //it is optional

//  //know object values
//  console.log(emp[keys])
//  }

//  //next class symbol,,operators,,conditional fow statements//functions


