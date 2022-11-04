var a = 10;
function b(){
    // when a function doesen't have a variable declared
    // --it will look outside the function defination
    console.log("3",a);
}
function c(){
    var a = 20;
    console.log("8",a);
    b();
    console.log("10",a);
}
console.log("12",a);
c();
console.log("14",a);