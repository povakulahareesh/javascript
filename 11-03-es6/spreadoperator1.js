
//  let eids=[101,102,103,104]
//  //create new array based on existing array
//  let uids=[...eids]
//  //what is spread operator?-extract &copy
//  //spread operator= applicable to array &object
//  //extract array elements and copy into array
//  console.log(uids);
//  console.log(eids);


 
//what is spread object ? -extract and coppy
// create new array /objects- based on existing
//merge arrays or objects
//extending array elements or objects properties

// merge arrays


// let a=[1,2,3,4,5,6,7]; let b=[8,9]
// let c=[...a,          ...b]
// console.log(c);
 


// let a=[1,2,3,4,5,6,7]; let b=[8,9]
// let c=[...a,22,33,4455,          ...b,44,566,77,8,54,3,32]
// console.log(c);


//  let emp={"eid":101, "ename":"hhh","email":"hh@gmail.com"}
//  let details={"email":"ii@gmail.com","sal":222222}
//  let emp_detailes={...emp,esal:222,  ...details}

//  console.log(emp_detailes);
 

 

 let emp={"eid":101, "ename":"hhh","email":"hh@gmail.com"}
 let details={"email":"ii@gmail.com","sal":222222}
 let emp_detailes={...emp.esal=222,  ...details.job="software"}

 console.log(emp_detailes);
 