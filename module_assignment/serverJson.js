const http = require('http');

// Create a server that returns JSON data
const server2 = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = { message: 'Hello Rajendra!', status: 'success' };
    res.end(JSON.stringify(data));
});

server2.listen(3001, () => console.log('🚀 JSON Server running at http://localhost:3001'));
