let arr = [[2, 6, 'a'], [8, 4, 6], [10]]

let max = (x)=>x.reduce((max,curr)=>{
  return max = curr > max ? curr : max
},x[0])

let max2 = (x)=>Math.max.apply(null,x)
let ret = arr.map(x=>max2(x))
console.log('ret: ',ret)
console.log(Array.from('a'));

console.log(Math.max.apply(null,[1,3,4,5]));


const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
const firstTwoMax = ary(Math.max, 2);
let ret2 = [[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)); // [6, 8, 10]
console.log('ret2 ',ret2);
console.log(Math.max(...[2,1,3]));