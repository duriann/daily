//1  fake new

function Person(name){
  this.name = name
  this.say = function(){
    console.log('this.name',this.name);
  }
}
function FNew(fn,...args){
  let obj = {}
  obj.__proto__ = fn.prototype
  let res = fn.apply(obj,args)
  if(typeof res === 'object'){
    return res
  }
  return obj
}

const bl = FNew(Person,'bl')
bl.say()

//2 fake call

Function.prototype.mycall = function(context){
  context = context || window || global
  context.fn = this

  let params = []
  for(let i = [1];i<arguments.length;i++){
    params.push(arguments[i])
  }
  let res = eval('context.fn('+ params + ')')

  delete context.fn
  return res
}
let testobj = {
  name: 'testobj'
}
function testcall(age){
  console.log(this.name,'param---40行',age)
  return age
}
console.log('test call ',testcall.mycall(testobj,11))

//curry =======================================================================================================================

function curry(fn){

}


function multiFn(a, b, c) {
  return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);

