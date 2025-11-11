const path = require("path");
const fs = require("fs");

const servePage = (page, res, statusCode) => {

    const filePath = path.join(__dirname, "pages", page);

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" })
            res.end("Internal Server Error")
        } else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(data)
        }
    })

}


const logEntery = (page, message) => {
    const filePath = path.join(__dirname, "log" , page);

    fs.appendFileSync(filePath, `${new Date().toISOString()} - ${message}\n`);
}

module.exports = { servePage, logEntery };