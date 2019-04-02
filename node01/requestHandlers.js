const exec = require('child_process').exec;
const querystring = require('querystring');

function start(response, postData) {
  // console.log('Request handler start was called.');
  // exec('find /', {timeout: 10000, maxBuffer: 20000*1024}, function(error, stdout, stderr){
  //   if (error) {
  //     console.error('执行出错' + error);
  //     return;
  //   }
  //   response.writeHead(200, {'Content-Type': 'text-plain'});
  //   response.write(stdout);
  //   response.end();
  // });
  const body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
};

function upload(response, postData) {
  console.log('Request handler upload was called.' + postData);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('hello upload' + querystring.parse(postData).text);
  response.end();
};

exports.start = start;
exports.upload = upload;
