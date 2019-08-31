let getSingle = function(fn){
  let res
  return function(){
    return res || (res = fn.apply(this,arguments))
  }
}