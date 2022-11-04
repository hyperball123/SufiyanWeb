const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom");
let url = 'http://127.0.0.1:5500/lec3_webScrapping_self/tables.html';
// requetsing
request(url, cb);
console.log('Before')
// DATA RECIEVED
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
// two bolwing innings-> every bowler ke bio page ka link
//  request -> to their page
function newHtmlString(body) {
    const JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(body);
    let document = dom.window.document;
    // let bowlersName = document.querySelectorAll("tbody td.ds-min-w-max");
    // let bowlersName = document.querySelectorAll("tr .ds-min-w-max");
    let allRows = document.querySelectorAll("tbody tr.main");
    for (let i = 0; i < allRows.length; i++) {
        let singlePlayerEle = allRows[i];
        let anchorArr = singlePlayerEle.querySelectorAll("td a");
        // href is an attribute therefore get attribute is a function of jsdom
        let href = anchorArr[0].getAttribute("href");
        let fullLink = "https://www.espncricinfo.com" + href;
        // console.log(fullLink);
        request(fullLink, bcb);
    }
}
// response of each palyer page at a time
function bcb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        // console.log("content recieved");
        // console.log(body);
        // console.log("``````````````````````````````````````````````")
        // console.log("``````````````````````````````````````````````")
        // console.log("``` ```````````````````````````````````````````")
        extractBirthdays(body);
    }
}
// ALL THE PAGES OF -> HAVE SAME html STRUCTURE
// birthday extract -> print 
function extractBirthdays(body) {
    const JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(body);
    let document = dom.window.document;

    let PlayerDetail = document.querySelectorAll(".ds-text-title-s.ds-font-bold.ds-text-ui-typo");
    let dob = PlayerDetail[1].textContent;
    let name = PlayerDetail[0].textContent;
    console.log(name , " : " , dob);
}