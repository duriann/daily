let _ = require('underscore')
let Utils = require('../utils')

function summ(arr,seed){
  if(_.isEmpty(arr)){
    return seed
  }
  return summ(_.rest(arr),_.first(arr) + seed)
}
console.log('summ(_.range(1,100),0) ',summ(_.range(1,100),0));

let obj = {
  name: ['bl','hx'],
  age: 1
}
Object.freeze(obj)
obj.age = 2
console.log(obj);//{ name: [ 'bl', 'hx' ], age: 1 }
// obj.name[0] = 'bll'
// console.log(obj);

function deepFreeze(obj){
  if(!Object.isFrozen(obj)){
    Object.freeze(obj)
  }
  for(let key in obj){
    if(!obj.hasOwnProperty(key) || !_.isObject(obj[key]))
    continue
    deepFreeze(obj[key])
  }
}
deepFreeze(obj)
obj.name[0] = 'bll'
console.log(obj);

let person = {
  name: 'bl'
}
// console.log(_.extend(person,{age: 17}),person);
function merge(){
  return _.extend.apply(null,Utils.construct({},[].slice.call(arguments)))
}
console.log(merge(person,{age:17}),person);
