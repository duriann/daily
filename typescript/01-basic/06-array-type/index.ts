//在 TypeScript 中，数组类型有多种定义方式，比较灵活。
//1: 最简单的方法是使用「类型 + 方括号」来表示数组：

let names: string[]
//数组的项中不允许出现其他的类型：
// names = [1,2,3] Error:(5, 14) TS2322: Type 'number' is not assignable to type 'string'.
names = ['1','2','3']
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
// names.push(4)// Argument of type 4 is not assignable to parameter of type 'string'.

//2: 我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：

let fib: Array<number> = [1,1,2,3,5]

//3: 用接口表示数组

interface NumberArray {
    [prop: number]: number
}
let myArr: NumberArray = {
    0: 1,
    1: 1
}
let myArr2: NumberArray = [1,2,3,4,5]

// 常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function sum(){
    let arg: IArguments
    console.log(arg)
}