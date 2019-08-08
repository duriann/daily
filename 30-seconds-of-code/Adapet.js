function ary(fn,n){
  return (...args)=>{
    let param = args.slice(0,n)
    return fn(...param)
  }
}

const firstTwoMax = ary(Math.max,3)
let res = [[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x))
console.log(res);

function call(key,args){
  return (arg)=>{
    return arg[key](args)
  }
}
// Promise.resolve([1,2,3])
//   .then(call('map',x => 2 * x))
//   .then(console.log)
// const map = call.bind(null,'map')
// Promise.resolve([1,3,6])
//   .then(map(x => x * 3))
//   .then(console.log)
console.log(call('map',i=>{
  return i + 1
})([1,2,3]));