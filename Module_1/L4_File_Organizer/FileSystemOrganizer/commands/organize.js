let fs = require("fs");
let path = require("path");

let types = {
    media :["mp3","mkv","mp4"],
    archives: ['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents: ['docs','doc','pdf','xlsx','xls','odt','ods','odg','odg','odf','txt'],
    app:['exe','dmg','pkg','deb']
}
function orgfn(dirPath){
   dirPath = dirPath != undefined ? dirPath : process.cwd()

   organizeHelper(dirPath);
}
function organizeHelper(dirPath){
    //create an organized_dir in dirpath
    let organizeddirpath =  path.join(dirPath, "organized_dir")
    let doesorganizedFolderexist = fs.existsSync(organizeddirpath);
    if(doesorganizedFolderexist == false){
        fs.mkdirSync(organizeddirpath);
    }
    // read content of this dirpath
    let names = fs.readdirSync(dirPath);
    for(let i = 0 ; i < names.length ; i++){
        let assetPath = path.join(dirPath , names[i]);
        let ans = isFile(assetPath);
        if(ans == true){
            let type = getType(assetPath);//taking type and 
            copytothatType(assetPath,type,organizeddirpath);//copying  
        }
    } 
}
function isFile(assetPath){
    let ans = fs.lstatSync(assetPath).isFile();
    return ans;
}
function getType(assetPath){
    // check ext name
    let extname = path.extname(assetPath);
    extname = extname.slice(1);
    
    for(let key in types){
        let totalextension = types[key];
        for(let i = 0 ; i < totalextension.length ; i++){
            if(totalextension[i]==extname){
                return key;
            }
        }
    }
    return "others";
}
function copytothatType(assetPath , type , organizeddirpath){
    // and copy the file from clutter to one of the type folder inside organized_dir
    // organized_dir -> type folder create
    let destFolderPath = path.join(organizeddirpath,type);
    if(fs.existsSync(destFolderPath)==false){
        fs.mkdirSync(destFolderPath)
    }
    let originalname = path.basename(assetPath);
    let destFilePath = path.join(destFolderPath,originalname);
    fs.copyFileSync(assetPath, destFilePath);
    // content copy
    console.log(originalname,"file copied to", type);
}
module.exports = {
    orgfn:orgfn
}