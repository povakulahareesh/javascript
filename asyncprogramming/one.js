/**sync executing top to bottem one by one 
 * executing statements one by one
 * async executing statements at a time
 */


// sync

// console.log("req 1");
// console.log("req 2");
// console.log("req 3");
// console.log("req 4");
// console.log("req 5");


// async
//  set timeout it is inbult function execute provided function after certain time interval
//executed provided function after certain time interval


setTimeout(()=>{console.log("req 1")},7000)

setTimeout(()=>{console.log("req 2");
},3000)


setTimeout(()=>{console.log("req 3");
},1000)

setTimeout(()=>{console.log("req 4");
},2000)
