// // 1 
// function print(){
//     console.log("hello");
// }

// console.log("print",print);
// when u r not invoking a function u will get the address like this in output
// output - print [Function: print]
// -------------------------------------------------------------------------------

// WAYS TO CALL Functions ...you can pass funtion to an array
// A
// let anotherFn = print;
// anotherFn();

// B
// let EmptyArr=[];
// EmptyArr[0] = print;
// EmptyArr[0]();
// ----------------------------------------------------
function printArrFN(){
    let arr = [];

    for(let i = 0 ; i < 3 ; i++){
        // let smaller = [1,2,3,4];
        function printI(){
            console.log("i",i);
        }
        // arr.push(smaller);
        arr.push(printI);
    }
    return arr;
}
let arrFn = printArrFN();

// console.log("arrFn0",arrFn[0]);
// console.log("arrFn1",arrFn[1]);
// console.log("arrFn2",arrFn[2]);

arrFn[0]();
arrFn[1]();
arrFn[2]();

