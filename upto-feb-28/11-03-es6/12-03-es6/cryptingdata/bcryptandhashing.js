/** what is the need of crypt our data 
 * we need to  hash  our sensitive data  before storeing into database 
 * how to hash and hoew crypt our sensitive data  using bcrypt js
 * bcrypt  is used for crypt our sensitive data 
 * suppose user enter credit card number we need to store that information into crypted format even  those someone is going to  copy this code  that is in unreadble or unrecognizeble   format only   
 * and hash our data
 * npm init -y
 * npm i bcrypt
 * i don't want push use  .gitignore
 *  node_modules
*/
const bcrypt=reqire("bcrypt")

// it is user sencitive data

// we are getting user object through the registraction form
let user={
    email:"user@gmail.com",
    cc:"44442098765432",
    cvv:4567

}


// how to hash with the help of bcrypt module

let salt=bcrypt.genSaltSync(10)
let new_cc=bcrypt.hashsync(user.cc,salt)
console.log(new_cc);



// whT  is the use of salt number
