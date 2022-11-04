const colors = ["pink", "blue", "green", "black"];
const colorBoxes = document.querySelectorAll(".color_boxes");
const allColors = document.querySelectorAll(".color")

for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener("click", function () {
        if (isLocked == false) {
            
        }
    });
}
// color boxes toghgle

function filterTickets(e) {
    // click -> first click -> clicked

    // in order to sort first lock it
    if (isLocked == false) {
        alert("First lock it");
        return;
    }
    let elem = e.currentTarget;
    let childElem = elem.children;
    let clickedColor = childElem[0].classList[1];

    // second time click -> clicked class
    let secondClass = elem.classList[1];
    console.log(secondClass)
    if (secondClass == "clicked") {

        showAllColor(elem);
    } else {
        // removed clicked from every class
        for (let i = 0; i < colorBoxes.length; i++) {
            // if -> elem has class -> remove
            // doesnot -> leave
            colorBoxes[i].classList.remove("clicked");
        }
        elem.classList.add("clicked");
        // show only my color
        showOnlyMYColor(clickedColor);
    }
}
function showOnlyMYColor(clickedColor) {
    // get all the tickets
    let allTickets = document.querySelectorAll(".ticket");
    // check there headings
    for (let i = 0; i < allTickets.length; i++) {
        // heading get -> color check
        let header = allTickets[i].children[0];
        let headerColor = header.classList[1];
        if (headerColor == clickedColor) {
            // show
            allTickets[i].style.display = "block";
        } else {
            // hide
            allTickets[i].style.display = "none";
        }
    }
}   