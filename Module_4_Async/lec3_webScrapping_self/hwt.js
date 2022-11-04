// Q1 print the result 
// npm i request jsdom 
const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom");
let url = 'https://www.espncricinfo.com/series/asia-cup-2022-1327237/pakistan-vs-sri-lanka-final-1327281/full-scorecard';
request(url, cb);// MAIN PAGE REQUEST
console.log('Before')

// DATA RECIEVE
function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("content recieved");
        // console.log(body);
        extractData(body);
    }
}
// DATA RECEIEVED - > CONVERTED INTO TWO BOWLING INNINGS TABLES
function extractData(body) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM 
    let dom = new JSDOM(body);
    // 2. // no meaning 
    // document represent the whole html page 
    let document = dom.window.document;
    //  4 matches -> batting,bowling 
    let allTables = document.querySelectorAll
        ("table.ds-w-full.ds-table.ds-table-md.ds-table-auto");
    console.log(allTables.length);
    let firstInningBowling = allTables[1]; // bowling table 1
    let secondInningBowling = allTables[3]; //bowlling table 2
    // element  -> ke anadr jo bhi html wo inne html se  aa jayegi 
    var newHtmlString = "<table>" + firstInningBowling.innerHTML + "</table>"
        + "<table>" + secondInningBowling.innerHTML + "</table>";
    // fs.writeFileSync("tables.html", newHtmlString);
    // console.log(newHtmlString);
    // getDataFromBowlingTables(newHtmlString);
    // how to narrow;
    // using document and your selectors you find element in html page 
    console.log("reached for parsing");
}
let url2 = 'http://127.0.0.1:5500/lec3_webScrapping_self/tables.html';
request(url2, cb);
console.log('Before')
function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("content recieved");
        // console.log(body);
        getDataFromBowlingTables(body);
    }
}
function getDataFromBowlingTables(newHtmlString) {
   
    const JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(newHtmlString);
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
        console.log("name is", name,"with wickets", wickets);
}
}