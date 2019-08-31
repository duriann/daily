function isType(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
}
let isString = isType("String");
console.log(isString("123"));

Function.prototype.before = function(fn){
  let self = this
  return function(){
    fn.apply(this,arguments)
    return self.apply(this,arguments)
  }
};

var func = function(arg) {
  console.log(arg);
};
func = func
  .before(function() {
    console.log(1);
  })
func(123);
