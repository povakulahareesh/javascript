// const bcrypt = require('bcrypt');

// let user = {
//     uid: 101,
//     cc: '1234567812345678',
//     password: 'ILoveIndia'
// };

// console.log("Original User:", user);

// let salt = bcrypt.genSaltSync(10);
// let new_CC = bcrypt.hashSync(user.cc, salt);
// let new_pwd = bcrypt.hashSync(user.password, salt);

// console.log("Original CC:", user.cc);
// console.log("Hashed CC:", new_CC);

// user = { ...user, cc: new_CC, password: new_pwd };
// console.log("Updated User:", user);




// const bcrypt = require('bcrypt')

// let user={
//     uid:101,
//     cc:'1234567812345678',
//     password:'ILoveIndia'
// }
// console.log(user)
// let salt =bcrypt.genSaltSync(10)
// let new_CC=bcrypt.hashSync(user.cc,salt)
// let new_pwd=bcrypt.hashSync(user.password,salt)

// console.log(user.cc)
// console.log(new_CC)

// user={...user,cc:new_CC,password:new_pwd}
// console.log(user)




// const bcrypt = require('bcrypt')

// let user={
//     uid:"101",
//     cc:'1234567812345678',
//     password:'ILoveIndia'
// }

// let saltCC=bcrypt.genSaltSync(10)
// let saltuid=bcrypt.genSaltSync(10)
// let saltpawword =bcrypt.genSaltSync(10)
// let new_CC=bcrypt.hashSync(user.cc,salt)
// let new_uid=bcrypt.hashSync(user.uid,salt)
// let new_pd=bcrypt.hashSync(user.password,salt)
// console.log(new_CC);
// console.log(new_uid);
// console.log(new_pd);

// user={...user, cc:new_CC, uid:new_uid, password:new_pd}
// console.log(user);



// const bcrypt = require('bcrypt');

// let user = {
//     uid: "101",
//     cc: '1234567812345678',
//     password: 'ILoveIndia'
// };

// // Generate separate salts for each hash
// let saltCC = bcrypt.genSaltSync(10);
// let saltUID = bcrypt.genSaltSync(10);
// let saltPwd = bcrypt.genSaltSync(10);

// let new_CC = bcrypt.hashSync(user.cc, saltCC);
// let new_uid = bcrypt.hashSync(user.uid, saltUID);
// let new_pd = bcrypt.hashSync(user.password, saltPwd);

// console.log(new_CC);
// console.log(new_uid);
// console.log(new_pd);

// // Corrected object spread syntax
// user = { ...user, cc: new_CC, uid: new_uid, password: new_pd };
// console.log(user);





// const bcrypt = require('bcrypt')

// let user={
//     uid:"101",
//     cc:'1234567812345678',
//     password:'ILoveIndia'
// }
// console.log(user)
// let salt =bcrypt.genSaltSync(10)
// let new_CC=bcrypt.hashSync(user.cc,salt)
// let new_pwd=bcrypt.hashSync(user.password,salt)
// let new_uid=bcrypt.hashSync(user.uid,salt)

// console.log(user.cc)
// console.log(new_CC)
// console.log(new_uid)

// user={...user, uid:new_uid,cc:new_CC,password:new_pwd}
// console.log(user)



const bcrypt = require('bcrypt')

let user={
    uid:"101",
    cc:'1234567812345678',
    password:'ILoveIndia'
}
console.log(user)

let salt =bcrypt.genSaltSync(10)
let new_uid=bcrypt.hashSync(user.uid,salt)
let new_cc=bcrypt.hashSync(user.cc,salt)
let new_password=bcrypt.hashSync(user.password,salt)


console.log(new_uid);
console.log(new_cc);
console.log(new_password);


user ={...user,cc:new_cc,uid:new_uid,password:new_password}
 
