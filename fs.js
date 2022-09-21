//require() is used to consume modules. It allows you to include modules in your app. 
// You can add built-in core Node. js modules, community-based modules (node_modules), and local modules too
//node js plz give me the acess of file system module(app).

// come in handy for folders and files
let fs = require("fs");

console.log("before");
// file --> read,write,create,delete, append,copy;
// CRUD OPERATIONS U WILL PERFORM ON THESE..
    // CREATE
    // READ
    // UPDATE
    // DELETE

//readFileSync will read a file for u
                                        //utf-8 is to read file in normal text
// let content = fs.readFileSync("readme.txt","utf-8");
// console.log(content);

// creation
// fs.writeFileSync("newFile.txt","");

//  write -> create a file write content in it
// fs.writeFileSync("newFile.txt","i have created file...")

// if file exists ->then it will replace/overide content...
// fs.writeFileSync("newFile.txt","changed content...")
// fs.writeFileSync("newFile.txt","wtf is this")

//  Append to update existing content
// fs.appendFileSync("newFile.txt","....i have added some content later..")

//  Delete
// fs.unlinkSync("readme.txt");
console.log("after");
// ----------------------------------------------------------------------
// COPY FILE
// in node js it will copy content in another file

// let sourcePath = "D:\\FJP-7 web dev\\Module_1\\L3_App_with_js\\fs.js"
// let destinationPath = "D:\\FJP-7 web dev\\Module_1\\L4_File_Organizer\\fs1.js"
// //here in destinationPath we can change name of file while coping and creating new file. 
// fs.copyFileSync(sourcePath,destinationPath);
// console.log("File content copied...:")

// **********************************directory************************************************** //
//create folder
// fs.mkdirSync("newFolder");

//for reading folder
// fs.readdirSync();
//checking if folder exist or not
//-->this works for both file/folders 
// fs.existSync(); //accepts parameter
// --------------------
//delete remove folder ...in parameters give the name of folder u want to delete
// fs.rmdirSync("newFolder");

//file and folder -> get
//this will give file names in this folder a tree view
// let ListThings = fs.readdirSync(__dirname);
// console.log(ListThings);

// let content2 = fs.readdirSync("D:\\FJP-7 web dev\\Module_1\\L2_Objects_Arrays");
// console.log(content2);

// if we pass path in parameter it gives us IF it is File or Folder boolean value
// "D:\\FJP-7 web dev\\Module_1\\L3_App_with_js"
// let RandomPath = process.cwd();

// let isFile=fs.lstatSync(RandomPath).isFile();
// let isDir=fs.lstatSync(RandomPath).isDirectory();

// console.log("path belongs to File:",isFile, "Folder:",isDir);