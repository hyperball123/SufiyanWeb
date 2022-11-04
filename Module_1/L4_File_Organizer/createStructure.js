let fs=require("fs");
let path=require("path");

let Modules = ["JavaScript","React","Git","Browser","Backend"]

// process.cwd() -> in which folder u are executing your file
//in folder L4_Fileorganizer web dev will be created
//                              x,webdev
let webDevDirPath = path.join(process.cwd(), "Web Dev");

if(fs.existsSync(webDevDirPath)){
    //do nothing
    console.log("Web dev folder already exists");
}else{
    fs.mkdirSync(webDevDirPath);
}

// create modules inside these
for(let i = 0 ; i < Modules.length ; i++){
    //in folder L4_Fileorganizer we created "Web dev" in it Modules folders will be created.
    let modulePath = path.join(webDevDirPath, Modules[i]);
    if(fs.existsSync(modulePath)){
        console.log(Modules[i]," already exists");
    }else{
        fs.mkdirSync(modulePath);
    }
}

