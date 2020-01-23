//联合类型（Union Types）表示取值可以为多种类型中的一种。

let name: string | number = '菠萝'
name = 210
//name = false Error:(5, 1) TS2322: Type 'false' is not assignable to type 'string | number'.


//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法

function getLength(something: string | number) {
    //return something.length  Error:(11, 22) TS2339: Property 'length' does not exist on type 'string | number'.
    //   Property 'length' does not exist on type 'number'.
    return something.toString()
}

//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let age: number | string
age = '18'
age.toString()
age = 18
// age.length Error:(21, 5) TS2339: Property 'length' does not exist on type 'number'.

export {}