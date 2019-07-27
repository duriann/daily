let _ = require('underscore')

function always(value){
  return function(){
    return value
  }
}

var f = always({})
console.log('f() === f() ',f() === f());
var g = always({})
console.log('f() === g() ',f() === g());
//always 这样子的函数被称为组合子(combinator)