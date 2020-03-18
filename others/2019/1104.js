let arr = [
  {
    1: 111,
    2: 222,
    3: 333
  }
]
let obj = {}
arr.forEach(element => {
  for(let k in element){
    obj[k] = element[k]
  }
});
console.log(obj)