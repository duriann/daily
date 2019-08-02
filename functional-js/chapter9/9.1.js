let _ = require('underscore')
let Utils = require('../utils')

function lazyChain(obj){
  let calls = []
  return {
    invoke: function(methodName){
      let args = _.rest(arguments)
      calls.push(function(target){
        let meth = target[methodName]
        return meth.apply(target,args)
      })
      return this
    },
    force: function(){
      return _.reduce(calls,function(ret,thunk){
        return thunk(ret)
      },obj)
    }
  }
}
let lazyOp = lazyChain([1,2,3])
  .invoke('concat',[2,3,3])
  .invoke('sort')
  console.log(lazyOp.force())

function deferredSort(ary){
  return lazyChain(ary).invoke('sort')
}
let deferredSorts = _.map([[2,3,1],[3,4,0]],deferredSort)
console.log(deferredSorts)

function force(thunk){
  return thunk.force()
}
console.log(_.map(deferredSorts,force));