/**
 * get方法用于拦截某个属性的读取操作，
 * 可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
 */

 let person = {
   name: 'bl'
 }

 let proxyPerson = new Proxy(person,{
   get(target,propkey,receiver){
    if(propkey in target){
      return target[propkey]
    }
    console.log('111');
    throw new ReferenceError (`${propkey} => 不存在该属性!`)
   }
 })

 proxyPerson.name
//  proxyPerson.age

 //get方法可以继承

 let parent = new Proxy({},{
   get(target,propkey,receiver){
    console.log('GET ' + propkey);
    return target[propkey]
   }
 })
let child = Object.create(parent)

child.foo

//实现读取负索引 arr[-n] 为倒数第n个
let arr = [1,2,3]

let proxyArr = new Proxy(arr,{
  get(target,propkey,receiver){
    const index = Number(propkey)
    if(index < 0){
      return target[index+target.length]
    }
    return target[propkey]
  }
})
console.log('proxyArr[-1]',proxyArr[-1]);

var o = {
  a: this,
  b(){
    console.log('this',o.a);
  }
}
o.b()
console.log(o === o.a); //false

/**
 * 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性
 * 否则通过 Proxy 对象访问该属性会报错。
 */
const cannoproxy = Object.defineProperties({},{
  foo: {
    value: 123,
    writable: false,
    configurable: false
  }
})

const proxyCanno = new Proxy(cannoproxy,{
  get(target,propkey){
    if(propkey === 'foo'){
      return 'abc'
    }
  }
})
console.log(proxyCanno.foo);
