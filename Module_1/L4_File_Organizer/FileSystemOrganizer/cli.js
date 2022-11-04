// 1.take input and print
// node cli.js help -> print help command executed
// node cli.js tree -> print tree command executed
// node cli.js organize -> print organize command executed
let fs = require("fs");
let HelpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let orgObj = require("./commands/organize");
let inputArr = process.argv.slice(2);
let command =inputArr[0]; 
let dirPath = inputArr[1];

switch(command){
    case 'help':
        HelpObj.helpFn();
        break;
    case 'tree':
        treeObj.treeFn(dirPath);
        break;
    case 'organize':
        orgObj.orgfn(dirPath);
        break;
    
    default:
        console.log("Wrong command executed...:");
}




