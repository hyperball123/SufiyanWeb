const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom")
let url = 'http://www.google.com';

// request working->
// 1 - Request to the given URL
// 2 - Request Function - cb Call -> data put
request(url, cb);

// eror -> if ther is any eror while executing the request 
//  response -> header + body

// bbody -> html
console.log("before");
function cb(error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

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
function extractData(html) {
  const JSDOM = jsdom.JSDOM;
  // 1. String form mai html content provide kar na hai
  // pass to new JSDOM
  let dom = new JSDOM(html);
  // 2. no meaning
  // document represent the whole html page 
  let document = dom.window.document;
  // let button = document.querySelectorAll(".lsb");
  // // input -> value 
  // let content = button[0].value;
  // console.log("content",content);

  // rest -> textContent
  let listOfScrap = document.querySelectorAll("#WqQANb")
  for (let i = 0; i < listOfScrap.length; i++) {
    let content = listOfScrap[i].textContent;
    console.log(content);
  }
}
console.log("after")
// status code -> An HTTP status code is a server response to a browser’s request.
                  // server then responds to the browser’s request with a three-digit code: 