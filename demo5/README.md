前后台数据交互练习demo－－用户注册、登陆

定义接口

/user?act=reg&user=aaa&pass=123456
  返回数据{"ok": false, "msg": "原因"}

/user?act=login&user=aaa&pass=123456
{"ok": true, "msg": "原因"}