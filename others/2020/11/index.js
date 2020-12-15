function a() {
  var data = 232;
  a = function a() {
    console.log('闭包？');
    return data;
  };
  return data;
}
console.log(a());

var b = a;
console.log(b());

function c() {
  var data = 222;
  return (() => data)();
}
console.log(c());
var d = c;
console.log(d());
