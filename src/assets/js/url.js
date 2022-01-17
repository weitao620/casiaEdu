var url = '';
var host = window.location.href;

if (host.indexOf('localhost') != -1 || host.indexOf('192.168') != -1) {
  url = '/api';
}
// module.exports=url;
// url = url + "/yataischool" // 北师大版本

export default url;
