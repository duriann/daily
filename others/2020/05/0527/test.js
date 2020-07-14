//js继承

function Car(name){
  this.name = name
}
Car.prototype.say = function(){
  console.log('name: ',this.name);
}

function QQCar(name){
  Car.call(this,name)
}
QQCar.prototype = new Car()

let c1 = new Car('c1')
let qq1 = new QQCar('qq')
qq1.say()
console.log(qq1.name);
console.log(typeof qq1);
console.log(qq1.__proto__.constructor === Car);
console.log(qq1 instanceof Car);