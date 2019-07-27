let _ = require('underscore')
let utils = require('../utils.js')

function dispatch(/* func */){
  let fns = _.toArray(arguments)
  let size = fns.length

  return function(target){
    let ret = undefined
    let args = _.rest(arguments)
    for(let funIndex = 0; funIndex<size; funIndex++){
      let fun = fns[funIndex]
      console.log('target',target)
      let param = [...target,...args]
      console.log('param',param, 'fun ', fun);
      ret = fun.apply(fun,[...target,...args])
      console.log('ret',ret);
      if(utils.existy(ret)){
        return ret
      }
    }
  }
}

function stringReverse(s){
  if(!_.isString(s)) return undefined
  return s.split('').reverse().join('')
}
let srret = stringReverse('abc')
console.log('srret ', srret);

let rev = dispatch(Array.prototype.reverse,stringReverse)
console.log(rev([1,2,3]))