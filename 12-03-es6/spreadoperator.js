// spread operator
// appllicable for  arrays and objects
// to extract array element and &copy into new array
// array alloows duplicates 
// to extract object  properties and &copy into new array
// objects not allows duplicates
//  spread operator used for merge arrays 
// to  merge object 
// to merge array
// to extend array elements 
// to extend object properties



// let state = {

//     product:{
//         pname:"iphone",
//         price:12345,
//         qty:1
//     },
//     user_name:"rahul",
//     loc:"wayand"
// }
// let {loc,product}=state
// let{pname}=product
// console.log(loc);
// console.log(pname); 


let state={
    product:{
        pname:"hhhh",
        price:2222,
        qnty:2
    },
    name:"23ewqwede",
    sal:12321
}


// let {name,product}=state
let {sal,product}=state
let{pname}=product
let{qnty}=product
let{price}=product
// console.log(name);

console.log(sal);
console.log(pname);
console.log(qnty);
console.log(price);

