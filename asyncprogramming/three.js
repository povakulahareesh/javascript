
//promise  --->

let gotoclg=(success,failure)=>{
//resolve and reject we use success and failure
 let  accbal=20;
 if(accbal>100){
     //console.log  ("go to goa");
 success ("go to goa");

    
 }
 else{
     //console.log("go to pg and open laptop and practice ")

    failure("go to pg and open laptop and practice ")
 }

}
gotoclg((msg)=>{
    console.log(msg);
    
},(err)=>{
    console.log(err);
    
})