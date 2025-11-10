const fs = require('fs');

function checkFileExists(filePath) {
    if (fs.existsSync(filePath)) {
        console.log(`✅ File "${filePath}" exists.`);
        return true;
    } else {
        console.log(`❌ File "${filePath}" does not exist.`);
        return false;
    }
}

module.exports = checkFileExists;
