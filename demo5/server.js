const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const obj = urlLib.parse(req.url, true);
  const url = obj.pathname;
  const getQuery = obj.query;

  // console.log(obj, url, getQuery);

  let str;
  req.on('data', data => {
    str += data;
  });
  req.on('end', () => {
    const postQuery = querystring.parse(str);
    console.log(url, getQuery, postQuery);
    const fileName = './www' + url;
    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.write('404');
      } else {
        res.write(data);
      }
      res.end();
    });
  });
}).listen(8086);