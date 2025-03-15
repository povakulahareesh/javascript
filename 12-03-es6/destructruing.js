

//You can extract properties from an object and assign them to variables:

//destructuring---> to extract values from objects and arrays in a cleaner and more readable way.
//read object properties like a variable

let state = {
    product:{
        pname:"iphone",
        price:12345,
        qty:1
    },
    user_name:"rahul",
    loc:"wayand"
}

let{loc,product}=state
console.log(loc);

// console.log(state.product.pname);
// console.log(state.product.loc);


// let {loc,product}=state
// let{pname}=product
// console.log(loc);
// console.log(pname); 