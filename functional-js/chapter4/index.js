let _ = require('underscore')

let people = [
  {
    name: 'bl',
    age: 16
  },
  {
    name: 'hx',
    age: 17
  },
  {
    name: 'xhh',
    age: 15
  }
]
let maxAgePeople = _.max(people,p=>p.age)
console.log('maxAgePeople ', maxAgePeople);

let res = _.reduce([1,2,3,4,5],function(sum,current){
  console.log('sum ',sum, ' current ',current);
  return sum+current
})
console.log('res ',res)

function finder(valueFun,bestFun,coll){
  return _.reduce(coll,function(best,current){
    let bestValue = valueFun(best)
    let currentValue = valueFun(current)
    return bestValue === bestFun(bestValue,currentValue) ? best : current
  })
}

let finderRes = finder(function(value){
  return value
},Math.max,[1,2,9,4,5])
console.log('finderRes: ', finderRes);

let finderPeople = finder(item=>item.name,(a,b)=>a.length>b.length ? a : b,people)
console.log('finderPeople', finderPeople);

function best(fun,coll){
  return _.reduce(coll,function(x,y){
    return fun(x,y) ? x : y
  })
}

let bestVal = best(function(x,y){
  return x>y
},[2,1,3,0])
console.log('bestVal ',bestVal);