let fs=require("fs");
let path=require("path");

let input = process.argv.slice(2);
// console.log(input);
let moduleName = input[0];
let numberofFolder = input[1];

let modulePath = path.join(process.cwd(), "Web Dev",moduleName )

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

    // creating readme files
    let noOfFiles = input[2];
        for(let i = 1 ; i<=noOfFiles ; i++){
        let filepath = path.join(lecturePath , "readme.md");

        if(fs.existsSync(filepath)){
            console.log("already exists");
        }else{
            fs.writeFileSync(filepath,"");
        }
     }   
}
