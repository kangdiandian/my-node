http请求的两种方式处理

请求header最大32k  －－ GET方法
请求content最大1G  －－ POST方法

视频4
一.处理GET请求url，共三种方法，
  1.使用字符串切片处理
  2.使用使用querystring.parse()方法
  3.使用url.parse(url, true)方法
