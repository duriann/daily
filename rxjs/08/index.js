const {interval, of} = require('rxjs')
const {take,takeUntil, concatAll} = require('rxjs/operators')
let source = interval(1000)
//take
let take3 = source.pipe(take(3))
// take3.subscribe(
//   value=>console.log(value),
//   err=>console.log(err),
//   ()=>console.log('complete')
// )

//takeUntil
console.log('分割线==========================================================');
//concatAll

let obs1 = interval(100).pipe(take(3))
let obs2 = interval(500).pipe(take(2))
let obs3 = interval(200).pipe(take(1))
let source2 = of(obs1,obs2,obs3)
let exp = source2.pipe(concatAll(source2))
exp.subscribe({
  next: v=>console.log(v),
  complete: ()=>console.log('完成')
})
