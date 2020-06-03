function flat(arr){
  return arr.reduce((prev,curr)=>{
    if(Array.isArray(curr)){
      return [...prev,...flat(curr)]
    }else{
      return [...prev,curr]
    }
  },[])
}
var nums = [1,2,[3,4],[5],[6,[7,8]]]
console.log(flat(nums));