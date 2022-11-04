// fucntion statement
function fn(){
    console.log("i am a statement");
}
fn();

// function expressions
// storing while creating a function in a variable
let fnAddressHolder = function(){
    console.log("i am a function expresiion");
}
fnAddressHolder();

// IIFE -> immediately invoke function expression
(function IIFEE(){
    console.log("i am ifee");
})()

// arrow -> function expression(syntax sugar)
let arrfn = () =>{
    console.log("i am an arrow fn");
}
arrfn();