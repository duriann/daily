function splat(fun){
  return function(arr){
    return fun.apply(null,arr)
  }
}
let addArrWithTwoEle = splat(function(x,y){
  return x+y
})
console.log(addArrWithTwoEle([1,4]));

function unsplat(fun){
  return function(){
    return fun.call(null,Array.from(arguments))
  }
}
let joinEle = unsplat(function(arr){
  return arr.join(' ')
})
let joinEleRes = joinEle(1,2,3,4)
console.log('joinEleRes ',joinEleRes);