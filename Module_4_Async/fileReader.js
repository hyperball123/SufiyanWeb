const fs = require("fs");
// Async environment

console.log("before");

// let ans = fs.readFileSync("f1.txt", "utf-8");
// console.log("ans", ans);
// console.log("After");

// async function -> nodeJs -> confirmation -> callBack -> first parameter reserved for eror
// call back function - it is a function that is passed to another function and then that function will call your callback function
// data pass karna hai --- then confirmation function pass karna hai
fs.readFile("f1.txt", frconf);
console.log("mje wait nhi karna");
console.log("after");

// parameters that is ppassed to our async function is already pre - determined. 
function frconf(err, data) {
    if (err) {
        console.log("err", err);
    } else {
        console.log("data " + data);
    }
}