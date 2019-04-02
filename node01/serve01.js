const http = require('http');
http.createServer((request, response) => {
  console.log('request received');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('hello world 01');
  response.end();
}).listen(8888);

console.log('request start');
