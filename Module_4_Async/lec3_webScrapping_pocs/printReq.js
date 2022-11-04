const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom")
let url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard';

request(url, cb);

console.log("before");
function cb(error, response, body) {
    if (error) {
        console.log('eror:', error.message);
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("body content extracted");
        // Google homepage.
        // fs.writeFileSync("index.html", body);
        extractData(body);
    }
}
function extractData(body) {
    const JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(body);
    // 2. no meaning
    // document represent the whole html page 
    let document = dom.window.document;

    // let output = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title")
    let output = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid")
    let resultElem = output[0];
    console.log(resultElem)
    let res = resultElem.textContent;
    console.log("res",res);
}