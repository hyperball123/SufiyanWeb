const fs = require("fs")
const path = require("path");

let input = process.argv.slice(2);
let ModuleName = input[0];
let numberofFolder = input[1];

let ModulePath = path.join(process.cwd(),"Web dev",ModuleName);

if(fs.existsSync(ModulePath)){
    console.log(ModuleName,"Module already exists");
}else{
    fs.mkdirSync(ModulePath);
}

for(let i = 1 ; i <= numberofFolder ; i++){
    let lectureName = "Lec_"+i;
    let LecPath = path.join(ModulePath,lectureName);

    if(fs.existsSync(LecPath)){
        console.log(lectureName,"Lec already exists")
    }else{
        fs.mkdirSync(LecPath);
    }
}