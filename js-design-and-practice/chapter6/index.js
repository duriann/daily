//代理

let mult = function(){
  console.log('开始计算乘积')
  let a = 1
  for(let i = 0,l = arguments.length; i<l;i++){
    a = a* arguments[i]
  }
  return a
}

let multProxy = (function(){
  let cache = {}
  return function(){
    let args = Array.prototype.slice.call(arguments)
    let key = args.join(',')
    if(cache[key]){
      console.log('缓存。。');
      return cache[key]
    }
    return cache[key] = mult.apply(mult,args)
  }
}())
let res = multProxy(1,2,3,4,5)
console.log(res)
console.log(multProxy(1,2,3,4,5))