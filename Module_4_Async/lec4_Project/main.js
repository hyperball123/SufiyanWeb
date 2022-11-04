const request = require('request');
// const fs = require("fs");
const jsdom = require("jsdom");
const allmatchpageobj = require("./scorecard");
let url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423';
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
function newHtmlString(body){
    const JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(body);
    let document = dom.window.document;

    let allResults = document.querySelectorAll(".ds-block .ds-border-t.ds-border-line.ds-text-center.ds-py-2 a") 
    let results = allResults[0].getAttribute("href");
    // let res = results.textContent;
    let fullLink = "https://www.espncricinfo.com"+results;
    console.log(fullLink);
    request(fullLink,acb);
}
function acb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("content recieved");
        // console.log(body);
        getScoreCard(body);
    }
}
function getScoreCard(body){
    const JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(body);
    let document = dom.window.document;
    let linkscr = document.querySelectorAll(".ds-p-4.ds-border-y.ds-border-line a")
    // console.log(linkscr)
    let scoreLink = linkscr.getAttribute("href"); 
    let allmatchpagelink = "https://www.espncricinfo.com"+scoreLink;
    console.log(allmatchpagelink);
    // allmatchpageobj.AllmatchFn(allmatchpagelink);
}
