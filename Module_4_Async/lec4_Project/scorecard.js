const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom");
let url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/match-schedule-fixtures-and-results"
// requetsing
function AllMatchPageExecutor(url){
    request(url, cb);
}
// DATA RECIEVED
function cb(error, response, body) {
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
    // .ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent a
    // got the boxes
    let linkscr = document.querySelectorAll(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent")
    for (let index = 0; index < linkscr.length; index++) {
        let currMatch = linkscr[index];
        // in that boxes i have href link o n 0th index 
        let allAnchors = currMatch.querySelectorAll("a"); 
        let scorecardAnchor = allAnchors[0];
        let ans = scorecardAnchor.getAttribute("href");
        let fullLinkScorecard = "https://www.espncricinfo.com" + ans;
        console.log("ans",fullLinkScorecard);
    }
}
module.exports={
    AllmatchFn : AllMatchPageExecutor
}