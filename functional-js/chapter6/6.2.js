let _ = require('underscore')
let Utils = require('../utils')

function evenSteven(n){
  if(n === 0){
    return true
  }
  return oddJohn(Math.abs(n) - 1)
}
function oddJohn(n){
  if(n === 0){
    return false
  }
  return evenSteven(Math.abs(n) - 1)
}
console.log(oddJohn(100000))

function flat(array){
  if(_.isArray(array)){
    return Utils.cat.apply(null,_.map(array,flat))
  }
  return [array]
}
console.log(flat([1,2,[3,4,[5]],6]));

function deepClone(obj){
  if(!Utils.existy(obj) || !_.isObject(obj)){
    return obj
  }
  let tmp = new obj.constructor()
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      tmp[key] = deepClone(obj[key])
    }
  }
  return tmp
}