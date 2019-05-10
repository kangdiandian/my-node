function jsonToString(json) {
  let arr = [];
  for (let key in json) {
    arr.push(`${key}=${json[key]}`);
  }
  return arr.join('&');
}

// json = {url, type, data, success, error}
function ajax(json) {
  json = json || {};
  if (!json.url) return;
  json.data = json.data || {};
  json.type = json.type || 'get';

  let oAjax;
  if (window.XMLHttpRequest) {
    oAjax = new XMLHttpRequest();
  } else {
    oAjax = new ActiveXObject('Microsoft.XMLHTTP');
  }

  switch (json.type) {
    case 'get':
      oAjax.open('GET', json.url + '?' + jsonToString(json.data), true);
      oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8'");
      oAjax.send();
      break;
    case 'post':
      oAjax.open('POST', json.url, true);
      oAjax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      oAjax.send(jsonToString(json.data));
      break;
  }
  oAjax.onreadystatechange = function() {
    if (oAjax.readyState == 4) {
      if (oAjax.status >= 200 && oAjax.status < 300 || oAjax.status == 304) {
        json.success && json.success(oAjax.responseText);
      } else {
        json.error && json.error(oAjax.status)
      }
    }
  };
}