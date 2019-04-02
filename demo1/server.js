const http = require('http');

// 声明服务
var server = http.createServer(function (request, response) {
  // console.log('有人来了');
  // 向请求发送响应头。 状态码是一个 3 位的 HTTP 状态码， 如 404。 最后一个参数 headers 是响应头。
  response.writeHead(200);
  // 该方法发送响应数据
  response.write('abc');
  // 此方法向服务器发出信号， 表明已发送所有响应头和主体， 该服务器应该视为此消息已完成。 必须在每个响应上调用此 response.end() 方法。
  // 可传回调函数，响应流完成后调用它
  response.end();
});

// 监听
server.listen(8089);