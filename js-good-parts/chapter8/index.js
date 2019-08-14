let a = [1,2,3]
let b = [4,5,6]
let c = a.concat(b,true,false)
console.log(c);
let d = a.join('')
console.log(d)
a.pop()
console.log(a)
a.push([1,2,3],4)
console.log(a);
Array.prototype.mypush = function(){
  this.splice.apply(this,[this.length,0].concat(this.slice.apply(arguments)))
  return this.length
}
a.mypush(['a','b'],'c')
console.log(a);
let e = [1,2,3,4,5]
let es = e.slice(-1)//如果参数出现负数 会用length相加变成非负数 这边等同于 e.slice(-1+5,5)
console.log(es);
console.log(e.slice(-1.2));

let f = ['a','b','c']
f.splice(1,1,'d','o','g')
console.log(f);
