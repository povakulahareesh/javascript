// let emp=[
//     {
//         "eid": 1,
//         "ename": "Rahul",
//         "gender": "Male"
//     },
//     {
//         "eid": 2,
//         "ename": "Sonia",
//         "gender": "Female"
//     },
//     {
//         "eid": 3,
//         "ename": "Priyanka",
//         "gender": "Female"
//     },
//     {
//         "eid": 4,
//         "ename": "Modi",
//         "gender": "Male"
//     },
//     {
//         "eid": 5,
//         "ename": "Amith",
//         "gender": "Male"
//     },
//     {
//         "eid": 6,
//         "ename": "Alia",
//         "gender": "Female"
//     },
//     {
//         "eid": 7,
//         "ename": "Keerty Suresh",
//         "gender": "Female"
//     },
//     {
//         "eid": 8,
//         "ename": "Rashmika Mandanna",
//         "gender": "Female"
//     },
//     {
//         "eid": 9,
//         "ename": "Nayanatara",
//         "gender": "Female"
//     },
//     {
//         "eid": 10,
//         "ename": "Vijay Setupathi",
//         "gender": "Male"
//     },
//     {
//         "eid": 11,
//         "ename": "Vijay",
//         "gender": "Male"
//     },
//     {
//         "eid": 12,
//         "ename": "Ajith",
//         "gender": "Male"
//     },
//     {
//         "eid": 13,
//         "ename": "Pawan kalyan",
//         "gender": "Male"
//     },
//     {
//         "eid": 14,
//         "ename": "Allu Arjun",
//         "gender": "Male"
//     },
//     {
//         "eid": 15,
//         "ename": "Mr Revanth Reddy",
//         "gender": "Male"
//     },
//     {
//         "eid": 16,
//         "ename": "Rukmini",
//         "gender": "Female"
//     },
//     {
//         "eid": 17,
//         "ename": "KTR",
//         "gender": "Male"
//     },
//     {
//         "eid": 18,
//         "ename": "Chandrababu",
//         "gender": "Male"
//     },
//     {
//         "eid": 19,
//         "ename": "Jagan",
//         "gender": "Male"
//     },
//     {
//         "eid": 20,
//         "ename": "DK Shiva",
//         "gender": "Male"
//     }
// ]



// let male_users=emp.filter((emps)=>{
//     return  emps.gender==="Male"
// })
// console.log(male_users.length);




// let users=[
//     {
//         "eid": 1,
//         "ename": "Rahul",
//         "gender": "Male"
//     },
//     {
//         "eid": 2,
//         "ename": "Sonia",
//         "gender": "Female"
//     },
//     {
//         "eid": 3,
//         "ename": "Priyanka",
//         "gender": "Female"
//     },
//     {
//         "eid": 4,
//         "ename": "Modi",
//         "gender": "Male"
//     },
//     {
//         "eid": 5,
//         "ename": "Amith",
//         "gender": "Male"
//     },
//     {
//         "eid": 6,
//         "ename": "Alia",
//         "gender": "Female"
//     },
//     {
//         "eid": 7,
//         "ename": "Keerty Suresh",
//         "gender": "Female"
//     },
//     {
//         "eid": 8,
//         "ename": "Rashmika Mandanna",
//         "gender": "Female"
//     },
//     {
//         "eid": 9,
//         "ename": "Nayanatara",
//         "gender": "Female"
//     },
//     {
//         "eid": 10,
//         "ename": "Vijay Setupathi",
//         "gender": "Male"
//     },
//     {
//         "eid": 11,
//         "ename": "Vijay",
//         "gender": "Male"
//     },
//     {
//         "eid": 12,
//         "ename": "Ajith",
//         "gender": "Male"
//     },
//     {
//         "eid": 13,
//         "ename": "Pawan kalyan",
//         "gender": "Male"
//     },
//     {
//         "eid": 14,
//         "ename": "Allu Arjun",
//         "gender": "Male"
//     },
//     {
//         "eid": 15,
//         "ename": "Mr Revanth Reddy",
//         "gender": "Male"
//     },
//     {
//         "eid": 16,
//         "ename": "Rukmini",
//         "gender": "Female"
//     },
//     {
//         "eid": 17,
//         "ename": "KTR",
//         "gender": "Male"
//     },
//     {
//         "eid": 18,
//         "ename": "Chandrababu",
//         "gender": "Male"
//     },
//     {
//         "eid": 19,
//         "ename": "Jagan",
//         "gender": "Male"
//     },
//     {
//         "eid": 20,
//         "ename": "DK Shiva",
//         "gender": "Male"
//     }
// ]


// console.log(users.length);

// let female_users=[]
//  let i=0
//  while (i<=users.length-1){
//     if (users[i].gender==="Female"){
//         female_users.push(users[i])
//     }
//     i++
//  }
//  console.log(female_users.length);






 
// what is spread operator
// extract and copy
// craete new array based on existance array

//push method

// let uids=[]
// //  |
// //  alias
// for (uid of uids){
//     uids.push(uid)
// }

// let pids = eid .map((eid)=>{
//     return eid;
// })

// console.log(pids);



// let eids=[101,102,103,104]
// let uids=eids; // alias name or point to some object
// uids[0]="rahul"
// console.log(eids);
// console.log(uids);



// let eids=[101,102,103,104]
//  //create new arraay based on existing array
//  let uids =[]
//  for (eid of eids){
// uids.push(eid)
//  }
//  console.log(uids);
//  uids[0]="100"

//  console.log(uids);
//  console.log(eids);



//  let eids=[101,102,103,104]
//  //create new array based on existing array
//  let uids=[...eids]
//  //what is spread operator?-extract &copy
//  //spread operator= applicable to array &object
//  //extract array elements and copy into array
//  console.log(uids);
//  console.log(eids);
 
 
//merging arrays

//what is spread object ? -extract and coppy
// create new array /objects- based on existing
//merge arrays or objects
//extending array elements or objects properties

// let a=[1,2,3,4,5,6,7]; let b=[8,9]
// let c=[...a,          ...b]
// console.log(c);


// let a=[1,2,3,4,5,6,7]; let b=[8,9]
// let c=[...a,22,33,4455,          ...b,44,566,77,8,54,3,32]
// console.log(c);

//  let emp={"eid":101, "ename":"hhh","email":"hh@gmail.com"}
//  let details={"email":"ii@gmail.com","sal":222222}
//  let emp_detailes={...emp,...details}

//  console.log(emp_detailes);
 





//rest operator

//without rest operator


// function add(a,b){
//     console.log("a value:",a, "and b value",b);  
// }
// add(10,20)
// add(10,20,30)
// add(10,20,30,40)
// add(10,20,30,40,50)

//wuth rest operator
 
// function add(a,...b){
//     console.log("a value:",a, "and b value",b);  
// }
// add(10,20)
// add(10,20,30)
// add(10,20,30,40)
// add(10,20,30,40,50)

