const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileName = './www' + req.url;
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

server.listen(8089);