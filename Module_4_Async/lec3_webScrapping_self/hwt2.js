const request = require('request');
// const fs = require("fs");
const jsdom = require("jsdom");
let url = 'http://127.0.0.1:5500/lec3_webScrapping_self/tables.html';
request(url, cb);
console.log('Before')
function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("content recieved");
        // console.log(body);
        newHtmlString(body);
    }
}
function newHtmlString(body){
const JSDOM = jsdom.JSDOM;
let dom = new JSDOM(body);
let document = dom.window.document;
// let bowlersName = document.querySelectorAll("tbody td.ds-min-w-max");
// let bowlersName = document.querySelectorAll("tr .ds-min-w-max");
let bowlersName = document.querySelectorAll("tbody tr.main");

console.log(bowlersName.length);
for(let  i = 0 ; i < bowlersName.length ; i++){
    let str = bowlersName[i]
    let allCols = str.querySelectorAll("td");
    // console.log(allCols);
    let name = allCols[0].textContent;
    let wickets = allCols[4].textContent;
    // console.log(name);
    // let wickets = allCols[2].textContent;
    // console.log("name is", name, "with wickets", wickets);
    // console.log(names.trim());
    console.log(name,"with wickets",wickets);
    }   
}