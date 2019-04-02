const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');

const server = http.createServer((req, res) => {
  let getJson = {};
  let getUrl = req.url;
  // 1.使用字符串切片，解析请求的url
  // if (req.url.indexOf('?' !== -1)) {
  //   const arr = req.url.split('?');
  //   getUrl = arr[0];
  //   const arr1 = arr[1].split('&');
  //   for (let i = 0; i < arr1.length; i++) {
  //     const arr2 = arr1[i].split('=');
  //     getJson[arr2[0]] = arr2[1];
  //   }
  // }


  // 2.使用querystring.parse()方法
  // const arr = req.url.split('?');
  // getUrl = arr[0];
  // getJson = querystring.parse(arr[1]);


  // 3.使用url.parse()方法
  const urlParse = urlLib.parse(req.url, true);
  getUrl = urlParse.pathname;
  getJson = urlParse.query;
  console.log(getUrl, getJson);
}).listen(8089);