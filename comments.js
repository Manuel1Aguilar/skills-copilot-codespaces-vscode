// Create web server
// Create a web server that listens to requests and responds with a JSON object containing the comments.

const http = require('http');
const fs = require('fs');

const comments = require('./comments.json');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Path: comments.json
// {
//   "comments": [
//     {
//       "id": 1,
//       "name": "John Doe",
//       "email": "