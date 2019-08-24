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

const collectInto = fn => (...args)=> fn(args)

const collectInto2 = function(fn){
  return function(...args){
    fn(args)
  }
}

const Pall = collectInto(Promise.all.bind(Promise))
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = new Promise(resolve => {
  console.log(resolve)
  return setTimeout(resolve,2000,3)
})
Pall(p1,p2,p3).then(console.log)



function flip(fn){
  return function(first,...args){
    return fn(...args,first)
  }
}
let a = { name: 'John Smith' };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
console.log(b,'11');
b = {};
Object.assign(b, a); // == b
console.log(b);