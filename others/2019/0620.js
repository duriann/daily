function curry(...nums){
  let args = [...nums]
  console.log('args',args)
  function add(...nums2){
    console.log('nums2',nums2);
    args.push(...nums2)
    return add
  }
  add.toString = () => args.reduce((a,b)=>a+b)
  return add
}

console.log(curry(1)(2,3).toString());
