let _ = require('underscore')

let nums = [1,2,3,null,5]
let sum = _.reduce(nums,function(sum,curr){
  return sum * curr
})
console.log('sum ',sum);

function existy(x){
  return x != null
}

function fnull(fun){
  let defaults = _.rest(arguments)
  return function(){
    let args = _.map(arguments,function(e,i){
      return existy(e) ? e : defaults[i]
    })
    return fun.apply(null,args)
  }
}

let safeMult = _.reduce(nums,fnull(function(sum,curr){
  return sum * curr
},1,1))
console.log('safeMult ',safeMult)