/**
 *
 * construct()方法用于拦截new命令，下面是拦截对象的写法。

   const handler = {
      construct (target, args, newTarget) {
        return new target(...args);
      }
    };
    construct()方法可以接受三个参数。

    target：目标对象。
    args：构造函数的参数数组。
    newTarget：创造实例对象时，new命令作用的构造函数（下面例子的p）。
 */

 const p = new Proxy(function(){},{
   construct(target,args,newTarget){
    console.log('called: ', args.join(', '));
    return {
      value: args[0] + 'proxy'
    }
   }
 })
console.log( new p(12,33));

//construct方法必须返回一个对象 不然报错
