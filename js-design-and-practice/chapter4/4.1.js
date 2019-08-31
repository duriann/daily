let Singleton = function(name){
  this.name = name,
  this.instance = null
}
Singleton.prototype.getName = function(){
  return this.name
}
Singleton.getInstance = function(name){
  if(!this.instance){
    this.instance = new Singleton(name)
  }
  return this.instance
}
let a = Singleton.getInstance('a')
let b = Singleton.getInstance('b')
console.log(a === b);

let Singleton2 = function(name){
  this.name = name
}
Singleton2.prototype.getName = function(){
  return this.name
}
Singleton2.getInstance = (function(){
  let instance = null
  return function(name){
    if(!instance){
      instance = new Singleton(name)
    }
    return instance
  }
})()