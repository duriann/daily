Function.prototype.fakeBind = function(){

  let fn = this
  let context = arguments[0]
  let params = [].slice.call(arguments,1)

  let resFn = function(...args){
    return fn.apply(this instanceof resFn ? this : context,[...params,...args] )
  }
  let tmpFn = function(){}
  tmpFn.prototype = this.prototype
  resFn.prototype = new tmpFn()
  return resFn
}

function say(age,hobbit){
  console.log(this.name + ',' + age + 'hobby: ',hobbit);
}
let bn = say.fakeBind({name: '菠萝'},11)
bn("吃饭")