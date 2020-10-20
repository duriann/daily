const {interval,combineLatest,zip,from} = require('rxjs')
const {take} = require('rxjs/operators')

const source = interval(500).pipe(take(3))
const newlist = interval(300).pipe(take(6))

//combineLatest: 取得各个 observable 最后送出的值，再输出成一个值
/**
 * source : ----0----1----2|
   newest : --0--1--2--3--4--5|

    combineLatest(newest, (x, y) => x + y);

example: ----01--23-4--(56)--7|

首先 combineLatest 可以接收多个 observable，最后一个参数是 callback function，这个 callback function 接收的参数数量跟合并的 observable 数量相同，依照示例来说，因为我们这里合并了两个 observable 所以后面的 callback function 就接收 x, y 两个参数，x 会接收从 source 发送出来的值，y 会接收从 newest 发送出来的值。

最后一个重点就是一定会等两个 observable 都曾有送值出来才会呼叫我们传入的 callback，所以这段程式是这样运行的

newest 送出了 0，但此时 source 并没有送出过任何值，所以不会执行 callback
source 送出了 0，此时 newest 最后一次送出的值为 0，把这两个数传入 callback 得到 0。
newest 送出了 1，此时 source 最后一次送出的值为 0，把这两个数传入 callback 得到 1。
newest 送出了 2，此时 source 最后一次送出的值为 0，把这两个数传入 callback 得到 2。
source 送出了 1，此时 newest 最后一次送出的值为 2，把这两个数传入 callback 得到 3。。。
 */
const exp = combineLatest(source,newlist,(x,y)=>x+y)
exp.subscribe({
  next(value){
    console.log(value);
  }
})

//zip 会等到 source 跟 newest 都送出了第一个元素，再传入 callback，下次则等到 source 跟 newest 都送出了第二个元素再一起传入 callback
const exp2 = zip(source,newlist,(x,y)=>x+y)
exp2.subscribe({
  next(value){
    console.log('exp2 value',value);
  }
})

const helloS = from('hello')
const i100 = interval(100)
zip(helloS,i100,(x,y)=>x).subscribe({
  next(value){
    console.log(value);
  }
})
