
class employee{
    acc=222;
    bname="marthahalli"//properties
    //methods
    open_account(){
        console.log("account opened");
        
    }
    deposit_amount(){
        console.log("amount deposited");
        
    }
    get_bal(){
        console.log("balance low");
        
    }
    withdrawl(){
        console.log("insufficient balance");
        
    }
    close_account(){

        console.log("you can't close - bal is :-ve");
        

    }


}
let e1=new employee();
e1.open_account()
e1.deposit_amount()
e1.get_bal()
e1.close_account()