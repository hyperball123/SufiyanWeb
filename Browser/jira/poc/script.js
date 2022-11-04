// document

// *************************read******************************
// query selector only returns the first macthing entry
let elem = document.querySelector(".next_h1");
console.log("line number 5", elem);
// array of element
let allh1s = document.querySelectorAll("h1");
console.log("line number 6", allh1s);

// content get
// input type of value -> where user set's the data

let inputElem = document.querySelector("input");
console.log("line number 15", inputElem.value);

// rest of html elems
let para = document.querySelector("p");
let text = para.textContent;
console.log("line number 19", text);

// get attributes
let anchorEle = document.querySelector("a");
let output = anchorEle.getAttribute("href");
console.log("line number 23", output);

// ********************create************************
// create p tag
let pElem = document.createElement("p");
// put content
pElem.textContent = "hello dom";
// elem -> copy
let newpEle = pElem.cloneNode(true);
newpEle.textContent = "append child";
// palce it int the dom tree
let body = document.querySelector("body");
// it will add at last
body.appendChild(newpEle)

// before an elem
// parent.insertBefore(currentElem,beforetheelement)
body.insertBefore(pElem, elem);

// setstyling
pElem.style.backgroundColor = "orange"
newpEle.style.backgroundColor = "red"

// ***************************DELETE*******************************************
elem.remove();