const fs = require("fs")
const path = require("path")

function treeFn(dirpath) {
    dirpath = dirpath != undefined ? dirpath : process.cwd();
    console.log("tree command got executed...:");
    let namesOfFilesnFolders = fs.readdirSync(dirpath);
    console.log(path.basename(dirpath));

    for (let i = 0; i < namesOfFilesnFolders.length; i++) {
        let isFile = fs.lstatSync(dirpath).isFile();
        let isDir = fs.lstatSync(dirpath).isDirectory();
        if (fs.existsSync(dirpath) == isFile) {
            console.log("\t", namesOfFilesnFolders[i])
        } else if (fs.existsSync(dirpath) == isDir) {
            console.log("\t>", namesOfFilesnFolders[i])
        }
        // console.log("   "+namesOfFilesnFolders[i]);
    }
}

module.exports = {
    treeFn: treeFn
}