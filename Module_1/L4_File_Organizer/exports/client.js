// user defined modules so we add ./ (slash)
let clientObj = require("./lib");

console.log("I am client");
// functin call
clientObj.fn();
// variable
console.log(clientObj.varName);