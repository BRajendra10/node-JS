const fs = require("fs");

function createFileAndWrite(fileName, fileContent) {
    fs.writeFileSync(fileName, fileContent);
}

function readFile(fileName) {
    return fs.readFileSync(fileName, "utf8");
}

function addMoreInfoToFile(fileName, info) {
    fs.appendFileSync(fileName, `\n${info}`);
}

module.exports = {
    createFileAndWrite,
    readFile,
    addMoreInfoToFile,
};