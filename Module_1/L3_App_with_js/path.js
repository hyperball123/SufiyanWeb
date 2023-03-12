// "C:\\Users\\mrjas\\oneDrive"; -> absolute path
// ../../Module_0/learning_get/index.html -> relative path(its like a staircase u can climb up to any file using 
//                                          (../fileorfoldername)and acess it)
// "toberemoveFolder" -> when u r in the same folder



// **PATH MODULES**
let path=require("path");

// 
// console.log("dirname:",__dirname);// current folder in which we have our node js file absolute path
// // console.log("***************************************************")
// console.log("file name:",__filename); // current file path
// // console.log("***************************************************")
 

// // globaly u can use
// process.cwd() //-> in which folder u are executing your file
// console.log("process.cwd",process.cwd());

// // Gives you basename -> only "folder" name u r in 
// // accepts parameter
// let cmd = path.basename('D:\\FJP-7 web dev\\Module_1\\L3_App_with_js');
// console.log(cmd)

// let folderName="C:";
// let nextFolderName="Movies";
// let childeFolder ="bollywood";
// let actualFile = "Rang de basanti";
// // path join - will create a string instead of writing a path 
// // path.join joins path 
// let address = path.join(folderName , nextFolderName , childFolder ,actualFile);
// console.log("***************************************************")
// console.log(address);

//gives extension name
// path.extname();
// accepts parameter
//used for getting extension name of file for eg- inst.docs , index.exe etc
