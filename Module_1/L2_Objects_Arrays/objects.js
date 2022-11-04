//it is a non primitive datatype that is used to represent anything
//let obj = {
    
//};
//empty object creation
    // collection of key: value pair,
    // key : String and number & value : any valid js datatype
    
let cap={
    firstName: "Steve",
    "last Name":   "Rogers",
    friends: ["tony","peter","bruce"],
    address: {
        city : "manhattan",
        state: "NY",
    },
    age: 32,
    isAvenger : true,
} 
// print
// console.log(cap);

// //getting a key value using dot notation
// console.log(cap.firstName);
// console.log(cap.lastName);
// console.log(cap.address.city);
// console.log(cap.friends[0]);

// function getValues(key){
//     // console.log(cap.key); //using dot. exact obj are being matched ->obj mai jake key variable dhundege
    
//     console.log(cap[key]);// using square brackets[] get values from the variable passed in parameters 
//                             // ->obj ke andar jake name key and age key search karenge
// }
// getValues("firstName");
// getValues("last Name");

// 1 more way of getting 
// let varName = "firstName";
// console.log(cap[varName]);
// varName="last Name";
// console.log(cap[varName]);

//delete 
// delete cap.friends;
// // add
// cap.movies=
// ["winter soldier", "first avenger","civil war"];
// let key = "comp"//creating a key(variable) inside cap obj
// cap[key] = "DCU";//adding value in key we created above using square brackets.
// // update
// cap.isAvenger = false;
// console.log(cap);

// //if the key is not present u will get undefined
// console.log(cap.abc);

// traverse
// let cap={
//     firstName: "Steve",
//     "last Name":   "Rogers",
//     friends: ["tony","peter","bruce"],
//     address: {
//         city : "manhattan",
//         state: "NY",
//     },
//     age: 32,
//     isAvenger : true,
// } 

for(let key in cap){       
    console.log(key , " : " , cap[key])
    // just using KEY will bring keys of obj cap
    // and by using cap[key] it will bring details stored in keys
}