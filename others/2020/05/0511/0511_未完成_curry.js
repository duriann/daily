function add(a,b){
  return a + b
}

//currying this fn

function curry(fn){
  
}

const curriedAdd = curry(add)
const add5 = curriedAdd(5)
