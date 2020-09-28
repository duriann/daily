//of
const rxjs = require('rxjs')
let source = rxjs.of('bl','cx')
source.subscribe({
  next: value=>console.log(value)
})

//form
const arr = ['a','b',1]
let source2 = rxjs.from(arr)
source2.subscribe({
  next: value=>console.log(value)
})
//也可以传入promise

let source3 = rxjs.from(new Promise(res=>setTimeout(() => {
  res('Hello Rxjs')
}, 3000)))
source3.subscribe({
  next: value=>console.log(value)
})
