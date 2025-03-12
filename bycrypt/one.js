const bcrypt = require('bcrypt');

let user = {
    uid: 101,
    cc: '1234567812345678',
    password: 'ILoveIndia'
};

console.log("Original User:", user);

let salt = bcrypt.genSaltSync(10);
let new_CC = bcrypt.hashSync(user.cc, salt);
let new_pwd = bcrypt.hashSync(user.password, salt);

console.log("Original CC:", user.cc);
console.log("Hashed CC:", new_CC);

user = { ...user, cc: new_CC, password: new_pwd };
console.log("Updated User:", user);