let obj = (function(){
  let value = 0
  return {
    increment: function(inc){
      value += inc
    },
    getValue: function(){
      return value
    }
  }
}())
console.log(obj.getValue());

function fib(n){
  if(n<2){
    return n
  }
  return fib(n-1) + fib(n-2)
}
// console.log(fib(100));

let cache = {}
function fib2(n){
  if(n<2){
    return n
  }
  if(cache[n]){
    return cache[n]
  }else{
    
    cache[n] = fib2(n-1) + fib2(n-2)
    console.log(cache[n],n);
   return cache[n]
  }
}
console.log(fib2(100));