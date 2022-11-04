const fs = require("fs");
const path = require("path");

let types = {
    media: ["mp3", "mkv", "mp4"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docs', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odg', 'odg', 'odf', 'txt'],
    app: ['exe', 'dmg', 'pkg', 'deb']
}
function orgFn(dirpath) {
    dirpath = dirpath != undefined ? dirpath : process.cwd();

    organizeHelper(dirpath);
}
function organizeHelper(dirpath) {
    // create organize dirPath
    let organizeDirpath = path.join(dirpath, "organized_dir");
    let doesOrganizeDirPathexist = fs.existsSync(organizeDirpath);
    if (doesOrganizeDirPathexist == false) {
        fs.mkdirSync(organizeDirpath);
    }
    // read contents of dirPath

    let namesOffiles = fs.readdirSync(dirpath);//getting clutter here
    for (let i = 0; i < namesOffiles.length; i++) {
        let ActualFilePath = path.join(dirpath, namesOffiles[i]);//joining in and oath of inside clutter
        let ans = isFile(ActualFilePath)
        if (ans == true) {
            let type = getType(ActualFilePath); 
            copytoThatType(ActualFilePath,type,organizeDirpath);
        }
    }
}
function isFile(ActualFilePath) {
    let ans = fs.lstatSync(ActualFilePath).isFile();
    return ans;
}
function getType(ActualFilePath) {
    let extname = path.extname(ActualFilePath);
    extname = extname.slice(1);
    for (let key in types) {
        let totalExtension = types[key];
        for (let i = 0; i < totalExtension.length; i++) {
            if (totalExtension[i] == extname) {
                return key;
            }
        }
    }
    return "others";
}
function copytoThatType(ActualFilePath,type,organizeDirpath){
    let destFolderPath = path.join(organizeDirpath,type);
    if(fs.existsSync(destFolderPath) == false){
        fs.mkdirSync(destFolderPath);
    }

    let originalName = path.basename(ActualFilePath);
    let destFilePath = path.join(destFolderPath,originalName);

    fs.copyFileSync(ActualFilePath,destFilePath);
    // content copy
    console.log(originalName,"file created to",type);
}
module.exports = {
    orgFn: orgFn
}