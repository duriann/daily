//TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述
interface Person {
    name: string,
    age: number
}

let p1: Person = {
    name: 'bl',
    age: 18,
    // gender: 'male' Error:(10, 5) TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
    //   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
}

//有时我们希望不要完全匹配一个形状，那么可以用可选属性

interface Person2 {
    name: string,
    age?: number
}
let p2: Person2 = {
    age: 14,
    name: '123'
}
console.log(p2)

// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式
interface Person3 {
    name: string,
    age: number,
    [prop: string]: any
}
//需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：如果上面不是用any 而是string啥的 那么name和age的类型必须是任意属性的类型的子集
let p3: Person3 = {
    name: 'hx',
    age: 14,
    gender: 'male'
}

//有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
interface Person4 {
    readonly name: string,
    age: number
}
let p4: Person4 = {
    name: 'bl',
    age: 19
}
// p4.name = 'hx' Error:(48, 4) TS2540: Cannot assign to 'name' because it is a read-only property.
export  {}