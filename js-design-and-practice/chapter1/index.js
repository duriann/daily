let obj = (function(){
  var _name = 'bl'
  return {
    getName: function(){
      return _name
    }
  }
})()
console.log(obj.getName());

let Plane = function(){
  this.blood = 100,
  this.level = 1
}
let plane = new Plane()
console.log(plane)
plane.blood = 98
let plane2 = Object.create(plane)
console.log(plane2);

Object.create = Object.create || function(obj){
  let Fn = function(){}
  Fn.prototype = obj
  return new Fn()
}
console.log(Object.prototype.__proto__);

let obj1 = new Object()
let obj2 = {}
console.log(Object.getPrototypeOf(obj1) === Object.prototype)
console.log(Object.getPrototypeOf(obj2) === Object.prototype)