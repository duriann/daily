let mult = function(){
  let a = 1
  for(let i = 0,l = arguments.length; i < l; i++){
    a *= arguments[i]
  }
  return a
}

let cached = {}
let mult2 = function(){
  let args = Array.prototype.join.call(arguments,',')
  if(cached[args]){
    return cached[args]
  }
  let a = 1
  for(let i = 0,l = arguments.length; i < l; i++){
    a *= arguments[i]
  }
  return cached[args] = a
}

let mult3 = (function(){
  let cached = {}
  return function(){
    let args = Array.prototype.join.call(arguments,',')
    if(cached[args]){
      return cached[args]
    }
    let a = 1
    for(let i = 0,l = arguments.length; i < l; i++){
      a *= arguments[i]
    }
    return cached[args] = a
  }
 
})()
let res = mult3(1,2,3)
console.log(res)
console.log(mult3(1,2,3))

