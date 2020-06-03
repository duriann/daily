Array.prototype.fakeReduce = function(callback,initValue){

  var acc = initValue //累加值 = 初始值
  var k = 0
  //如果初始值没传 默认是该数组的第一个不为空的元素
  if(acc === undefined){
    for(; k<this.length;k++){
      if(k in this){
        acc = this[k]
        k++ //这边如果没有给k加1的话 下面调用的时候会多计算一个k
        break
      }
    }
  }

  for(; k<this.length;k++){
    if(k in this){
      acc = callback.call(undefined,acc,this[k],k,this)
    }
  }
  return acc
}

const val = [,,1,2,,3].fakeReduce(function(acc,next,index){
  console.log('acc',acc,'next',next)
  return acc + next
})
console.log(val)
const val2 = [1,2,,3].reduce(function(acc,next,index){
  return acc + next
})
console.log(val2)