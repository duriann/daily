function F1(name){
  this.name = name
  this.say = function(){
    console.log('my name is ',this.name)
  }
}
F1.prototype.eat = function(){
  console.log('吃饭饭');
}
let obj = new F1('菠萝')
obj.say()
obj.eat()
console.log(obj.__proto__.__proto__.constructor)
console.log(F1.__proto__.__proto__.__proto__);