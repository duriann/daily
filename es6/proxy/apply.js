/**
 * apply方法拦截函数的调用、call和apply操作。
   apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
 */
let target = () => 'I am the target'
let p = new Proxy(target,{
  apply(target,context,arguments){
    return 'I am the proxy'
  }
})

console.log(p(),typeof p);

function add(a,b){
  return a + b
}

let doubleAdd = new Proxy(add,{
  apply(){
    return Reflect.apply(...arguments) * 2
  }
})

console.log(doubleAdd(1,2)); //6
