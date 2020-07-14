// cached fn

function sqrt(arg){
  if(sqrt.cached && sqrt.cached[arg]){
    console.log('cached');
    return sqrt.cached[arg]
  }else{
    sqrt.cached = {}
  }
  return sqrt.cached[arg] = Math.sqrt(arg)
}
console.log(sqrt(4));
console.log(sqrt(9));
console.log(sqrt(9));

function createCachedFn(fn){
  return function(){
    const args = Array.prototype.slice.call(arguments)
    console.log('args',args);
    fn.cached = fn.cached || {}
    console.log('cached',fn.cached);
    return fn.cached[args] ? fn.cached[args] : fn.cached[args] = fn.apply(this,args)
  }
}
function sqrt2(arg){
  return Math.sqrt(arg)
}
let cachedSqrt2 = createCachedFn(sqrt2)
console.log(cachedSqrt2(4));
console.log(cachedSqrt2(9));
console.log(cachedSqrt2(4));


function fibwrap() {
  let cached = {}
  return function fib(num){
    if(cached[num]){
      return cached[num]
    }
    if(num === 1 || num === 2){
      return 1
    }
    return cached[num] = fib(num-2) + fib(num-1)
  }
}
console.log('---------------------------------------------------');
console.log('fib',fibwrap()(100));

// const cachedFib = createCachedFn(fib)
// console.log('cachedFib',cachedFib(10));
// console.log('cachedFib',cachedFib(10));
