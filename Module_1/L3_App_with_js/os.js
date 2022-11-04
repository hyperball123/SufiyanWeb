//node js plz give me the acess of file system module(app).

//this os feature code is already written and we are acessing it by using its features and 
//we need to use an environment to acess any information on our system.device .Js will not help
//feature is given by node.js logic has to be written in js

let os=require("os");//require() is used to consume modules. It allows you to include modules in your app.
   
    //os.arch() used to get CPU architecture of the computer for which the current node. js is compiled
    console.log("-----------------------platform--------")
    console.log(os.arch());
    
    //used to get information about each logical CPU core of the computer.
    console.log("----------------cpu---------------")
    console.log(os.cpus());
    
    // networking
    console.log("----------------network---------------")
    console.log(os.networkInterfaces());

    // os type
    console.log(os.platform());

// reference