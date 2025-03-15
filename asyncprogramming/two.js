// wt is call back ,promise,async await
// passing function as aargument  known as call back
// 


// at the time of invoking function passing number and string as argument


// let cal=( a,b,op)=>{
//     if (op==="sum"){
//         return a+b
//     }
//     if (op==="multi"){
//         return a*b
//     }


// }
// let r1= cal(10,2,"sum")
// console.log(r1);

// let r2= cal(10,2,"multi")
// console.log(r2);


let sum =(a,b)=>{
    return a+b
}
let multi =(a,b)=>{
    return a*b
}

let cal =(a,b,callback)=>{
    return  callback (a,b)

}

let r1=cal(1,2,sum)
console.log(r1);



let r2=cal(1,2,multi)
console.log(r2);

