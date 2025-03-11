// //create new array with even numbers
// let nums=[1,2,3,34,5,67,89,99]
// let even_nums=[]
// for (num of nums){
//     if(num %2===0){
//         even_nums.push(num)
//     }
// }
// console.log(nums);
// console.log(even_nums);


let nums=[1,2,3,4,5,6,7,8,9]
//create new array with even numbers
 let evennum=nums.filter((num)=>{
    return num%2===0
 })
 console.log(nums);
 console.log(evennum);
 
