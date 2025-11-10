const fs = require('fs');

function createFileAndWrite(fileName, fileContent) {
    fs.writeFileSync(fileName, fileContent);
}

function readFile(fileName) {
    return fs.readFileSync(fileName, "utf8");
}

function logMessage(message) {
    console.log(message);
    fs.appendFileSync('dates.txt', `${new Date().toISOString()} - ${message}\n`);
}

module.exports = {
    createFileAndWrite,
    readFile,
    logMessage,
};