let fs = require("fs");

let f1Path = "../f1.txt";
let f2Path = "../f2.txt";
let f3Path = "../f3.txt";
let f4Path = "../f4.txt";

console.log("before");
let outputContent = "";
fs.readFile(f1Path,f1cb);

function f1cb(err,data){
    if(err){
        console.log(err);
    }else{
        console.log("data "+data);
        outputContent += data;
        fs.readFile(f1Path,f1cb);
    }
}
// function fcb2(err,data){
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log("data " + data);
//         outputContent += data;
//         fs.readFile(f3Path,fcb3);
//     }
// }
// function fcb3(err,data){
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log("data " + data);
//         outputContent += data;
//         fs.writeFile(f4Path,outputContent,writecb);
//     }
// }

// function writecb(err,data){
//     console.log("f4 created...:");
// }
// for(let i = 0 ; i<=10 ; i++){
//     console.log("i",i);
// }
// console.log("After");