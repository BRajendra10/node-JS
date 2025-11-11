// Built-in module
const http = require("http");
const path = require("path");
const fs = require("fs");

// Custom module
const { servePage, logEntery } = require("./serve_module.js");


const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            servePage("index.html", res, 200);
            logEntery("server.log", "Visiting home page")
            break;

        case '/about':
            servePage("about.html", res, 200);
            logEntery("server.log", "Visiting about page")
            break;

        case '/contact':
            servePage("contact.html", res, 200);
            logEntery("server.log", "Visiting contact page")
            break;

        default: 
            servePage("404.html", res, 200);
            logEntery("server.log", "Internal Server error")
    }

})

server.listen(8080, () => {
    console.log("Server is running at http://localhost:8080");
})