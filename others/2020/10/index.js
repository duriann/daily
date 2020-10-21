const uncurry = f => (...args) => args.reduce((g, x) => g(x), f);

function add(x,y){
  return x+y
}

function curry(fn){
  return function(...args){
    return fn.apply(fn,args)
  }
}
