const fs = require("fs")
const path = require("path");

let Modules = ["JavaScript", "sql", "react", "html", "css"];

let WebDevPath = path.join(process.cwd(), "Web Dev");

if (fs.existsSync(WebDevPath)) {
    console.log("File already created");
} else {
    fs.mkdirSync(WebDevPath);
}

for (let i = 0; i < Modules.length; i++) {
    let modulePath = path.join(WebDevPath, Modules[i]);

    if (fs.existsSync(modulePath)) {
        console.log(Modules[i], "already exists");
    } else {
        fs.mkdirSync(modulePath);
    }
}