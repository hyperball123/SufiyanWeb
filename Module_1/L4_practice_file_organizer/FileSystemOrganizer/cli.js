const helpFnObj = require("./commands/help")
const treeFnObj = require("./commands/tree")
const organizeFnObj = require("./commands/organize");
let inputArr = process.argv.slice(2);

let commandName = inputArr[0];
console.log(commandName)
let dirpath = inputArr[1];
console.log(dirpath)
switch (commandName) {
    case "help":
        helpFnObj.HelpFn();
        break;
    case "tree":
        treeFnObj.treeFn(dirpath);
        break;
    case "organize":
        organizeFnObj.orgFn(dirpath);
        break;
    default:
        console.log("Wrong command . Type 'HELP' to get the list of commands");

}
console.log(dirpath)