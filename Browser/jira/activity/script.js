// let button = document.querySelectorAll("color_boxes");
const main = document.querySelector(".main")
const addBtn = document.querySelector(".add");
const options = document.querySelectorAll(".box");

console.log("uuid", uuidv4());

// eventlisteners
addBtn.addEventListener("click", function () {
    if (isLocked == true) {
        alert("First unlock it");
        return;
    }
    handleCreation();
})


function handleCreation() {
    isDelete = false;
    let id = uuidv4();
    createModal(id);
    
}
function createModal(id) {
    let cColor = "black";
    let modal = document.createElement("div");
    modal.setAttribute("class","modal");
    modal.innerHTML = 
`
    <textarea class="contentArea"
    placeholder = "Enter some Task"
    >
    </textarea>

    <div class="pallet_container">
        <div class="pallet_color pink"></div>
        <div class="pallet_color blue"></div>
        <div class="pallet_color green"></div>
        <div class="pallet_color black"></div>
    </div>`;
    main.appendChild(modal);
    // color code
    let allColors = modal.querySelectorAll(".pallet_color")
    for (let i = 0; i < allColors.length; i++) {
        allColors[i].addEventListener("click",function(e){
            cColor = allColors[i].classList[1];
        })
        
    }
    modal.addEventListener("keypress",function(e){
        // to get enter press from keyword
        let key = e.key;
        if(key=="Enter"){
            // get text,color
            let textarea = modal.querySelector("textarea")
            let text = textarea.value;
            modal.remove();
            createTicket(id, cColor, text);
        }
    })
}
// creation of tickets

// 1.when + is clicked ticket will be created
// when u use backtick for multiple lines
// use '$' sign for concatinating instead of '+'
function createTicket(id, color, text) {
    // 2.main -> ticket add
    let ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket");
    ticket.innerHTML = `
    <div class="ticket_header ${color}"></div>
    <div class="ticket_content">
        <div class="ticket_id">
           #${id}
        </div>
        <textarea name="">${text}</textarea>
        </div>`;
    main.appendChild(ticket);

    let header = ticket.querySelector(".ticket_header");
    header.addEventListener("click", changeColor)
    ticket.addEventListener("click", deleteTicket)
    // ticket should have some functionalities
    // 3. change color 
    // 4. lock unlock
}
function changeColor(e) {
    // e.currentTarget give the element on which event has occured
    if (isLocked == true) {
        alert("FIrst unlock it");
        return;
    }
    let header = e.currentTarget;

    let classes = header.classList;
    console.log(classes);
    let cColor = classes[1];
    // alert(cColor);
    // check idx -> next elem uspe put
    let cIdx = 0;

    for (let i = 0; i < colors.length; i++) {
        if (cColor == colors[i]) {
            cIdx = i;
            break;
        }
    }
    let nextIdx = (cIdx + 1) % colors.length;
    let nextColor = colors[nextIdx];
    classes.remove(cColor);
    classes.add(nextColor);
}
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", changeOptionsColor)
}
function changeOptionsColor(e) {
    let elem = e.currentTarget;
    let classes = elem.classList;
    let optionsboxes = classes[1];
    // console.log(options)

    // let secondClass = elem.classList[1];
    if (optionsboxes == "clicked") {
       optionsboxes.classList.remove("clicked");
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove("clicked");
        }
        elem.classList.add("clicked");
    }
}
function deleteTicket(e) {
    if (isDelete == true && isLocked == false) {
        e.currentTarget.remove();
    }
}