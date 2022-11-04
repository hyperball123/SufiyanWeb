// npm i jsdom
const fs = require("fs");
let htmlContent = fs.readFileSync("sample.html", "utf-8");

const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;
// 1. String form mai html content provide kar na hai
// pass to new JSDOM
let dom = new JSDOM(htmlContent);
// 2. no meaning
let document = dom.window.document;

// 3.logic -> help to get your html

/*
    bring elements if you pass a selector
    // css selector -> first ocurence of that html element
    // document.querySelector("p");
*/
// css selector -> all the occurences of that html element
// in the form of array of elements
// element wala case
const allPs = document.querySelectorAll("p");
console.log(allPs.length);
// content ->
let firstKaContent = allPs[0].textContent;
console.log("first PKacontent: ", firstKaContent);
let secondKaContent = allPs[1].textContent;
console.log("second PKacontent: ", secondKaContent);

    // const allidsWalaElem = document.querySelectorAll('unique);
    // let content = allidsWalaElem[0].textContent;
    // console.log(content);


