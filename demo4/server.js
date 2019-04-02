const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

  let reqData; // 用来接收数据。
  let i = 0;
  // data数据到达一次（post数据分多次发送，因此该方法会调用多次，每次一段数据）
  req.on('data', function(data) {
    console.log(`第${i++}次接收数据`);
    reqData += data;
  });
  // data数据完全到达
  req.on('end', function(){
    const postQuery = querystring.parse(reqData);
    console.log(postQuery);
  });
}).listen(8089);