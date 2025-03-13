

class  Account{

    add_amount(){
      console.log(" add deposit success");
      
    }
    deposit_amount(amount){
      console.log("amount-",amount,"-deposit success")
    }
    withdrawl_amount(amount){
      console.log("withdrawl success");
      
    }
  
  }
  let a1= new Account ()
  // class contains properties and methods
  //we call as class members
  // how to access class members using  object
  a1.add_amount()
  a1.deposit_amount(1445)
  a1.withdrawl_amount()
  