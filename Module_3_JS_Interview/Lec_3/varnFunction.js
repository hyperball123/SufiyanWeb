// assign
let a = 10;
let b = 20;
 a  = b;
//  console.log("a",a);

//  reference copy
let arr1 = [1,2,3,4,4,5];
let arr2 = [7,6,7,8]
arr1 = arr2;
// console.log("arr1",arr1);

// 1>assignment
/*
   FUNCTIONS IN JS ARE ALSO TREATED AS VARIABLE ->
   FUNCTION ARE FIRST CLASS  CITIZEN IN JS 
*/
// function fn(){
//     console.log("fn am a function...")
//     return 10;
// }
    
    // you have stored adress of fn in a variable
    // after storing you can call the function by new variable name
// let anotherfn=fn;
    // anotherfn();

// -----------------------------------------------------------------------

//2> pass to function as a parameter
// function fn(param){
    // what does paramn contains here ?? -> param has reference of arr1
//     console.log("param",param);
// }
// fn(arr1);

//3> U CAN ALSO PASS A FUNCTION AS A PARAMETER
// function chotafunction(){
//     console.log("i am a chota fn...")
// }
// function getfunction(param){
//     console.log("i am getFunction");
//     console.log("param",param);
//     param();
// }

// getfunction(chotafunction);
// This is known as call back function
// call back function - it is a function that is passed to another function and then that function will call your call back function

// return from a function
function fn1(){
        let obj ={
                name : "jasbir"
            };
                return obj;
        }
    //  this rvall also contains the refernce of obj object
        let rval = fn1();
        console.log("rval",rval);
  
// --------------------------------

// behaviour of a variable
    // assignement 
    // pass to function as a parameter
    // return from a function

// ---------------------------------------------
/*
you can also return a function
*/

// function outer(){
//     console.log("i am outer function");
//     return function inner(){
//         console.log("i am inner fn and i will run when u will call me")
//     }
// }

// let rfn = outer();
// console.log("after this line i will call inner");
// rfn();

// function getFirstName(FirstName){
//     console.log("firstname",FirstName);
//     return function getLastname(lastName){
//         console.log("lastname",lastName);
//         return function printFullname(){
//             console.log("my name is ",FirstName,lastName)
//         }
//     }
// }
// let getLastname = getFirstName("sufiyan");
// let printFullname = getLastname("shaikh")
// printFullname();
