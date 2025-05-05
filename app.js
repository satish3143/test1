// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, this is a simple Node.js server!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
