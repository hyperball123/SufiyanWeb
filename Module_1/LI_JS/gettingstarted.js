//print 
// top to bottom left to right

console.log("Hello Pepcoders :) ");

//variable declare;
// dynamically typed language -> a is one variable.
// undefined
        let a;

a = 10;
console.log("value of a",a);//for concatination use comma
 a = 10.2;
 a = true;
 
//there is no char only string js
 a = "hello";
 a = null;
//  will print last declared item
 console.log(a);

// primitive types - undefined , null , number ,strings , boolean

//print 1 to 10.

// for(let i = 1 ; i <= 10 ; i++){
//     console.log("Number is : "+i);
    
    // to rpint in same line
    // process.stdout.write(""+i);
// }

//printing even nos.
// let i = 1;
// while(i <= 10){
//    if(i%2==0){
//         console.log(i);
//    } 
//    i++;
// }

let i = 1;
while(i <= 20){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3 == 0){
        console.log("Fizz");
    }else if(i%5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
    i++;
}