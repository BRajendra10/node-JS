const http = require('http');

// Create a basic HTTP server that returns “Server is Running Successfully”
const server1 = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is Running Successfully');
});

server1.listen(3000, () => console.log('Server 1 running at http://localhost:3000'));
