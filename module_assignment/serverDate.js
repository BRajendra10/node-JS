const http = require('http');
const fs = require('fs');

// Server that writes current date and time to a file every time it's accessed
const server3 = http.createServer((req, res) => {
    const now = new Date().toLocaleString();
    fs.appendFileSync('dates.txt', `Visited at: ${now}\n`);
    res.end('Date and time logged successfully.');
});
server3.listen(3002, () => console.log('Date Logger Server running at http://localhost:3002'));
