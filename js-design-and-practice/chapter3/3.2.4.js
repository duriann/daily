Function.prototype.unCurrying = function(){
  let self = this
  return function(){
    let obj = Array.prototype.shift.call(arguments)
    return self.apply(obj,arguments)
  }
}


let push = Array.prototype.push.unCurrying();

(function(){
  push(arguments,4)
  console.log(arguments);
})(1,2,3)

function throttle(fn,time){
  let self = fn,timer,firstTime = true
  return function(){
    let arg = arguments
    let _this = this

    if(firstTime){
      self.apply(_this,arg)
      return firstTime = false
    }
    if(timer){
      return false
    }
    timer = setTimeout(() => {
      self.apply(_this,arg)
      clearTimeout(timer)
      timer = null
    }, time || 500);
  }
}