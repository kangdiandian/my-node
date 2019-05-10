const http = require('http');
const fs = require('fs');
const urlLib = require('url');
const querystring = require('querystring');

// user: pass
let json = {};

const server = http.createServer(function(req, res) {
  let str = '';
  // 设置返回值类型
  res.setHeader('Content-Type', 'text/html');
  req.on('data', data => {
    str += data;
  });
  req.on('end', () => {
    const obj = urlLib.parse(req.url, true);
    const url = obj.pathname;
    const getQuery = obj.query;

    const postQuery = querystring.parse(str);

    if (url == '/user') {
      switch (getQuery.act) {
        case 'reg':
          if (json[getQuery.user]) {
            res.write('{"ok": false, "msg": "该用户已存在"}');
          } else {
            json[getQuery.user] = getQuery.pass;
            res.write('{"ok": true, "msg": "注册成功"}');
          }
          break;
        case 'login':
          if (json[getQuery.user] == null) {
            res.write('{"ok": false, "msg": "该用户不存在"}');
          } else if (json[getQuery.user] !== getQuery.pass) {
            res.write('{"ok": false, "msg": "用户名或密码错误"}');
          } else {
            res.write('{"ok": true, "msg": "登录成功"}');
          }
          break;
      }
      res.end();
    } else {
      const fileName = './www' + url;
      fs.readFile(fileName, (err, data) => {
        if (err) {
          res.write('404');
        } else {
          res.write(data);
        }
        res.end();
      });
    }
  });
});

server.listen(8086);