let fs=require("fs");
let path=require("path");

let input = process.argv.slice(2);
// console.log(input);
let moduleName = input[0]; //**this mean at input of[0] we will give modulename which we created
let numberofFolder = input[1];//**and at input[1] we are passing how many folders of lec to be created in respective moduleName 

let modulePath = path.join(process.cwd(), "Web Dev",moduleName)

if(fs.existsSync(modulePath))
{
    console.log(moduleName,"already exists");
}else{
    fs.mkdirSync(modulePath);
}

//create folders inside modules
for(let i = 1 ; i <=numberofFolder ; i++){
    let lectureName="Lec_" + i;
    let lecturePath = path.join(modulePath , lectureName)
    if(fs.existsSync(lecturePath)){
        console.log(lectureName,"already exists");
    }else{
        fs.mkdirSync(lecturePath);
    }
}

