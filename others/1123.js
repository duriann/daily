
//扁平化数组
function myFlat1(array,floor = 1){
  
  if(floor<1){
    return array
  }
  array = array.forEach(arr=>{
    if(Array.isArray(arr)){
      flated.push(...arr)
    }else{
      flated.push(arr)
    }
  })

  return myFlat1(array,floor-1)
}

let res = myFlat1([1,2,[3,4],[5,[6,7]]])
console.log(res);