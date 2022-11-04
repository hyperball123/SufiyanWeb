// we are calling this lib file function and variables in client file using exports

function LibFn(){
    console.log("I am lib");
}

function Inner(){
    console.log("i am inner");
}

let a = 10;

// In java script we can only send function and variables to another file we cant send the complete file

// In node js
module.exports = {
    fn: LibFn,
    Varname:a
}

