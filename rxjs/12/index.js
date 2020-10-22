// scan 类似于js数组中的reduce
const {from,interval} = require('rxjs')
const {scan,zip,buffer,bufferTime,bufferCount, take} = require('rxjs/operators')

// from('hello').pipe(zip(interval(600),(x,y)=>x),scan((prev,current)=>prev+current,[])).subscribe(console.log)

// buffer

// buffer 要传入一个 observable(source2)，它会把原本的 observable (source)送出的元素缓存在数组中，
// 等到传入的 observable(source2) 送出元素时，就会触发把缓存的元素送出。


// interval(300).pipe(buffer(interval(1000)),take(3)).subscribe(console.log)

// bufferCount
interval(300).pipe(bufferCount(3),take(3)).subscribe(console.log)
