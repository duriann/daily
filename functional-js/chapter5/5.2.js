let _ = require('underscore')

function rightAwayInvoker(){
  let args = _.toArray(arguments)
  let method = args.shift()
  let target = args.shift()
  return method.apply(target,args)
}

let rightAwayInvokerRes = rightAwayInvoker(Array.prototype.reverse,[1,2,3])
console.log('rightAwayInvokerRes',rightAwayInvokerRes);


function div(n,d){
  return n/d
}
function curry2(fun){
  return function(second){
    return function(first){
      return fun(first,second)
    }
  }
}
let div10 = curry2(div)(10)
console.log('div10(50) ',div10(50))