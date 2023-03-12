//2d Array
// let b = [[1,2,3], [4,5,6], [7,8,9]]
// console.log(b);

//traverse ->
let a=[1,2,3,4,5,6];
// for(let i = 0; i< a.length ; i++){
//     console.log(i + " : " + a[i]);
// } 
// console.log("before:", a);

// //for removing/adding at last
//     a.pop();//removing last 
//     a.push(20);//adding last
// console.log("-=---------------------------");
// //firstElement -> add/remove at first
// a.shift();//remove first;
// a.unshift(22);//add first
// console.log("after",a);

// //copied subarray -> sidx,eidx
// let slicedArray = a.slice(0,4);
// // original array remains the same
// console.log("slicedArray: ",slicedArray);
// console.log("array: ",a);

// indexOf -> will give index not value or if its not present it will give -1
// in those brackets we are passing value of an array 
let idx = a.indexOf(6);
console.log(idx);

// //includes-> true/false
let ans=a.includes();
console.log("5 is " + ans + " at " + idx);

// sidx -- deletecount(how many values to be deleted from sidx(including starting index))
// here sidx is (3) & Deletcount is (2).
// console.log("original Array before: " , a);
// let splicedArray = a.splice(3,3);
// console.log("splicedArray: " , splicedArray);
// console.log("original Array: " , a);
