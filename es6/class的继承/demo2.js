class A{
  constructor(){
    console.log(new.target.name)
  }
}
class B extends A{
  constructor(){
    super()
  }
}
//虽然super当做函数调用的时候 是指父类构造器 但是super内部的this是子类
new A()
new B()

//如果super当对象用在普通方法中 指像父类原型对象
//如果用在static方法中 指向父类

//在子类普通方法中通过super调用父类的方法时 方法内部的this指向子类实例