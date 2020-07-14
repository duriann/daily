//实现一个new操作符
/**
 * new操作符: 
 *  1:创建一个新的对象
 *  2:把this指向那个对象
 *  3:将那个对象的原型执行构造函数的原型
 *  4:如果那个构造函数没有返回对象的话  就返回这个新创建的对象
 *  */ 
function MyNew(fn,...params){
  var obj = {}

  var res = fn.apply(obj,params)
  obj.__proto__ = fn.prototype

  if(typeof res !== 'object' && typeof res !== 'null'){
    return obj
  }
  return res
}

function Person(name){
  this.name = name
  // return {
  //   id: 3
  // }
}
var p1 = MyNew(Person,'菠萝')
console.log(p1);