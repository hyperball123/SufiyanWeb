let fs = require("fs");

let f1Path = "../f1.txt";
let f2Path = "../f2.txt";
let f3Path = "../f3.txt";

console.log("before");

fs.readFile(f1Path,fcb1)
fs.readFile(f2Path,fcb1)
fs.readFile(f3Path,fcb1)
function fcb1(err,data){
    if(err){
        console.log("err",err);
    }else{
        console.log("data " + data);
    }
}
// function fcb2(err,data){
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log("data " + data);
//     }
// }
// function fcb3(err,data){
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log("data " + data);
//     }
// }

for(let i = 0 ; i<=10 ; i++){
    console.log("i",i);
}
console.log("After");