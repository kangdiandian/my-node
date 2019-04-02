const http = require('http');
const url = require('url');
const formidable = require('formidable');
const util = require('util');

function start(route, handle) {
  function onRequest(request, response) {
    if (request.url == '/upload' && request.method.toLowerCase() == 'post') {
      const form = new formidable.IncomingForm();
      form.parse(request, (err, fields, files) => {
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
      });
    }
    let postData = '';
    // const pathname = url.parse(request.url).pathname;
    // const form = new fromidable.IncomingForm();
    // if (pathname == '/favicon.ico') return;
    // console.log('Request for ' + pathname + ' received');
    // request.setEncoding('utf8');
    // request.addListener('data', (postDataChunk) => {
    //   postData += postDataChunk;
    //   console.log('Received POST data chunk' + postDataChunk + ' .');
    // });
    // request.addListener('end', () => {
    //   route(handle, pathname, response, postData);
    // });
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.write(content);
    // response.end();
  }
  http.createServer(onRequest).listen('8888');
};

exports.start = start;
