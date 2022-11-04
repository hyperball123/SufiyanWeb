// reassign
// let a = 20;
// a =10;
// console.log(a);
// you cannot re declare it
//  eror - identifier has already been declared
// let a;

// scope -> block 
// scope of let will be in a block{} u can re declare it with same name in another block
// let a = 10;
// function fn(){
//     let a = 20;
//     console.log("5",a);
//     a++;
//     console.log("7",a);
//     if(true){
//         let a = 30;
//         a++;
//         console.log("11",a);
//     }
//     a++;
//     console.log("14",a);
// }
// console.log("16",a);
// fn()
// console.log("18",a);
// -------------------------------------------------------------------------------
// global excution context also known as in browser as ANONYMOUS
let fruit = "oranges";
console.log("31",fruit); 
function fn(){
    let fruit="kiwi";
    console.log("34",fruit);
    {
            let fruit = "apple";
            console.log("37",fruit);
            { 
            console.log("39",fruit);
            }
    }
    console.log("42",fruit);
}
console.log("44",fruit);
fn();
console.log("46",fruit);

// {}area inside curly braces is known as blocks
// let is block scope
// hoisting(memory allocation) for let variable is done when a block is encountered
// if a variable is not associated within a block it'll look outside the block for the nearest variable declared

// console.log(a);
// let a = 10;
// eror -
// cannot access a before initialization -> temporal dead zone 