//箭头函数没有自己的arguments
function test(){
  console.log(arguments)
  return ()=>{
    console.log(arguments)
  }
}
test(12,34)(1,2,3)