var url = '';
function find(str, cha, num) {
  var x = str.indexOf(cha);
  for (var i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }
  return x;
}
var host = window.location.href;

if (host.indexOf('localhost') != -1 || host.indexOf('10.0.6.234') != -1) {
  url = '/api';
}
let index = find(host, '/', 2);
let index2 = find(host, '/#', 0);
console.log(index)
console.log(index2)
console.log(window.location)
console.log(host.substring(index, index2))

// module.exports=url;
// url = url + "/yataischool" // 北师大版本2222
let post = ''
if (index2 != -1) {
  post = host.substring(index, index2)
} else {
  post = host.substring(index, host.length)
}

url = url + post
console.log(url.substring(url.length - 1, url.length))
console.log(url)
export default url;
