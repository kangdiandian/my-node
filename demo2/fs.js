const fs = require('fs');
// 异步写入文件，接收三个参数，文件名，内容和回调
// fs.writeFile('a.txt', 'abcdefg', (err) => {
//   if (err) throw err;
// });

// 异步读取文件内容，接收两个参数，被读取文件名，回调。 回调接收两个参数，错误信息和读取内容
fs.readFile('a.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});