//we are converting  positive data  like credit card no ,password or email id , mobile no into hashed format code only with the help of bcryptjs and respective methods
//we are importing the bcrypt module
//Salting is typically done using Node.js with the bcrypt library, 
// commonly used for securely hashing passwords.
//to covert user sensitive data into hashed format we are going to use bcrypt module
// what is bcript js ? to hash our sensitive data  we are using bcript js

const bcrypt=require('bcrypt')
let user ={
// must use string format

    email:"rahul@gmail.com",
    cc:"9876543212345678987654",
    cvv:"123432"
}

//we convert user sensitive data into hashed format code

// we need to hash our data  //with the help of bcrypt module(bycrypt module)
// what is the use of salt Number


console.log(user);
//how many times we want to generate the text using salt
//to hash sensitive data we are using bcrypt
let salt =bcrypt.genSaltSync(10)
let new_CC=bcrypt.hashSync(user.cc,salt)
 let new_email=bcrypt.hashSync(user.email,salt)
let new_cvv=bcrypt.hashSync(user.cvv,salt)
 //new we are getting unreadable  format hased code
console.log(new_CC);
 console.log(new_email);
console.log(new_cvv);

// let users={...user,cc:new_CC,cvv:new_cvv}
//now we are going to use spread operator
//what is spread operator ? extract user object  properties  and copy into another object
// extract all user object properties into  another object
//object doesnot allows duplicate properties&keys


 user={...user,cc:new_CC,cvv:new_cvv,email:new_email}
console.log(user);




// let users={...user,cc:new_CC,cvv:new_cvv,email:new_email}
// console.log(users);




//notes 
/**
 * npm init -y
 * npm i bcrypt
 * npm install bcrypt js
 * we are using bcrypt js methods
 * there are two types 
 * sync is not there means async method
 * we want to execute async -->we have to use call back
 * sync & async
 * 
 * 
 */
//  we rae importing the bcrypt module


// const bcrypt=require("bcrypt")
// let user={

//     email:"hh@gmail.com",
//     cc:"5432345676543456",
//     cvv:"5432"
// }

// console.log(user);
// let  salt=bcrypt.genSaltSync(10)
// let new_CC=bcrypt.hashSync(user,cc,salt)
// console.log(new_CC);

// user={
//     ...user,cc:new_CC
// }

// console.log(user);