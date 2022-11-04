// The addEventListener() method attaches an event handler to an element.
window.addEventListener("load", function () {// button
    console.log("hello");
    let button = document.querySelector("button");
    // input
    let input1 = document.querySelector("input");
    // ul
    let ul = document.querySelector("ul");
    // listen to an event -> and run our logic after that event
    button.addEventListener("click", fn);

    function fn() {
        let tasks = input1.value;
        if (tasks) {
            taskCreator(tasks)
            input1.value = "";
        } else {
            alert("create a task");
        }
    }
    function taskCreator(tasks) {
        let div = document.createElement("div");
        let li = document.createElement("li"); 
        let button = document.createElement("button");
        li.textContent = tasks;
        button.textContent = "X";

        div.appendChild(li);
        div.appendChild(button);
        ul.appendChild(div);
        button.addEventListener("click", function () {
            div.remove();
        })
    }
})

