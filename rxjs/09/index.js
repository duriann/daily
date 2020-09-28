//skip 跳过前n个
const {interval,of,concat} = require('rxjs')
const {skip, take, takeLast, startWith,merge } = require('rxjs/operators')
let source = interval(1000)
const un = source.pipe(skip(1)).subscribe({
  next: v=>{
    console.log('source v',v);
    if(v>2){
      un.unsubscribe()
    }
  }
})
//takeLast
let source2 = interval(1000).pipe(take(6),takeLast(2))
source2.subscribe({
  next: v=>console.log('source2 v',v)
})

//concat
let source3 = concat(of(3),of(4,5,6))
source3.subscribe({
  next: v=>console.log('source3 v',v)
})

//startWith 发出给定的第一个值

const source4 = of(1,2,3)
source4.pipe(startWith(-1,0)).subscribe({
  next: v=>console.log('source4 v',v)
})

//merge 将多个 observables 转换成单个 observable 。
//每2秒发出值
const first = interval(2500)
const second = interval(1000)
const source5 = first.pipe(merge(second))
source5.subscribe(val=>console.log('source5 v',val))
