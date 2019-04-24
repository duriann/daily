class Point{
  constructor(x,y){
    this.x = x,
    this.y = y
  }
  toString(){
    return `(${this.x},${this.y})`
  }

  set testSet(value){
    console.log('set value',value);
  }
}

let pos = new Point(112,231)
console.log(pos.toString())

console.log(Object.keys(Point.prototype))//toString 不可枚举 和es5不同
console.log(Reflect.ownKeys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));

//constructor方法默认返回实例对象 this 如果指定返回为别的对象 实例对象将不再是那个类的实例 也就无法调用方法了

console.log(Object.getOwnPropertyDescriptor(Point.prototype,'testSet'));

//静态方法  在方法前加static关键字 表示该方法不会被继承 而是直接通过类来调用
class Foo{
  static foo(){
    this.bar()
  }

  static bar(){
    console.log('hello');
  }

  bar(){
    console.log('world');
  }
}
Foo.foo()
//静态方法可以和实例方法重名  静态方法中的this是指那个类 而不是实例
//父类的静态方法可以被子类继承


//3 实例属性除了定义在constructor方法中 也可以定义在类的最顶层 es7提案 需要babel转
// class NewInstanceAttr{
//   _count = 0;
//   add(){
//     this._count++
//   }
//   get(){
//     return this._count
//   }
// }
// let count = new NewInstanceAttr()
// count.add()
// console.log(count.get())

