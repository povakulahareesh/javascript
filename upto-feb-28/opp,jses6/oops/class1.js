
class Account{
   open_Account(){
      console.log("Account open Success ");
      
   }
   deposit_Amount(amount){

    //   console.log(`Amount- ${amount}- deposited success`);
     console.log("amount deposited",amount);
      
   }
}

let a= new Account()
a.open_Account
a.deposit_Amount(2000)
