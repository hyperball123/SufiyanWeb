function getFirstName(FirstName){
    console.log("firstname",FirstName);
    return function getLastname(lastName){
        console.log("lastname",lastName);
        return function printFullname(){
            console.log("my name is ",FirstName,lastName)
        }
    }
}
let getLastname = getFirstName("sufiyan");
console.log("get first name stack is hat gaya")
let printFullname = getLastname("shaikh")
console.log("get last name stack is hat gaya")
printFullname();

// What is closure -> closure is a feature of js which enables the access of a variable that are declared outside the function
// even if the outer function is remove from the stack

// closure is attached with inner function