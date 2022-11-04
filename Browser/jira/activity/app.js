const lock = document.querySelector(".lock");
const unlock = document.querySelector(".unlock");
const deleteBtn = document.querySelector(".delete");

let isLocked = "false";
let isDelete = "false";

// when unlocked - u can create but u cannot sort according to colors
// when clicked on unlocked allTasks will show
// when locked -> u cannot create new task but sort according to colors
lock.addEventListener("click", lockHelper)
unlock.addEventListener("click", unlockHelper)
deleteBtn.addEventListener("click", function () {
    if (isLocked == true) {
        alert("First unlock it");
        return;
    }
    deleteHelper();
});
function lockHelper(e) {
    // lock -> clicked
    isLocked = true;
    // edit -> disabled
    disableEdit();
}
function unlockHelper(e) {
    isLocked = false;
    showAllColor();
    // edit -> enable
    enableEdit();
}
function deleteHelper(e) {
    if (isDelete == false) {
        isDelete = true;
    } else {
        isDelete = false;
    }
}   

function disableEdit() {
    let allTickets = document.querySelectorAll(".ticket");
    for (let i = 0; i < allTickets.length; i++) {
        let textarea = allTickets[i].querySelector("textarea");
        textarea.setAttribute("readonly", "")
    }
}
function enableEdit() {
    let allTickets = document.querySelectorAll(".ticket");

    for (let i = 0; i < allTickets.length; i++) {
        let textarea = allTickets[i].querySelector("textarea");
        textarea.removeAttribute("readonly", "")
    }
}
function showAllColor() {
    let allTickets = document.querySelectorAll(".ticket");
    // check there headings
    for (let i = 0; i < allTickets.length; i++) {
        // show
        allTickets[i].style.display = "block";
    }
    for (let i = 0; i < colorBoxes.length; i++) {
        // if -> elem has class -> remove
        // doesnot -> leave
        colorBoxes[i].classList.remove("clicked");
    }
}
