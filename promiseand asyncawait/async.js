 /** async programming means-->executing multiple tasks at a time
  * executing the statements at a time
  * sync means  execyteing only one  task at a time 
  * sync means  execyteing only one  thing at a time 
  * async means  execyteing multiple   things at a time
  * at the time of executing multiple things  we are getting the some problems
  * 
  * 
  * 
  * while executing the statement async  we are getting a problems that problems we are going achive through the
  *  call back--> at the time of invoking the function  we are (passing function as a argument)
  * promise 
  * async and await
  * 
  * node js and  javascript are async programming
  * 
  */
//call back --> passing function as argument
// at the time of invoking the function i am passing  one function as argument one more function as a argument  known as argument  
//and iam going to check one variable 

 let gotomovie=(success,failure)=>{
    let amount =800
    if(amount>500){
        success("goo")
    }
    else{
        failure("pooo")
    }
 }
 gotomovie((a)=>{
    console.log(a);
    
 },(b)=>{console.log(b);
 })