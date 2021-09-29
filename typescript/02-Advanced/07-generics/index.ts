//泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

function createArray(length: number, value: any): Array<any> {
  let result = []
  for (let i = 0; i < length; i++) {
    result.push(value)
  }
  return result
}
createArray(3, 2)
//这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型：
//Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。

function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result.push(value)
  }
  return result
}
createArray2<string>(3, 'a')

//定义泛型的时候，可以一次定义多个类型参数：
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
swap(['a', 1])

//在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
function loggingIndentity<T>(arg: T): T {
  // console.log(arg.length) Error:(30, 21) TS2339: Property 'length' does not exist on type 'T'.
  return arg
}

function loggingIndentity2<T extends string>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingIndentity2('')

interface Lengthwise {
  length: number
}
type Test = string | Array<any> //这样子也可以
function loggingIndentity3<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingIndentity3('a')
loggingIndentity3([1, 2, 3])

//泛型接口
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}
