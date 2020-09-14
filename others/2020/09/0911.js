//给排序好了的数组去重

let arr = [0,0,1,2,2,2,3,4,4,5]

function deduplication(arr){
  let slow = 0,fast = 1
  for(;fast < arr.length; fast++){
    if(arr[fast] !== arr[slow]){
      slow+=1
      arr[slow] = arr[fast]
    }
  }
  console.log(arr,slow,fast);
}
deduplication(arr)
