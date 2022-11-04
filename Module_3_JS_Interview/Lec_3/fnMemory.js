// fucntion statement
function fn(){
    console.log("i am a statement");
}
fn();

// ------------------------------------------------------------------------------

// function expressions
// storing while creating a function in a variable
let fnAddressHolder = function(){
    console.log("i am a function expresiion");
}
// u cannot call function expression before initializing
fnAddressHolder();

// ------------------------------------------------------------------------------

// IIFE -> immediately invoke function expression
// u cannot call IFEE outside its scope
// IIFFEE work in -> Jquery library
(function IIFEE(){
    console.log("i am ifee");
})()

// ------------------------------------------------------------------------------

// arrow -> function expression(syntax sugar)
let arrfn = () =>{
    console.log("i am an arrow fn");
}
// u cannot call function expression before initializing
arrfn();