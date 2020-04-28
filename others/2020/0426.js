function compose(...funcs){
  if(funcs.length === 0){
    return arg => arg
  }
  if(funcs.length === 1){
    return funcs[0]
  }
  return funcs.reduce((prev,current)=>{
    return (...args) => prev(current(...args))
  })
}
const fn1 = (arg)=>arg*2
const fn3 = (arg)=>arg+3
const fn2 = ()=>2
const cf = compose(fn1,fn2)
console.log(cf());
console.log(fn1(fn2()));

const test = [fn1,fn3,fn2].reduce((prev,current)=>{
  console.log(prev);
  return (args) => prev(current(args))
})
console.log(test());
