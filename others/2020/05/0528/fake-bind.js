//模拟bind 占位

Function.prototype.fakeBind = function(...args){
  const obj = args[0]
  const that = this
  return function(...param){
    return that.apply(obj,[...args.slice(1),...param])
  }
}

function test(age,a){
  console.log(this.name + 'age' + age,a);
}

const tb = test.bind({name:'菠萝'},11)
tb(2)