/**
 * 概述 § ⇧
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
 */

 let obj = new Proxy({name: 'bl'},{
   get: function(target,propkey,receiver){
      console.log(typeof target,typeof propkey,typeof receiver);
      // console.log(`target: ${target} propkey: ${propkey} receiver: ${receiver}`);
      console.log('terget',target,'propkey',propkey,'receiver',receiver);
      return Reflect.get(target,propkey,receiver)
   }
 })

console.log(obj.name);

/**
 * Proxy 支持的拦截操作一览，一共 13 种。

  get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
  set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
  has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
  deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
  ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
  getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
  defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
  preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
  getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
  isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
  setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
  apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
  construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
 */

/**
 * 正常情况下，Proxy代理的钩子函数中的this指向的是Proxy代理实例（construct钩子函数除外，该钩子函数中this指向的是handler)

虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
 */

