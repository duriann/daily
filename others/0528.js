let a = [1,4,2,5,3,6,66,3,2]
let b = [2,3,14,5,4,6]

let c = a.filter(item=>{
  return !b.includes(item)
})
console.log(c);