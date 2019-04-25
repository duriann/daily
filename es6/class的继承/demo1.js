class Color{
  //静态方法也会被子类继承
  static hello(){
    console.log('hello world');
  }
}
class YelloColor extends Color{
  constructor(r,g,b){
    super()//一定要有super
    this.r = r
    this.g = g
    this.b = b
  }
}
let yello = new YelloColor(255,0,0)
YelloColor.hello()

//判断一个类是否继承自另一个类
console.log(Object.getPrototypeOf(YelloColor) === Color);