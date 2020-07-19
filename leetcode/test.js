new Array(3).forEach((i,index)=>console.log('i'))
new Array(3).map((i,index)=>console.log('i'))

var arr = [undefined,undefined]
arr.length = 3
console.log('arr',arr)
arr.forEach((a,i)=>console.log(i))

console.log(Array.prototype.fill.call(new Array(3),undefined))