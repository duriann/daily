//传统方法中，JavaScript 通过构造函数实现类的概念，通过原型链实现继承。而在 ES6 中，我们终于迎来了 class。
//TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。

class Animal {
    public name: string
    private age: number
    constructor(name: string,age){
        this.name = name
        this.age = age
    }
}
let a1 = new Animal('bl',23)
// a1.age = 2
a1.name = 'xg'
console.log(a1)