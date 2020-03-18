let obj = {
  1: 'a',
  2: 'b',
  3: 'c'
}
for(let k in obj){
  if(obj[k] === 'a'){
    return console.log('hh');
  }
  console.log('hehe')
}