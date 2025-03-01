
// let emps=[101];
// lenth_of_array=emps.length;
// if (lenth_of_array<=0)
// {
//     console.log("array is emply")
// }
// else{
//     console.log("array is not empty")
//     console.log("array lenth is",lenth_of_array)
// }



//arrays


//add new element at the begin of the array

// var movies=['aa','ah','ii'] 
// movies .unshift("33")
// console.log(movies)

//add Elementend of the Array


//  var movies=['aa','ah','ii'] 
//  movies .push("33")
//  console.log(movies)



//remove element of begining of the array

// var movies=['aa','ah','ii'] 
// movies .shift()
// console.log(movies)

//remove element at end of the array
// 
// // 
// var movies=['aa','ah','ii'] 
// movies .pop()
// console.log(movies)



// // slice
// var movies=['aa','ah','ii'] 

// console.log (movies)

// console.log(movies.slice(0,2))






// ///concatination
// let movies=['aa','ah','ii','ll','oo'] 
// let names=movies.concat('haresh')
// console.log(names)
// console.log(movies)







// // indexing
// let movies=['aa','ah','ii','ll','oo'] 
// console.log(movies.indexOf("ll"))





//  //indexing  //knowing element index
// let movies=['aa','ah','ii','ll','oo'] 
// console.log(movies.indexOf("ll"))



//reverse method


// let movies=['aa','ah','ii','ll','oo'] 
// movies.reverse()
// console.log(movies)




// let movies=['aa','ah','ii','ll','oo'] 
// movies.reverse()
// console.log(movies.indexOf("ii"))
//if specified element not available it return -1



// let movies=['aa','ah','ii','ll','oo'] 
// movies.reverse()
// console.log(movies.indexOf("77"))

//js array es6 methods
//eids push
//each()
//filter
//reduce
//call
//apply



/* 
object 

*/

// let emp={
//     eid:102,
//     ename:'rahul',
//     esal:4500

// }

// console.log(Object.keys(emp))


// let emp={name:"sai",eid:101,esal:200000}

// console.log(Object.keys(emp));
// console.log(Object.values(emp));
// console.log(Object.freeze(emp));
// console.log(Object.entries(emp));   


// let a=["ss",'ww',"ww"]


// if(a.length<0){
//     console.log("not empty array")
// }
// else{

//    console.log("empty array")


// }


//concatination

// let a=[22,22,22,33,33,44,44,44,]
// let b=a.concat('99')
// console.log(
//console.log(b)

// //specified value not there other wise -1
// let a=[22,33,66,77,88,99,]

// console.log(a.indexOf(999))


// let a=['uu','jj','oo','oo','ll','kk',]

// console.log(a.indexOf("oo"))


/*

es6 methods
Map()
Filter()
for each ()
find()
reduce()


*/

//join method



//  let a=['uu','jj','oo','oo','ll','kk',]
//  console.log(a.join('*'))

// //object
// let emp={
    
//     id:102,
//     name:"rahul",
//     sal:111111
// }



// /*object.values()//return an array of values of object
// object.keys()//return an array of keys of object
// object.assign()
// */
// console.log(Object.keys(emp).length)
// console.log(Object.values(emp).length)

// console.log(Object.keys(emp).length>0)


// console.log(Object.values(emp).length>0)


// let emp={
    
//     id:102,
//     name:"rahul",
//     sal:111111
// }

// let user={}

// if(Object.keys(emp).length>0){
//     console.log ("given object is not empty")
// }
// else{
//     console.log("givenobject is empty")
// }




// let emp={
    
//     id:102,
//     name:"rahul",
//     sal:111111,
//     sal:881111,//duplicative keys are not allowed
// }

// console.log(Object.keys(emp).length)
// console.log(Object.values(emp).length)



//let emp={
    
    //id:102,
    //name:"rahul",
    //sal:111111,
//duplicative keys are not allowed
//}
//let emp_str='{"id":22,"name":"kdddk", "sal":45000}'
//console.log(JSON.parse(emp_str))

//let enames=['ee','ee','rr','ff',]
//document.write(JSON.parse(enames)) //FOR SRING TO OBJECT
//DOCUMENT.WRITE(ENAMES)
//document.write(JSON.stringify(enames))//FOR OBJECT TO STRING
//document.write(JSON.stringify(emp));



// let emp_str='{"id":102,"name":"rahul","sal":111111}'
//  document.write(JSON.parse(emp_str))


