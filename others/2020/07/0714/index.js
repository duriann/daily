//节流 指定时间内 不管调用多少次 只处理一次

function throttle(fn,time){
  let flag = true

  return function(...args){
    if(!flag) return
    let that = this
    flag = false
    setTimeout(function(){
      fn.apply(this,args)
      flag = true
    },time)
  }
}

//防抖 不管调用多少次 只处理最后一次
function debounce(fn,time){
  let timeid = void 0
  return function(...args){
    if(timeid) clearTimeout(timeid)
    timeid = setTimeout(()=>fn.apply(this,args),time)
  }
}

//上面的防抖是有问题的 如果一直调用 一次都不会处理
