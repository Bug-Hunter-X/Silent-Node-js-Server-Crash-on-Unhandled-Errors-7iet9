const http = require('http');

const requestListener = (request, response) => {
  try {
    response.writeHead(200);
    // Simulate error: Access a non-existent property. Comment this out to run normally
    //console.log(request.nonExistentProperty);
    response.end('Hello, World!');
  } catch (err) {
    console.error('Error handling request:', err);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});