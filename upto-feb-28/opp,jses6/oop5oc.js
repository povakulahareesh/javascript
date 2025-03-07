//class contains properties and methods 
//classs is a templete
//to solve real world problems using object passion
//to create object we required one class 


// var eidc=1012;//variable
// function get_detailes(){}//it is a function
// class Employee{
// //class is a template or data type/plan /draft to nconstructb object
// //once  object is created memory allocation will be allocated
// }
// new Employee()


// class Employee {
//for creating property datatype is not require// because class is one kind of datatype
// }
//  console.log(  new Employee());


// class Account{
//     acc_id=122;
//     open_account(){
//         console.log("account opened");
//          } // functions  keywords not allowed in side the function
// }
// let a1= new Account()
// // let a2= new Account()
//  console.log(a1);
// //  console.log(a2);

//  //how to access class members (property/method)?
//  //usin object
//  //how to access class members?//out side a classs using  object  inside a clss this key word
//  a1.open_account()//method
//  a1.acc_id//property
 



// class Account{

// acc_id;
// acc_name;
// acc_bbal=0;

//     open_account(){ 
//         console.log("account opened");
        
//     }
//     deposit_amount(){
//         console.log("amount deposited");
        
//     }
//     withdrawl_amount(){
//         console.log("amount withdrawl success");
        
//     }
//     get_bal(){
//         console.log("balance is2345678");
        
//     }
//     close_account(){
//         console.log("account closed");
        
//     }
// } 
// let a1= new Account()
// a1.open_account()
// a1.deposit_amount()
// a1.withdrawl_amount()
// a1.get_bal()
// a1.close_account()






// class Account{

// acc_id;
// acc_name;
// acc_bbal=0;
//     open_account(){ 
//         console.log("account opened");
        
//     }
//     //receiveing argument using parameter
//     deposit_amount(amount){
//         console.log("amount deposited",amount);
        
//     }
//     withdrawl_amount(){
//         console.log("amount withdrawl success");
        
//     }
//     get_bal(){
//         console.log("balance is2345678");
        
//     }
//     close_account(){
//         console.log("account closed");
        
//     }
// } 
// let a1= new Account()
// a1.open_account()
// a1.deposit_amount(45656)//argument
//  // at the time of invoking the method am going to pass some value
//  //am passing some argument
// a1.withdrawl_amount()
// a1.get_bal()
// a1.close_account()






// class Account{

//    acc_bal=0;
//     //receiveing argument using parameter
//     deposit_amount(amount){
//         // console.log("amount deposited",amount);
//         //i want to update my acc _bal
//         //how to access account_balance
//         //this is a refer to current object
//         this.acc_bal=this.acc_bal+amount

        



        
//     }
// } 
// //to refer class members  in side of the class  we are using this key word inside the class
// //to refer class members  out side  of the class we are using object out side the class 
// // how to access class members iside a class we are going to use  using this key word
// //using this keyword to access class members inside
// //this is a pointer pointing to pointing to current  object
// //inside a class we use this key word
// //how to access class members //outside a class we are using object
// let a1= new Account()
// let a2=new Account()
// //before depositing
// console.log(a1);
// console.log(a2);

// a1.deposit_amount(234567)
// a2.deposit_amount(600000)
// console.log(a1);
// console.log(a2);

// class Account{

//     deposit_amount(amount){
//         console.log("amount depositee",amount);
        

//     }

// }
// let a1 = new Account(321,"rahulthatha",5678)// create a object
// //to initialize object values we required one special method that is constuctot method
// a1.deposit_amount(4567890)//invoking the method



// class Employee{
// //how to create aconstructor using name constructor
// //purpose of constructor to iniatialize object values
// //for every object creation constuctor will execute automatiocally only once fasakk
// constructor(){ 
//     console.log("constructor method will execute automatically ");
    
// }//special method
// //normal method
// get_detailes(){} //in ihis method we need to invoke in normal method

// }
// //at the time of  creating object  constructor method will execute automatically to initialize object values
// let a1= new Employee()



// class Account{
// //constructor is use to intialize object values//special method
// //let we can receive the arguments
// acc_id;
// acc_name;
// acc_amount;

// //let we can receive the arguments
//     constructor(id,name,amount){
//         this.acc_id=id
//         this.acc_name=name
//         this.acc_amount=amount


//     }
//     deposit_amount(amount){}//normal method
// }
// let a1=new Account(101,"rahul thatha gii",5678)
// let a2=new Account(678,"jagan mama gii",  5678)
// console.log(a1);
// console.log(a2);



















// class Account{
//     constructor(id,name,amount,balance){
//         this.id=id;
//         this.name=name;
//         this.amount=amount;
//         this.min_balance=balance;


//     }
// }
// let a1 = new Account(345,"hjk",789,789)

// console.log(a1);


// let a2 = new Account(34,"rahul",78,678)

// console.log(a2);




//without Constructor


// class Account{
//     acc_id;
//     customer_name;
//     deposit_amount;
//     min_balance;




//     constructor(id,name,amount,balance){
//         this.id=id;
//          this.name=name;
//         this.amount=amount;
//         this.min_balance=balance;


//     }
// }
// let a1 = new Account(345,"hjk",789,789)

// console.log(a1);






// class Account{
//     acc_Id;
//     acc_Name;
//     acc_Bal;
//     min_Bal=500
//to initialize object values we are using constructor
//     constructor(id,name,amount) {
//         this.acc_Id=id;
//         this.acc_Name=name;
//         this.acc_Bal=amount;
//     }
//     deposit_Amount(amount){
//         this.acc_Bal = this.acc_Bal + amount;
//     }
//     withdrawl(amount){
//         this.acc_Bal = this.acc_Bal - amount;
//     }
//     get_Bal(){
//         return this.acc_Bal - this.min_Bal;
//     }
// }
//normal method we can invoke n no of times
// let a1= new Account(101,'Rahul',5000);
// a1.deposit_Amount(1000)
// a1.deposit_Amount(2000)
// let a2= new Account(102,'Sonia',15000);
// a2.deposit_Amount(100)
// a2.deposit_Amount(200)
// console.log(a1)
// console.log(a2)
// a1.withdrawl(15)
// a2.withdrawl(5000)
// console.log(a1)
// console.log(a2)

// console.log(a1.get_Bal())
// console.log(a2.get_Bal())
// console.log(a2.acc_id())

//optional
// how to access class members inside a class this keyword out side a class object

// console.log("ac.id:",a1.acc_id,"and name:",a1.acc_name);



// class Text{
// //constructor method executes automatically // at the time of object creation
// //special method
// //we can't invoke constructor method explicitly
// //constructor is used to initialize object values
//     constructor(name){
//         console.log("it is a special data type ",name);//name is a parameter
        

//     }
// //normal method invoke n no of times
//     get_bal(){
//         console.log("hdsfghj");
        
//     }
// }
// let a1=new Text("rahul")//reference variable
// let a2=new Text("rani")
// let a3=new Text("priya")
// a1.get_bal()
// a2.get_bal()
// a3.get_bal()

// //today we are concentrate on constructor and this key word




// class Bank{
//     branch_name="marthahalli"
//     get_details(){
//         console.log("huiik");
        

//     }

// }
// let b1= new Bank()
// let b2= new Bank()
// console.log(b1);
// console.log(b2);
// b1.get_details()
// b2.get_details()





