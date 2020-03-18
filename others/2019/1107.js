let num = 1
let obj = {name: 'xg'}
function change(param){
  console.log('param',param)
  param = 2
  param.name = 'bl'
}
change(num)
change(obj)
console.log(num,obj);