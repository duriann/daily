let _ = require('underscore')

console.log(_.range(5));

function repeat(times,value){
  return _.map(_.range(times),function(){
    return value
  })
}

let repeatRes = repeat(5,'check')
console.log('repeatRes ',repeatRes)

function repeatedly(times,fun){
  return _.map(_.range(times),fun)
}

let repeatedlyRes = repeatedly(3,function(){
  return Math.random()
})
console.log('repeatedlyRes ',repeatedlyRes)

function iterateUntil(fun,check,init){
  let ret = []
  let res = fun(init)
  while(check(res)){
    ret.push(res)
    res = fun(res)
  }
  return ret
}

let iterateUntilRes = iterateUntil(function(n){
  return n+n
},function(n){
  return n <= 2048
},1)
console.log('iterateUntilRes ',iterateUntilRes);
