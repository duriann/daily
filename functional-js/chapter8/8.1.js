let _ = require('underscore')
let Utils = require('../utils')

function LazyChain(obj){
  this._calls = []
  this._target = obj
}

LazyChain.prototype.invoke = function(methodName){
  let args = _.rest(arguments)
  this._calls.push(function(target){
    let meth = target[methodName]
    return meth.apply(target,args)
  })
  return this
}
console.log(new LazyChain([2,1,3]).invoke('sort')._calls)
LazyChain.prototype.force = function(){
  return _.reduce(this._calls,function(target,thunk){
    return thunk(target)
  },this._target)
}
let ret = new LazyChain([2,1,3]).invoke('sort').force()
console.log(ret)
let ret2 = new LazyChain([1,2,3]).invoke('concat',[4,5,6]).invoke('sort')
.invoke('join','-').force()
console.log(ret2)

LazyChain.prototype.tap = function(fun){
  this._calls.push(function(target){
    fun(target)
    return target
  })
  return this
}
new LazyChain([2,1,3])
  .invoke('sort')
  .tap(console.log)
  .force()

//加强
function LazyChain(obj){
  let isLc = obj instanceof LazyChain
  this._calls = isLc ? Utils.cat(obj._calls,[]):[]
  this._target = isLc ? obj._target : obj
}