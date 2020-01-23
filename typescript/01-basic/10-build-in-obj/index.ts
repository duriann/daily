//JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。
//内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

//ecmascript 内置对象
let a: Number = 1
let b: Boolean = true
let c: RegExp = /[a-z]/
let d: Date = new Date()

//DOM和BOM 内置对象
let body: HTMLElement = document.body
let as: NodeList = document.querySelectorAll('a')

//Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件
//npm install @types/node --save-dev