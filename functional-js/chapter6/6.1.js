let _ = require('underscore')
let Utils = require('../utils')

function arrlength(arr){
  let len = 0
  arr.forEach(()=>{
    len++
  })
  return len
}

function length(arr){
  if(_.isEmpty(arr)){
    return 0
  }
  return 1+length(_.rest(arr))
}

console.log(length([1,1,1,1,1]))

function cycle(times,ary){
  if(times === 0){
    return []
  }
  return Utils.cat(ary,cycle(times-1,ary))
}
console.log('cycle(3,[1,2]) ',cycle(3,[1,2]))

let ziped = _.zip(['a','b','c'],[1,2,3])
console.log(ziped);

//6.1.3 递归和组合函数 Conjoin和Disjoin

function andify(){
  let preds = _.toArray(arguments)
  return function(){
    let args = _.toArray(arguments)

    let everything = function(ps,truth){
      if(_.isEmpty(ps)) return truth
      return _.every(args,_.first(ps)) && everything(_.rest(ps),truth)
    }
    return everything(preds,true)
  }
}

let evenNums = andify(_.isNumber,item=>item%2===0)

console.log(evenNums(1,23,''))
console.log(evenNums(6,2,4))