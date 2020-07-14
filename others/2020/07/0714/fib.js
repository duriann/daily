let cached = {}
var fib = function(n) {
    if(n === 2 || n === 1){
        return 1
    }
    if(n === 0){
        return 0
    }
    if(cached[n]){
        return cached[n]
    }else{
         return cached[n] = (fib(n-2) + fib(n-1))%1000000007
    }
   
};
var fib = function(n) {
  if(n === 2 || n === 1){
      return 1
  }
  if(n === 0){
      return 0
  }
    return  (fib(n-2) + fib(n-1))%1000000007
  }

  var fib = function(n) {
    let cached = {}
    function f(m){
    if(m === 2 || m === 1){
            return 1
        }
        if(m === 0){
            return 0
        }
        if(cached[m]){
            return cached[m]
        }else{
            return cached[m] = f(m-2) + f(m-1)
        }
    }
    return f.call(null,n)
};
 
console.log(fib(45));