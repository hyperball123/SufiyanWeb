// in parameters we are passing 2 bcz it should ignore node and file name and take input after that
// let inputArr=process.argv.slice(2);
// console.log(inputArr);

let marks = process.argv.slice(0);
if (marks > 90) {
    console.log("excellent")
} if (marks > 80 && marks <= 90) {
    console.log("good")
} if (marks > 70 && marks <= 80) {
    console.log("fair")
}
if (marks > 60 && marks <= 70) {
    console.log("meets expectations")
}
if (marks <= 60) {
    console.log("below par")
}