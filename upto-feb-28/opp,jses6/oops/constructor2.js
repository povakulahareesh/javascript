
class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    min_Bal=500
//to initialize object values we are using constructor
    constructor(id,name,amount) {
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount;
    }
    withdrawl(amount){
        this.acc_Bal = this.acc_Bal - amount;
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal;
    }
}
//normal method we can invoke n no of times
let a1= new Account(101,'Rahul',5000);
a1.deposit_Amount(1000)
a1.deposit_Amount(2000)
let a2= new Account(102,'Sonia',15000);
a2.deposit_Amount(100)
a2.deposit_Amount(200)
console.log(a1)
console.log(a2)
a1.withdrawl(15)
a2.withdrawl(5000)
console.log(a1)
console.log(a2)

console.log(a1.get_Bal())
console.log(a2.get_Bal())
console.log(a2.acc_id())

//optional
//how to access class members inside a class this keyword out side a class object

 console.log("ac.id:",a1.acc_id,"and name:",a1.acc_name)



