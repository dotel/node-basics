const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Event handler for 'request' event
  console.log('Received a request');
  
  // Set the response content type
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response
  res.end('Hello, world!');
});

// Event handler for 'listening' event
server.on('listening', () => {
  console.log('Server is listening on port 3000');
});

// Start the server
server.listen(3000);
